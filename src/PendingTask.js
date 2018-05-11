import React, { Component } from 'react';

class PendingTask extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <li>
                {this.props.task}
                <input type="button" value="Edit"/>
                <input type="button" value="Done"/>
            </li>
        );
    }
}

export default PendingTask;