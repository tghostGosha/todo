import { useMemo, useState } from 'react';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { TaskFilters } from '../features/tasks/components/TaskFilters/TaskFilters';
import { TaskForm } from '../features/tasks/components/TaskForm/TaskForm';
import { TaskList } from '../features/tasks/components/TaskList/TaskList';
import { useTasks } from '../features/tasks/hooks/useTasks';
import type { TaskFilter } from '../features/tasks/types/task.types';

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<TaskFilter>('all');

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [filter, tasks]);

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;

  return (
    <main className="page">
      <section className="todo-card" aria-label="Список задач">
        <header className="page-header">
          <h1>Мои задачи.</h1>
        </header>

        <TaskForm onAdd={addTask} />

        <div className="list-toolbar">
          <div>
            <h2>Список</h2>
            <p>{tasks.length === 0 ? 'Пока нет задач' : `${activeCount} активных · ${completedCount} выполнено`}</p>
          </div>
          <span className="task-count">{tasks.length} {tasks.length === 1 ? 'задача' : 'задач'}</span>
        </div>

        <TaskFilters value={filter} onChange={setFilter} />

        {filteredTasks.length > 0 ? (
          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
        ) : (
          <EmptyState filter={filter} hasTasks={tasks.length > 0} />
        )}

        
      </section>
    </main>
  );
}

export default App;