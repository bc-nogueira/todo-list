import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: '',
    todoList: [],
    showedTodoList: []
  }

  onChange = (event) => {
    this.setState({ todo: event.target.value });
  }
  
  addTodo = (event) => {
    event.preventDefault();
    const todoItem = { name: this.state.todo, completed: false }
    const newList = [...this.state.todoList, todoItem];
    this.setState({
      todo: '',
      todoList: newList,
      showedTodoList: newList
    });
  }

  toggleCompleted = (index) => {
    let todoList = this.state.todoList;
    todoList[index].completed = !todoList[index].completed;
    this.setState({ todoList });
  }

  filterList = (completed) => {

    const showedTodoList = completed !== null 
      ? this.state.todoList.filter(todo => todo.completed === completed)
      : this.state.todoList;
    this.setState({ showedTodoList });
  }

  render() {
    return (
      <div className="App container">
        <TodoForm todo={this.state.todo} onChange={this.onChange} addTodo={this.addTodo} />

        <TodoList
          todoList = {this.state.todoList}
          showedTodoList={this.state.showedTodoList} 
          toggleCompleted={this.toggleCompleted}
          filterList={this.filterList}
        />
      </div>
    );
  }
}

export default App;
