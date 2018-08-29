var React = require('react/addons');
var TaskItem = require('./TaskItem.jsx');
var TaskListAddItem = require('./TaskListAddItem.jsx');
var Timer = require('./Timer.jsx');
module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <h1> Time Capture </h1>
                <div>
                    {this.props.items.map(function (item, index) {
                        return (
                            <TaskItem item={item} key={"item" + index} />
                        )
                    })
                    }
                </div>
                <TaskListAddItem />
                <Timer start={Date.now()} />
            </div>
        )
    }
})