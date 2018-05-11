import React, { Component } from 'react';
import PendingTask from './PendingTask';
var shortid = require('shortid');

class PendingList extends Component {
    constructor(props) {
        super(props);
        this.onDone = this.onDone.bind(this);
    }

    onDone(task) {
        this.props.onDone(task);
    }

    render() {
        var element = this.props.list.map((task) => <PendingTask task={task} key={shortid.generate()} onDone={this.onDone}/>);
        
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