import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <div>
        <button onClick={() => editTodo(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;