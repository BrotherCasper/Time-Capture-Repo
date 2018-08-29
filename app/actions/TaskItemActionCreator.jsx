var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "task-item:add"
        })
    },
    delete: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "task-item:delete"
        })
    },
    complete: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "task-item:complete"
        })
    },
    uncomplete: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "task-item:uncomplete"
        })
    }
}