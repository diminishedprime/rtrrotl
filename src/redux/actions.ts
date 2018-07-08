import cuid from 'cuid';
import { createStandardAction } from 'typesafe-actions';
import { Todo, Filter } from './models';

const ADD = 'todos/ADD';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_FILTER = 'todos/CHANGE_FILTER';
const DELETE = 'todos/DELETE';
const NAVIGATE = 'route/NAVIGATE';

export const add = createStandardAction(ADD).map(
  (payload: { title: string }) => ({
    payload: {
      title: payload.title || 'New Todo',
      id: cuid(),
      completed: false,
    } as Todo,
  })
);
export const toggle = createStandardAction(TOGGLE)<{ id: string }>();
export const changeFilter = createStandardAction(CHANGE_FILTER)<Filter>();
export const deleteT = createStandardAction(DELETE)<{ id: string }>();
export const navigate = createStandardAction(NAVIGATE)<{ path: string }>();
