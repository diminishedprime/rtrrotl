import { combineEpics, Epic } from 'redux-observable';
import { RootState } from '../../store/root-reducer';
import { delay, mapTo, filter } from 'rxjs/operators';
import { RootAction } from '../../store/root-action';
import { isActionOf } from 'typesafe-actions';
import * as todos from './actions';

const added13: Epic<RootAction, RootState> = (action$, state) =>
  action$.pipe(
    filter(isActionOf(todos.add)),
    filter(action => action.payload.title === '13'),
    delay(1000),
    mapTo(todos.add({ title: 'YOU DID A 13' }))
  );

export default combineEpics(added13);
