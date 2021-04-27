const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter title of your todo'],
    },
    description: {
        type: String,
        required: [true, 'Please provide description of title']
    },
    users: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
});

module.exports = mongoose.model('Todo', todoSchema);
