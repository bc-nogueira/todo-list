import React, { Component } from 'react';
import './App.css';

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
        <form className="form-inline mt-4 justify-content-center" onSubmit={this.addTodo}>
          <label htmlFor="" className="sr-only">Todo</label>
          <input type="text" className="form-control mb-2 mr-sm-3 w-75" 
            placeholder="Insira sua nova atividade"
            value={this.state.todo} onChange={this.onChange} />
          <button className="btn btn-outline-primary mb-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
