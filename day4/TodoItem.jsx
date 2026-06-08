// TodoItem.jsx
import { useState } from 'react';

function TodoItem({ text, priority }) {
  const [completed, setCompleted] = useState(false);

  const priorityColors = {
    high: '#f44336',
    medium: '#ff9800',
    low: '#9e9e9e',
  };

  const style = {
    borderLeft: `5px solid ${priorityColors[priority]}`,
    padding: '10px',
    margin: '5px 0',
    textDecoration: completed ? 'line-through' : 'none',
    opacity: completed ? 0.6 : 1,
  };

  return (
    <div style={style} onClick={() => setCompleted(!completed)}>
      <strong>{text}</strong> – <small>{priority}</small>
      {completed && ' ✅'}
    </div>
  );
}

export default TodoItem;