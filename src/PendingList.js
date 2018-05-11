import React, { Component } from 'react';
import PendingTask from './PendingTask';

class PendingList extends Component {
    constructor(props) {
        super(props);
        this.onDone = this.onDone.bind(this);
        this.onSaveEdit = this.onSaveEdit.bind(this);
    }

    onDone(task) {
        this.props.onDone(task);
    }

    onSaveEdit(task) {
        this.props.onSaveEdit(task);
    }

    render() {
        var element = this.props.list.map((task) => 
            <PendingTask task={task} key={task.id} onDone={this.onDone} onSaveEdit={this.onSaveEdit}/>
        );
        
        const listArea = (this.props.list.length === 0) ?
        (<div>No tasks to show</div>) :
        (<ul>{element}</ul>);

        return (
            <div>
                <h1>Pending Tasks</h1>
                {listArea}
            </div>
        );
    }
}

export default PendingList;