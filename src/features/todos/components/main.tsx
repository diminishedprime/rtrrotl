import * as React from 'react';

import TodoList from './todo-list';
import TodoForm from './todo-form';

export default () => (
  <React.Fragment>
    <TodoForm />
    <TodoList />
  </React.Fragment>
);
