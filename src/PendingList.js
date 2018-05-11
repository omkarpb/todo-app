import React, { Component } from 'react';
import PendingTask from './PendingTask';
var shortid = require('shortid');

class PendingList extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        var element = this.props.list.map((task) => <PendingTask task={task} key={shortid.generate()}/>);
        return (
            <div>
                Pending Tasks
                <ul>{element}</ul>
            </div>
        );
    }
}

export default PendingList;