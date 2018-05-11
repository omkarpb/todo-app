import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import PendingList from './PendingList';
import CompletedList from './CompletedList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pendingList: [],
      completedList: ["Pay bill", "Water plants"]
    };
    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask(newTask) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;
    pendingList.push(newTask);
    this.setState((lists)=> 
      ({
        pendingList: pendingList,
        completedList: completedList
      })
    );
    
  }

  render() {
    return (
      <div>
        <AddTaskForm addNewTask={this.addNewTask}/>
        <div>
            <PendingList list={this.state.pendingList}/>
            <CompletedList list={this.state.completedList}/>
        </div>
      </div>
    );
  }
}

export default App;
