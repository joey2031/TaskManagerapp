const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // Trim white spaces at both ends of string
    }
});

const List = mongoose.model("List", ListSchema);

module.exports = { List }