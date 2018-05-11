import React, { Component } from 'react';
import PendingTask from './PendingTask';

class PendingList extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        var element = this.props.list.map((task) => <PendingTask task={task}/>);
        return (
            <div>
                Pending Tasks
                <ul>{element}</ul>
            </div>
        );
    }
}

export default PendingList;