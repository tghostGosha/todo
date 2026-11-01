# Мои задачи — React + TypeScript

Небольшое SPA-приложение для управления списком задач. Проект создан на Vite, без сервера и внешнего API.

## Возможности

- Добавление задач через поле ввода и кнопку или клавишу Enter.
- Запрет на добавление пустых задач и строк из пробелов.
- Переключение статуса задачи: выполнена / активна.
- Удаление отдельной задачи.
- Фильтрация: все, активные, выполненные.
- Автоматическое сохранение списка в `localStorage`.
- Восстановление задач после перезагрузки страницы.
- Адаптивный интерфейс.

## Требования

- Node.js 18+ (рекомендуется актуальная LTS-версия).
- npm.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес, который Vite выведет в терминале (обычно `http://localhost:5173`).

## Проверка production-сборки

```bash
npm run build
npm run preview
```

## Структура проекта

```text
src/
├── app/
│   └── App.tsx
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   └── EmptyState/
│       ├── EmptyState.tsx
│       └── EmptyState.css
├── features/
│   └── tasks/
│       ├── components/
│       │   ├── TaskForm/
│       │   │   ├── TaskForm.tsx
│       │   │   └── TaskForm.css
│       │   ├── TaskFilters/
│       │   │   ├── TaskFilters.tsx
│       │   │   └── TaskFilters.css
│       │   ├── TaskItem/
│       │   │   ├── TaskItem.tsx
│       │   │   └── TaskItem.css
│       │   └── TaskList/
│       │       ├── TaskList.tsx
│       │       └── TaskList.css
│       ├── hooks/
│       │   └── useTasks.ts
│       └── types/
│           └── task.types.ts
├── shared/
│   └── utils/
│       └── storage.ts
├── styles/
│   └── global.css
└── main.tsx
```

## Архитектурные решения

- Переиспользуемые элементы интерфейса вынесены в `components`.
- Функциональность задач сгруппирована в `features/tasks`.
- `useTasks` инкапсулирует состояние, операции над задачами и сохранение в `localStorage`.
- Тип `Task` описывает модель задачи, а `TaskFilter` — доступные фильтры.
- Данные читаются из `localStorage` при инициализации состояния. При последующих изменениях списка он автоматически обновляется.

## Оценка времени

Ориентировочное время выполнения: **45–60 минут**.

## Публикация на GitHub

Создайте публичный пустой репозиторий на GitHub, затем выполните команды в корне проекта:

```bash
git init
git add .
git commit -m "feat: add React todo application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/react-todo-app.git
git push -u origin main
```

Замените `YOUR_USERNAME` на свой GitHub username.
