import React, { Component } from 'react';
import PendingTask from './PendingTask';
import { Panel, ListGroup } from 'react-bootstrap';

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
        (<ListGroup>{element}</ListGroup>);

        return (
            <Panel bsStyle="success">
                <Panel.Heading><h4>Pending Tasks</h4></Panel.Heading>
                {listArea}
            </Panel>
        );
    }
}

export default PendingList;