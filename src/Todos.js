import React from 'react';

export default function Todos(props) {
  const { todos } = props;
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id} className="collection-item">
          <p>{todo.content}</p>
        </div>
      );
    })
  ) : (
    <p>No todos screenLeft, yay!</p>
  );
  return <div className="collection">{todoList}</div>;
}
