var React = require('react/addons');
var action = require('./../actions/TaskItemActionCreator.jsx')

module.exports = React.createClass({
    togglePurchased: function (e) {
        e.preventDefault();

        if (this.props.item.purchased) {
            action.uncomplete(this.props.item);
        } else {
            action.complete(this.props.item);
        }
    },
    delete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);

    },
    render: function () {
        return (
            <div className="task-item row">
                <div className="six columns">
                    <h4 className={this.props.item.purchased ? "strikethrough" : ""}>
                        {this.props.item.name}
                    </h4>
                    <p>This task took <b>{this.props.item.time} seconds</b>.</p>
                </div>
                <form onSubmit={this.togglePurchased} className="three columns">
                    <button className={this.props.item.purchased ? "" : "button-primary"}>{this.props.item.purchased ? "Uncomplete" : "Complete"}</button>
                </form>
                <form className="three columns" onSubmit={this.delete}>
                    <button>&times;</button>
                </form>
                <p> </p>
            </div>
        )
    }
})