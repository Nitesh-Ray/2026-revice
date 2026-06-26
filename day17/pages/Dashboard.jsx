// src/pages/Dashboard.jsx
import {useState} from "react";
import {useTaskStore} from "../store/taskStore";
import TaskCard from "../components/TaskCard";
import Navbar from "../components/Navbar";

// Add these imports at the top of Dashboard.jsx
import {DragDropContext, Droppable, Draggable} from "@hello-pangea/dnd";

const columns = [
  {key: "todo", label: "📌 To Do"},
  {key: "in-progress", label: "⏳ In Progress"},
  {key: "done", label: "✅ Done"},
];

export default function Dashboard() {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("medium");

  // Inside the Dashboard component, get moveTask:
  const moveTask = useTaskStore((state) => state.moveTask);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    addTask(newTask, "todo", priority);
    setNewTask("");
    setPriority("medium"); // reset to default
  };

  // Add drag‑end handler:
  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    moveTask(draggableId, destination.droppableId);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        {/* Add task form */}
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border p-3 rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border p-3 rounded dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-bold"
          >
            Add Task
          </button>
        </form>

        {/* Drag and drop columns */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col) => {
              const columnTasks = tasks.filter((t) => t.status === col.key);
              return (
                <Droppable droppableId={col.key} key={col.key}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 min-h-[200px]"
                    >
                      <h3 className="font-bold text-lg mb-3">
                        {col.label} ({columnTasks.length})
                      </h3>
                      <div className="space-y-2">
                        {columnTasks.map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TaskCard task={task} />
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
