import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: '',
    todoList: []
  }

  onChange = (event) => {
    this.setState({ todo: event.target.value });
  }
  
  addTodo = (event) => {
    event.preventDefault();
    const todoItem = { name: this.state.todo, completed: false }
    this.setState({
      todo: '',
      todoList: [...this.state.todoList, todoItem]
    });
  }

  toggleCompleted = (index) => {
    let todoList = this.state.todoList;
    todoList[index].completed = !todoList[index].completed;
    this.setState({ todoList });
  }

  render() {
    return (
      <div className="App container">
        <TodoForm todo={this.state.todo} onChange={this.onChange} addTodo={this.addTodo} />

        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
