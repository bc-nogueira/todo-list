import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: '',
    todoList: [],
    filteringCompleted: null,
    showedTodoList: []
  }

  onChange = (event) => {
    this.setState({ todo: event.target.value });
  }
  
  addTodo = (event) => {
    event.preventDefault();
    const todoItem = { name: this.state.todo, completed: false }
    const todoList = [...this.state.todoList, todoItem];

    const showedTodoList = this.state.filteringCompleted !== null 
      ? todoList.filter(todo => todo.completed === this.state.filteringCompleted)
      : todoList;

    this.setState({
      todo: '',
      todoList,
      showedTodoList
    });
  }

  toggleCompleted = (index, teste) => {
    let todoList = this.state.todoList;
    todoList[index].completed = teste;
    this.setState({ todoList });
  }

  filterList = (completed) => {
    let showedTodoList;
    let filteringCompleted;
    if(completed !== null) {
      showedTodoList = this.state.todoList.filter(todo => todo.completed === completed);
      filteringCompleted = completed;
    } else {
      showedTodoList = this.state.todoList;
      filteringCompleted = null;
    }

    this.setState({ showedTodoList, filteringCompleted });
  }

  deleteTodo = (index) => {
    let todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({ todoList });
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
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
