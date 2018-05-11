import React, { Component } from 'react';
import CompletedTask from './CompletedTask';

class CompletedList extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        var element = this.props.list.map((task) => <CompletedTask task={task} />);
        return (
            <div>
                Completed Tasks
                <ul>
                    {element}
                </ul>
            </div>
        );
    }
}

export default CompletedList;