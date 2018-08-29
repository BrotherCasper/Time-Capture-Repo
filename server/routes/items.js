module.exports = function (app) {

    var TaskItem = require('./../models/TaskItem.js');

    app.route('/api/items')
        .get(function (req, res) {
            TaskItem.find(function (error, doc) {
                res.send(doc);
            })

        })
        .post(function (req, res) {
            console.log("Adding item...", item);
            var item = req.body;
            //  items.push(item);
            var TaskItem = new TaskItem(item);
            taskItem.save(function (err, data) {
                res.status(300).send();
            })
        });

    app.route('/api/items/:id')
        .delete(function (req, res) {
            console.log("removing...", req.params.id);
            TaskItem.findOne({
                _id: req.params.id
            }).remove(function (x) {
                console.log("removed.", x);
            });
        })
        .patch(function (req, res) {
            TaskItem.findOne({
                _id: req.body._id
            }, function (error, doc) {
                console.log(error);
                for (var key in req.body) {
                    doc[key] = req.body[key];
                }
                doc.save();
                res.status(200).send();
            })
        })

}