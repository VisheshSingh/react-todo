import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    content: ''
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Add a todo:</label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
