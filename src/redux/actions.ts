import cuid from 'cuid';
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { createStandardAction, ActionType } from 'typesafe-actions';
import { Todo, TodosFilter } from './models';

const ADD = 'todos/ADD';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_FILTER = 'todos/CHANGE_FILTER';
const DELETE = 'todos/DELETE';

export const todosActions = {
  add: createStandardAction(ADD).map((payload: { title: string }) => ({
    payload: {
      title: payload.title || 'New Todo',
      id: cuid(),
      completed: false,
    } as Todo,
  })),
  toggle: createStandardAction(TOGGLE)<{ id: string }>(),
  changeFilter: createStandardAction(CHANGE_FILTER)<TodosFilter>(),
  deleteT: createStandardAction(DELETE)<{ id: string }>(),
};

export type TodosAction = ActionType<typeof todosActions>;
export type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | TodosAction;
