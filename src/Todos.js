import React from 'react';

export default function Todos(props) {
  const { todos, deleteTodo } = props;
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id} className="collection-item">
          <p onClick={() => deleteTodo(todo.id)}>{todo.content}</p>
        </div>
      );
    })
  ) : (
    <p className="center">No todos left, yay!</p>
  );
  return <div className="collection">{todoList}</div>;
}
