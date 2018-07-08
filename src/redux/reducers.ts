import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getType } from 'typesafe-actions';
import {
  Todo,
  TodosFilter,
  TodosState,
  RootAction,
  TodosAction,
} from './models';
import * as todos from './actions';
import { combineEpics, Epic } from 'redux-observable';
import { RootState } from './models';
import { delay, mapTo, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

const appReducer = (state: Todo[] = [], action: TodosAction) => {
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
  todos: appReducer,
  todosFilter: todosFilterReducer,
});

export const rootReducer = combineReducers({
  router: routerReducer,
  app: todosReducerTop,
});

const added13: Epic<RootAction, RootState> = (action$, state) =>
  action$.pipe(
    filter(isActionOf(todos.add)),
    filter(action => action.payload.title === '13'),
    delay(1000),
    mapTo(todos.add({ title: 'YOU DID A 13' }))
  );

export const rootEpic = combineEpics(added13);
