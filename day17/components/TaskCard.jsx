// src/components/TaskCard.jsx
import { useState } from 'react';
import { useTaskStore } from '../store/taskStore';


const priorityColors = {
  high: 'border-l-4 border-l-red-500',
  medium: 'border-l-4 border-l-yellow-500',
  low: 'border-l-4 border-l-green-500',
};

const priorityLabels = {
  high: '🔴',
  medium: '🟡',
  low: '🟢',
};



export default function TaskCard({ task }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleSave = () => {
    if (title.trim()) {
      updateTask(task.id, { title });
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <div className={`p-3 bg-white dark:bg-gray-700 rounded shadow space-y-2 ${priorityColors[task.priority] || ''}`}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-1 rounded dark:bg-gray-600 dark:border-gray-500"
          autoFocus
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
        />
        <div className="flex gap-2">
          <button onClick={handleSave} className="text-green-500 text-sm">Save</button>
          <button onClick={() => setEditing(false)} className="text-gray-500 text-sm">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-3 bg-white dark:bg-gray-700 rounded shadow flex justify-between items-center group ${priorityColors[task.priority] || ''}`}>
      <div>
        <span className="mr-2">{priorityLabels[task.priority] || ''}</span>
        <span>{task.title}</span>
      </div>
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => setEditing(true)} className="text-blue-500 text-sm">✏️</button>
        <button onClick={() => deleteTask(task.id)} className="text-red-500 text-sm">🗑</button>
      </div>
    </div>
  );
}