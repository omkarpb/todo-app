import React, { Component } from 'react';
import CompletedTask from './CompletedTask';

class CompletedList extends Component {
    constructor(props) {
        super(props);
        this.onUndone = this.onUndone.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onUndone(task) {
        this.props.onUndone(task);
    }

    onDelete(task) {
        this.props.onDelete(task);
    }
    render() {
        var element = this.props.list.map((task) =>
            <CompletedTask task={task} key={task.id} onUndone={this.onUndone} onDelete={this.onDelete} />
        );
        const listArea = (this.props.list.length === 0) ?
            (<div>No tasks to show</div>) :
            (<ul>{element}</ul>);
        return (
            <div>
                <h1>Completed Tasks</h1>
                {listArea}
            </div>
        );
    }
}

export default CompletedList;