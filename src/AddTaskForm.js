import React, { Component } from 'react';
import { Button, FormControl, Form, Col } from 'react-bootstrap';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { newTask: '' };
        this.handleAddNewTask = this.handleAddNewTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAddNewTask(event) {
        if (this.state.newTask.trim() !== '') {
            this.props.addNewTask(this.state.newTask);
        }
        this.setState({ newTask: '' });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ newTask: event.target.value });
    }

    render() {
        const styles = {
            width: '100%',
        };
        return (
            <div>
                <Form inline>
                        <Col sm={10}>
                            <FormControl style={styles} type="text" placeholder="Add Task.." value={this.state.newTask} onChange={this.handleChange} />
                        </Col>
                        <Col sm={2}>
                            <Button style={styles} bsStyle="success" onClick={this.handleAddNewTask}>Add</Button>
                        </Col>
                </Form>
            </div>
        );
    }
}

export default AddTaskForm;