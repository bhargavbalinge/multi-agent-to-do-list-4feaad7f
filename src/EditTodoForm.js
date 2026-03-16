import React, { useState, useEffect } from 'react';

function EditTodoForm({ currentTodo, updateTodo }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      updateTodo(currentTodo.id, text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditTodoForm;