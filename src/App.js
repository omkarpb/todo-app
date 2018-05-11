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
      completedList: []
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onUndone = this.onUndone.bind(this);
  }

  onDone(task) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;

    pendingList.splice(pendingList.findIndex((value)=>value===task),1);
    completedList.push(task);
    this.setState((lists)=> 
      ({
        pendingList: pendingList,
        completedList: completedList
      })
    );
  }

  onUndone(task) {
    var pendingList = this.state.pendingList;
    var completedList = this.state.completedList;

    completedList.splice(pendingList.findIndex((value)=>value===task),1);
    pendingList.push(task);
    this.setState((lists)=> 
      ({
        pendingList: pendingList,
        completedList: completedList
      })
    );
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
            <PendingList list={this.state.pendingList} onDone={this.onDone}/>
            <CompletedList list={this.state.completedList} onUndone={this.onUndone}/>
        </div>
      </div>
    );
  }
}

export default App;
