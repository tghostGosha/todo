import type { TaskFilter } from '../../types/task.types';
import './TaskFilters.css';

interface TaskFiltersProps {
  value: TaskFilter;
  onChange: (filter: TaskFilter) => void;
}

const filters: { label: string; value: TaskFilter }[] = [
  { label: 'Все', value: 'all' },
  { label: 'Активные', value: 'active' },
  { label: 'Выполненные', value: 'completed' },
];

export function TaskFilters({ value, onChange }: TaskFiltersProps) {
  return (
    <div className="task-filters" role="group" aria-label="Фильтр задач">
      {filters.map((filter) => (
        <button
          className={`filter-button ${value === filter.value ? 'is-active' : ''}`}
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          aria-pressed={value === filter.value}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}