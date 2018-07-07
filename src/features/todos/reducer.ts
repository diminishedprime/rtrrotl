import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { Todo, TodosFilter } from './models';
import * as todos from './actions';

export type TodosAction = ActionType<typeof todos>;

export type TodosState = Readonly<{
  todos: Todo[];
  todosFilter: TodosFilter;
}>;

const todosReducer = (state: Todo[] = [], action: TodosAction) => {
  switch (action.type) {
    case getType(todos.add):
      return [...state, action.payload];

    case getType(todos.toggle):
      return state.map(
        item =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
      );

    case getType(todos.deleteT):
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

const todosFilterReducer = (state = TodosFilter.All, action: TodosAction) => {
  switch (action.type) {
    case getType(todos.changeFilter):
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers<TodosState, TodosAction>({
  todos: todosReducer,
  todosFilter: todosFilterReducer,
});
