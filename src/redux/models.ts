import { StateType } from 'typesafe-actions';
import { createSelector } from 'reselect';
import { rootReducer } from './reducers';
import { ActionType } from 'typesafe-actions';
import { routerActions } from 'connected-react-router';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;
type RouterActions = ActionType<typeof routerActions>;
export type RootAction = TodosAction | RouterActions;

export type Todo = Readonly<{
  id: string;
  title: string;
  completed: boolean;
}>;

export enum Filter {
  All = 'all',
  Completed = 'completed',
  Active = 'active',
}

export type AppState = Readonly<{
  todos: Todo[];
  filter: Filter;
}>;

export type RootState = StateType<typeof rootReducer>;

// Selectors
export const getTodos = (state: RootState) => state.app.todos;

export const getTodosFilter = (state: RootState) => state.app.filter;

export const getFilteredTodos = createSelector(
  getTodos,
  getTodosFilter,
  (todos, todosFilter) => {
    switch (todosFilter) {
      case Filter.Completed:
        return todos.filter(t => t.completed);
      case Filter.Active:
        return todos.filter(t => !t.completed);
      case Filter.All:
        return todos;
    }
  }
);
