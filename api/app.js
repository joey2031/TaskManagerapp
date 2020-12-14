//On 24:00 
const express = require("express");
const app = express();
const { mongoose } = require("./db/mongoose")
const bodyParser = require("body-parser");

// Load in mongoose models
const { List, Task } = require('./db/models');

// load middleware
app.use(bodyParser.json());

/*LIST ROUTES*/
// Get all lists
app.get("/lists", (req, res) => {
    List.find({}).then((lists) => {
        res.send(lists);
    })
});

// Create new list
// In postman set to post and do http://localhost:3000/lists
// Select body, raw, json and enter {"title": "hello world"}
app.post("/lists", (req, res) => {
    let title = req.body.title; // get title that was passed in

    let newList = new List({
        title
    })
    newList.save().then((listDoc) => {
        // full list doc is returned
        res.send(listDoc);
    });

});

// Update list by id
// Eg. In post man set to patch and do: http://localhost:3000/lists/5fd63cc6163b346710a6c925
// Select body, raw, json and enter {"title": "Updated title"}
// findOneAndUpdate is depreciated needed to add  useFindAndModify: false
// in mongoose.js, when I'm done maybe modify this to use the newer version
app.patch("/lists/:id", (req, res) => {
    // it automatically has an id, we didn't need to code it
    List.findOneAndUpdate({ _id: req.params.id }, {
        // $set is a mongoDb keyword. This is saying find a list with 
        //a specific id and with the contents of req.body
        $set: req.body
    }).then(() => {
        // Don't need to send back updated document, the caller 
        //already knows what the updated fields are -> It was provided
        res.sendStatus(200);
    })
});

// Delete list
// Eg. In post man set to delete and do: http://localhost:3000/lists/5fd63cc6163b346710a6c925
app.delete("/lists/:id", (req, res) => {
    List.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    })
})

/*TASKS ROUTES*/
// Get all tasks in a specific list
// In postman set to get and do: http://localhost:3000/lists/5fd6759de71e1e46c08b0f4c/tasks/
app.get("/lists/:listId/tasks", (req, res) => {
    // return all tasks that belong to a list
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    })
});

// create a new task in a specific list
// In postman set to post and do: http://localhost:3000/lists/5fd6759de71e1e46c08b0f4c/tasks
// Select body, raw, json and enter {"title": "string data"}
app.post("/lists/:listId/tasks", (req, res) => {
    // Create a new task in the specific list
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId // listId comes from the route paramaters
    });
    newTask.save().then((taskDoc) => {
        res.send(taskDoc);
    })
});


// Get one task in a list -> Wont be needed for the app
// In postman set to get and do http://localhost:3000/lists/5fd6759de71e1e46c08b0f4c/tasks/5fd67ddcae53e13e004b8022
// Select body, raw, json
app.get("/lists/:listId/tasks/:taskId", (req, res) => {
    Task.findOne({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((task) => {
        res.send(task);
    })
})

// update existing task
// In postman set to patch and do http://localhost:3000/lists/5fd6759de71e1e46c08b0f4c/tasks/5fd67688e71e1e46c08b0f4d
// Select body, raw, json and enter {"title": "string data"}
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    // Update a specific task in a list specified by taskId
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId
    }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })

});

// Delete a task
// In postman se to delete and do  http://localhost:3000/lists/5fd6759de71e1e46c08b0f4c/tasks/
app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
    Task.findOneAndRemove({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc);
    })
})



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})