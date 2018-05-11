import React, { Component } from 'react';
import CompletedTask from './CompletedTask';
var shortid = require('shortid');

class CompletedList extends Component {
    constructor(props) {
        super(props);
        this.onUndone = this.onUndone.bind(this);
    }

    onUndone(task){
        this.props.onUndone(task);
    }

    render() {
        var element = this.props.list.map((task) => <CompletedTask task={task} key={shortid.generate()} onUndone={this.onUndone}/>);
        return (
            <div>
                <h1>Completed Tasks</h1>
                <ul>
                    {element}
                </ul>
            </div>
        );
    }
}

export default CompletedList;