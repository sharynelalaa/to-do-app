import React, { useState } from 'react';

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    setTodos([...todos, { text: input, id: Date.now() }]);
    setInput('');
  };

  const handleEditTodo = (id, updatedText) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text: updatedText };
        }
        return todo;
      })
    );
  };

  const handleEditMode = id => {
    setEditMode(true);
    setEditId(id);
    setInput(todos.find(todo => todo.id === id).text);
  };

  const handleUpdateTodo = () => {
    handleEditTodo(editId, input);
    setEditMode(false);
    setEditId(null);
    setInput('');
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    
    <div className='app'>

   
      {editMode ? (
        <>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={handleUpdateTodo}>Update To-Do</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder = "Enter to-do"

          />
          <button onClick={handleAddTodo}>Add To-Do</button>
        </>
      )}


      <div className="todo-container">

      <ul className='todo-list' >
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => handleEditMode(todo.id)}>Edit</button>{' '}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default ToDoApp;
