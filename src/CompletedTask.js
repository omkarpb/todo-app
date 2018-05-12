import React, { Component } from 'react';
import { Button, ListGroupItem, Col, Row, Glyphicon } from 'react-bootstrap';

class CompletedTask extends Component {
    constructor(props) {
        super(props);
        this.onUndone = this.onUndone.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = ({ task: this.props.task });
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
            <ListGroupItem>
                <Row>
                    <Col sm={8}>{this.props.task.task}</Col>
                    <Col sm={2}><Button bsStyle="danger" bsSize="small" onClick={this.onDelete}> Delete <Glyphicon glyph="remove"/></Button></Col>
                    <Col sm={2}><Button bsStyle="primary" bsSize="small" onClick={this.onUndone}> Undone <Glyphicon glyph="remove-sign"/></Button></Col>
                </Row>
            </ListGroupItem>);
    }
}

export default CompletedTask;