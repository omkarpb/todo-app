import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import PendingList from './PendingList';
import CompletedList from './CompletedList';
import { Grid, Row, Jumbotron } from 'react-bootstrap';
var shortid = require('shortid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingList: [],
      completedList: []
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onUndone = this.onUndone.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDone(task) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;

    pendingList.splice(pendingList.findIndex((value) => value.id === task.id), 1);
    completedList.push(task);
    this.setState((lists) =>
      ({
        pendingList: pendingList,
        completedList: completedList
      })
    );
  }

  onUndone(task) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;

    completedList.splice(completedList.findIndex((value) => value.id === task.id), 1);
    pendingList.push(task);
    this.setState((lists) =>
      ({
        pendingList: pendingList,
        completedList: completedList
      })
    );
  }


  addNewTask(newTask) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;
    pendingList.push({
      id: shortid.generate(),
      task: newTask
    });
    this.setState((lists) =>
      ({
        pendingList: pendingList,
        completedList: completedList
      })
    );

  }

  onSaveEdit(task) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;

    pendingList = pendingList.map((item) => {
      if (item.id === task.id) {
        item.task = task.task;
      }
      return item;
    });
    this.setState((lists) =>
      ({
        pendingList: pendingList,
        completedList: completedList
      })
    );
  }

  onDelete(task) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;

    completedList.splice(completedList.findIndex((item) => item.id === task.id), 1);
    this.setState((lists) =>
      ({
        pendingList,
        completedList
      })
    );
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>todo list </h1>
          <h3>Created in Reactjs</h3>
        </Jumbotron>


          <Grid className="app">
            <Row>
              <AddTaskForm addNewTask={this.addNewTask} />
            </Row>
            <div className="lists">
              <Row>
                <PendingList list={this.state.pendingList} onDone={this.onDone} onSaveEdit={this.onSaveEdit} />
              </Row>
              <Row>
                <CompletedList list={this.state.completedList} onUndone={this.onUndone} onDelete={this.onDelete} />
              </Row>
            </div>
            </Grid>
          </Grid>
          );
        }
      }
      
      export default App;
