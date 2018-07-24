import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './listItem';
import Dialog from './dialog';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: 0,
      total: 0,
      list: []
      // list: [{
      //     id: 0,
      //     name: '吃饭',
      //     status: 0
      // }, {
      //     id: 1,
      //     name: '睡觉',
      //     status: 0
      // }, {
      //     id: 2,
      //     name: '打豆豆',
      //     status : 0
      // }]
    };
  }

  addTask = newitem => {
    var allTask = this.state.list;
    allTask.push(newitem);
    this.setState({
      list: allTask
    });
  };

  updateFinished = todoItem => {
    var sum = 0;
    var obj = [];
    this.state.list.forEach(item => {
      if (item.id === todoItem.id) {
        item.status = todoItem.status;
      }
      if (item.status === 1) {
        sum++;
      }
      obj.push(item);
    });
    this.setState({
      list: obj
    });
  };

  changeEditStatus = changeItem => {
    this.state.list.forEach(item => {
      if (item.id === changeItem.id) {
        item.readOnly = false;
      }
    });
    this.setState({
      list: this.state.list
    });
  };

  changeItemsValue = (changeItem, value) => {
    this.state.list.forEach(item => {
      if (item.id === changeItem.id) {
        item.name = value;
      }
    });
    this.setState({
      list: this.state.list
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <h1>TodoList</h1>
          <ul>
            {this.state.list.map(item => (
              <ListItem
                item={item}
                finishedChange={this.updateFinished}
                key={item.id}
                isDisabled={this.changeEditStatus}
                changeItemValue={this.changeItemsValue}
              />
            ))}
          </ul>
          <Dialog addNewTask={this.addTask} nums={this.state.list.length} />
        </div>
      </div>
    );
  }
}

export default App;
