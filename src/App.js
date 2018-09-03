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
    this.setState({
      todo: '',
      todoList: [...this.state.todoList, this.state.todo]
    });
  }

  render() {
    return (
      <div className="App container">
        <TodoForm todo={this.state.todo} onChange={this.onChange} addTodo={this.addTodo} />

        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
