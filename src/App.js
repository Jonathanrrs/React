import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Data
import { todos } from './todos.json';
//Sucomponetes
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeToDo(index) {
   if(window.confirm('Are you sure you want to delete it?')) {
    this.setState({
      todos: this.state.todos.filter((e,i) => {
        return i !== index;
      })
    })
   }
  }
  
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeToDo.bind(this, i)}>Delete</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar nabvar-dark bg-dark">
          <a href="" className="text-white">Tasks<span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span></a>
        </nav>
        <div className="container">
          <div className="col-md text-center" >
            <img src={logo} className="App-logo" alt="logo" />
            <TodoForm onAddToDo={this.handleAddToDo} />
          </div>
          <div className="col-md-12" >
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
