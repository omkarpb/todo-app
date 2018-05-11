import React, { Component } from 'react';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { newTask: '' };
        this.handleAddNewTask = this.handleAddNewTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAddNewTask(event) {
        if (this.state.newTask.trim() !== '') {
            this.props.addNewTask(this.state.newTask);
        }
        this.setState({ newTask: '' });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ newTask: event.target.value });
    }

    render() {

        return (
            <div>
                <form>
                    <input type="text" placeholder="Add Task.." value={this.state.newTask} onChange={this.handleChange} />
                    <input type="button" value="Add" onClick={this.handleAddNewTask} />
                </form>
            </div>
        );
    }
}

export default AddTaskForm;