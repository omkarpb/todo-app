import React, { Component } from 'react';

class CompletedTask extends Component {
    constructor(props){
        super(props);
        this.onUndone = this.onUndone.bind(this);
    }

    onUndone(event) {
        this.props.onUndone(this.props.task);
        event.preventDefault();
    }
    
    render() {
        return (
        <li>
            {this.props.task}
            <input type="button" value="Delete"/>
            <input type="button" value="Undone" onClick={this.onUndone}/>
        </li>);
    }
}

export default CompletedTask;