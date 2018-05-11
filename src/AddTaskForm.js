import React, { Component } from 'react';

class AddTaskForm extends Component {
    // constructor(props) {
    //     super(props);
    // }
   

    render() {

        return (
            <div>
                <form onSubmit={this.handleAddNewTask}>
                    <input type="text" placeholder="Add Task..." />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AddTaskForm;