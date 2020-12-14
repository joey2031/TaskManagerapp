// This handles connection logic to MongoDb database
const mongoose = require("mongoose");

// set mongoose to use global JS promise instead of bluebird
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TaskManager",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log("Connected to MongoDb!");
    }).catch((err) => {
        console.log("Error while connecting to MongoDb");
        console.log(err);
    });

// prevent depreciation warnings
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", true);
//mongoose.set("useUnifiedTopology", true);

module.exports = {
    mongoose
};