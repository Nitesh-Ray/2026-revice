// src/store/taskStore.js
import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [
        {id: "1", title: "Learn React", status: "todo", priority: "high"},
        {
          id: "2",
          title: "Build a project",
          status: "in-progress",
          priority: "medium",
        },
      ],

      addTask: (title, status = "todo", priority = "medium") =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {id: Date.now().toString(), title, status, priority},
          ],
        })),

      updateTask: (id, updates) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? {...task, ...updates} : task,
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      moveTask: (taskId, newStatus) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? {...task, status: newStatus} : task,
          ),
        })),
    }),
    {name: "tasks-storage"},
  ),
);
