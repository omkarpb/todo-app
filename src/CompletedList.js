import React, { Component } from 'react';
import CompletedTask from './CompletedTask';
var shortid = require('shortid');

class CompletedList extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        var element = this.props.list.map((task) => <CompletedTask task={task} key={shortid.generate()}/>);
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