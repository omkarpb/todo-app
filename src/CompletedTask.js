import React, { Component } from 'react';

class CompletedTask extends Component {
    render() {
        return (
        <li>
            {this.props.task}
            <input type="button" value="Delete"/>
            <input type="button" value="Undone"/>
        </li>);
    }
}

export default CompletedTask;