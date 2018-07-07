import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getType } from 'typesafe-actions';
import { Todo, TodosFilter, TodosState } from './models';
import { TodosAction, todosActions as todos } from './actions';

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

const todosReducerTop = combineReducers<TodosState, TodosAction>({
  todos: todosReducer,
  todosFilter: todosFilterReducer,
});

const rootReducer = combineReducers({
  router: routerReducer,
  todos: todosReducerTop,
});

export default rootReducer;
