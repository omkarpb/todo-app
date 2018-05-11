import React, { Component } from 'react';

class CompletedTask extends Component {
    constructor(props) {
        super(props);
        this.onUndone = this.onUndone.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = ({task: this.props.task});
    }

    onUndone(event) {
        this.props.onUndone(this.props.task);
        event.preventDefault();
    }
    onDelete(event) {
        this.props.onDelete(this.state.task);
        event.preventDefault();
    }
    render() {
        return (
            <li>
                {this.props.task.task}
                <input type="button" value="Delete" onClick={this.onDelete} />
                <input type="button" value="Undone" onClick={this.onUndone} />
            </li>);
    }
}

export default CompletedTask;