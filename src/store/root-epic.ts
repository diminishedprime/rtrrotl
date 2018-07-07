import { combineEpics } from 'redux-observable';
import { todosEpic } from '../features/todos';

export default combineEpics(todosEpic);
