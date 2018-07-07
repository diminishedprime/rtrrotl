import { createSelector } from 'reselect';

import { TodosFilter, TodosState } from './models';

export const getTodos = (state: TodosState) => state.todos;

export const getTodosFilter = (state: TodosState) => state.todosFilter;

export const getFilteredTodos = createSelector(
  getTodos,
  getTodosFilter,
  (todos, todosFilter) => {
    switch (todosFilter) {
      case TodosFilter.Completed:
        return todos.filter(t => t.completed);
      case TodosFilter.Active:
        return todos.filter(t => !t.completed);
      case TodosFilter.All:
        return todos;
    }
  }
);
