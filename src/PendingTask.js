import React, { Component } from 'react';

class PendingTask extends Component {
    constructor(props){
        super(props);
        this.onDone = this.onDone.bind(this);
    }
    onDone(event) {
        this.props.onDone(this.props.task);
        event.preventDefault();
    }
    render() {
        return (
            <li>
                {this.props.task}
                <input type="button" value="Edit"/>
                <input type="button" value="Done" onClick={this.onDone}/>
            </li>
        );
    }
}

export default PendingTask;