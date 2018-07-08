import * as React from 'react';
import TodoList from './todo-list';
import TodoForm from './todo-form';

const Component = () => (
  <React.Fragment>
    <TodoForm />
    <TodoList />
  </React.Fragment>
);

export default Component;
