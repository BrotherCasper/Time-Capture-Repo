var React = require('react/addons');
var action = require('./../actions/TaskItemActionCreator.jsx')

module.exports = React.createClass({
    getInitialState: function () {
        return { input: "" };
    },
    handleInputName: function (e) {
        this.setState({ input: e.target.value });
    },
    addItem: function (e) {
        e.preventDefault();
        //console.log("Adding item!",this.state.input);
        action.add({
            name: this.state.input,
            time: 1
        });

        this.setState({
            input: ''
        })
    },
    render: function () {
        return (
            <div className='task-addItem'>
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} type='text' onChange={this.handleInputName} />
                    <button> Add Task </button>
                </form>
            </div>
        )
    }
})