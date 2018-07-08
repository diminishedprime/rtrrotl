import { StateType } from 'typesafe-actions';
import { createSelector } from 'reselect';
import { rootReducer } from './reducers';
import { ActionType } from 'typesafe-actions';
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;
export type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | TodosAction;

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export enum TodosFilter {
  All = 'all',
  Completed = 'completed',
  Active = 'active',
}

export type TodosState = Readonly<{
  todos: Todo[];
  todosFilter: TodosFilter;
}>;

export type RootState = StateType<typeof rootReducer>;

// Selectors
export const getTodos = (state: RootState) => state.app.todos;

export const getTodosFilter = (state: RootState) => state.app.todosFilter;

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
