const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // Trim white spaces at both ends of string
    },
    _listId: { // so we can know which list this task belongs to
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task }