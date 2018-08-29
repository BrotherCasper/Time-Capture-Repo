var mongoose = require('mongoose');
var TaskItem = require('./models/TaskItem.js');

mongoose.connect('mongodb://localhost/task', function () {
    console.log("connected.");

    mongoose.connection.db.dropDatabase();

    var items = [{
        name: "Coding",
        time: 2000

    }, {
        name: "Eating",
        time: 5000
    }, {
        name: "Admin",
        time: 5001,
        purchased: true
    }, {
        name: "Sleep",
        time: 0
    }];

    items.forEach(function (item) {
        new TaskItem(item).save();
    })
})