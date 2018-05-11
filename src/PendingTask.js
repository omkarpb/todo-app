import React, { Component } from 'react';

class PendingTask extends Component {
    constructor(props) {
        super(props);
        this.onDone = this.onDone.bind(this);
        this.state = { isEdit: false, task: this.props.task.task };
        this.handleClickOnEdit = this.handleClickOnEdit.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
        this.onUpdateTask = this.onUpdateTask.bind(this);
        this.onSaveEdit = this.onSaveEdit.bind(this);
    }
    onDone(event) {
        this.props.onDone(this.props.task);
        event.preventDefault();
    }

    handleClickOnEdit(event) {
        this.setState({ isEdit: true });
        event.preventDefault();
    }
    onCancelEdit(event) {
        this.setState({ isEdit: false });        
        event.preventDefault();
    }

    onUpdateTask(event) {
        this.setState({task: event.target.value});
    }

    onSaveEdit(event) {
        if(this.state.task.trim() !== '') {
            this.setState({ isEdit: false });        
            this.props.onSaveEdit({id: this.props.task.id, task: this.state.task});
        } else {
            alert('You must write something for task');
        }        
        event.preventDefault();
    }

    getElement() {
        if (this.state.isEdit) {
            return (
                <li>
                    <input type="text" value={this.state.task} onChange={this.onUpdateTask}/>
                    <input type="button" value="Save" onClick={this.onSaveEdit}/>
                    <input type="button" value="Cancel" onClick={this.onCancelEdit}/>
                </li>)
        } else {
            return (
                <li>
                    {this.props.task.task}
                    <input type="button" value="Edit" onClick={this.handleClickOnEdit} />
                    <input type="button" value="Done" onClick={this.onDone} />
                </li>
            );
        }
    }

    render() {
        const element = this.getElement();
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default PendingTask;