import { StateType } from 'typesafe-actions';
import rootReducer from './reducers';

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
