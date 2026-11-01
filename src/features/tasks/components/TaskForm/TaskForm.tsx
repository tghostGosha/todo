import { useState, type FormEvent } from 'react';
import { Button } from '../../../../components/Button/Button';
import './TaskForm.css';

interface TaskFormProps {
  onAdd: (title: string) => void;
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      setError('Введите текст задачи.');
      return;
    }

    onAdd(normalizedTitle);
    setTitle('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="input-wrap">
        <span className="input-plus" aria-hidden="true">＋</span>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            if (error) setError('');
          }}
          placeholder="Например, закончить проект..."
          aria-label="Новая задача"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'task-form-error' : undefined}
        />
      </div>
      <Button type="submit">Добавить <span aria-hidden="true">↗</span></Button>
      {error && <p className="form-error" id="task-form-error">{error}</p>}
    </form>
  );
}