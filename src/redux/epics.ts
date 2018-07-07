import { combineEpics, Epic } from 'redux-observable';
import { RootState } from './models';
import { delay, mapTo, filter } from 'rxjs/operators';
import { RootAction, todosActions as todos } from './actions';
import { isActionOf } from 'typesafe-actions';

const added13: Epic<RootAction, RootState> = (action$, state) =>
  action$.pipe(
    filter(isActionOf(todos.add)),
    filter(action => action.payload.title === '13'),
    delay(1000),
    mapTo(todos.add({ title: 'YOU DID A 13' }))
  );

export default combineEpics(added13);
