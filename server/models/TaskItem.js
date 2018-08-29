var mongoose = require('mongoose');

var TaskItemSchema = {
    name: String,
    purchased: Boolean,
    id: String,
    time: Number
};

var TaskItem = mongoose.model('TaskItem', TaskItemSchema, "taskItems");

module.exports = TaskItem;