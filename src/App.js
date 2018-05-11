import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import PendingList from './PendingList';
import CompletedList from './CompletedList';

class App extends Component {
  constructor(props){
    super(props);
    this.pendingList = ["Buy milk", "Do laundry"];
    this.completedList = ["Pay bill", "Water plants"];
  }

  

  render() {
    return (
      <div>
        <AddTaskForm />
        <div>
            <PendingList list={this.pendingList}/>
            <CompletedList list={this.completedList}/>
        </div>
      </div>
    );
  }
}

export default App;
