
var React = require('react/addons');

console.log("Hello from JSX!");

var TaskItemList = require('./components/TaskItemList.jsx');

var TaskItemStore = require('./stores/TaskItemStore.jsx');
var initial = TaskItemStore.getItems();
function render() {
    React.render(<TaskItemList items={initial} />, app)
}

TaskItemStore.onChange(function (items) {
    initial = items;
    render();
})

render();