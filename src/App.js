import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy milk' },
      { id: 2, content: 'play mario bros.' },
      { id: 3, content: 'code in React' }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todos container">
        <h1 className="center pink-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
