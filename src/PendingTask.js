import React, { Component } from 'react';
import { Button, ListGroupItem, Row, Col, Glyphicon  } from 'react-bootstrap';

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
        this.setState({ task: event.target.value });
    }

    onSaveEdit(event) {
        if (this.state.task.trim() !== '') {
            this.setState({ isEdit: false });
            this.props.onSaveEdit({ id: this.props.task.id, task: this.state.task });
        } else {
            alert('You must write something for task');
        }
        event.preventDefault();
    }

    getElement() {
        if (this.state.isEdit) {
            return (
                <ListGroupItem>
                    <Row>
                        <Col sm={8}><input type="text" value={this.state.task} onChange={this.onUpdateTask} /></Col>
                        <Col sm={2}><Button bsStyle="success" bsSize="small" onClick={this.onSaveEdit}> Save <Glyphicon glyph="floppy-disk"/></Button></Col>
                        <Col sm={2}><Button bsStyle="primary" bsSize="small" onClick={this.onCancelEdit}> Cancel <Glyphicon glyph="remove"/></Button></Col>
                    </Row>
                </ListGroupItem>)
        } else {
            return (
                <ListGroupItem>
                    <Row>
                    <Col sm={8}>{this.props.task.task}</Col>
                    <Col sm={2}><Button bsStyle="success" bsSize="small" onClick={this.handleClickOnEdit}> Edit <Glyphicon glyph="pencil"/> </Button></Col>
                    <Col sm={2}><Button bsStyle="primary" bsSize="small" onClick={this.onDone}> Done <Glyphicon glyph="ok-sign"/> </Button></Col>
                    </Row>
                </ListGroupItem>
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