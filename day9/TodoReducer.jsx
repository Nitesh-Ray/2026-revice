import { useReducer, useState, useRef } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a project', completed: false },
];

function todoReducer(todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, { id: Date.now(), text: action.payload, completed: false }];
    case 'DELETE_TODO':
      return todos.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'CLEAR_COMPLETED':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

function TodoReducer() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
    inputRef.current.focus();
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Todo List (useReducer)</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 5 }}>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: 1 }}
        />
        <button type="submit">Add</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '8px 0' }}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>❌</button>
          </li>
        ))}
      </ul>
      {todos.some(t => t.completed) && (
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear completed</button>
      )}
    </div>
  );
}

export default TodoReducer;
