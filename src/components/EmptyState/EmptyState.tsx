import type { TaskFilter } from '../../features/tasks/types/task.types';
import './EmptyState.css';

interface EmptyStateProps {
  filter: TaskFilter;
  hasTasks: boolean;
}

export function EmptyState({ filter, hasTasks }: EmptyStateProps) {
  const message = hasTasks
    ? 'В этой категории пока ничего нет.'
    : 'Добавьте первую задачу — и начните двигаться к цели.';

  return (
    <div className="empty-state">
      <div className="empty-icon" aria-hidden="true">✦</div>
      <h3>{filter === 'completed' ? 'Пока без завершений' : filter === 'active' && hasTasks ? 'Всё сделано!' : 'Здесь пока пусто'}</h3>
      <p>{message}</p>
    </div>
  );
}