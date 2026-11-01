import type { Task } from '../../features/tasks/types/task.types';

const STORAGE_KEY = 'react-todo-app:tasks';

export function loadTasks(): Task[] {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return [];

    const parsed: unknown = JSON.parse(storedValue);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isTask);
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch(e) {
    throw new Error(e as string)
  }
}

function isTask(value: unknown): value is Task {
  if (typeof value !== 'object' || value === null) return false;

  const task = value as Record<string, unknown>;
  return (
    typeof task.id === 'string' &&
    typeof task.title === 'string' &&
    typeof task.completed === 'boolean' &&
    typeof task.createdAt === 'number'
  );
}