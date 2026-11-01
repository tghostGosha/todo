import { Button } from '../../../../components/Button/Button';
import type { Task } from '../../types/task.types';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <button
        className="task-checkbox"
        type="button"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? `Вернуть задачу «${task.title}» в активные` : `Отметить задачу «${task.title}» выполненной`}
        aria-pressed={task.completed}
      >
        {task.completed && <span aria-hidden="true">✓</span>}
      </button>
      <span className="task-title">{task.title}</span>
      <Button
        variant="icon"
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Удалить задачу «${task.title}»`}
        title="Удалить задачу"
      >
        <svg viewBox="0 0 20 20" width="17" height="17" fill="none" aria-hidden="true">
          <path d="M4 6h12M8 6V4.5h4V6m-6.5 0 .7 10h7.6l.7-10M8.5 9v4.5m3-4.5v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
    </li>
  );
}