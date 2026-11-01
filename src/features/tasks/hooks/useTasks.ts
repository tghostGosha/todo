import { useEffect, useState } from 'react';
import { loadTasks, saveTasks } from '../../../shared/utils/storage';
import type { Task } from '../types/task.types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const normalizedTitle = title.trim();
    if (!normalizedTitle) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: normalizedTitle,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  };

  const toggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
}