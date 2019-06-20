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
  render() {
    return (
      <div className="todos container">
        <h1 className="center pink-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
