import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import PendingList from './PendingList';
import CompletedList from './CompletedList';
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
      <div>
        <AddTaskForm addNewTask={this.addNewTask} />
        <div>
          <PendingList list={this.state.pendingList} onDone={this.onDone} onSaveEdit={this.onSaveEdit} />
          <CompletedList list={this.state.completedList} onUndone={this.onUndone} onDelete={this.onDelete} />
        </div>
      </div>
    );
  }
}

export default App;
