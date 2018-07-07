import * as React from 'react';
import { connect } from 'react-redux';

import { getFilteredTodos } from '../redux/selectors';
import { todosActions } from '../redux/actions';
import { List } from '@material-ui/core';
import TodoItem from './todo-item';
import { Todo, RootState } from '../redux/models';

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => any;
  deleteTodo: (id: string) => any;
}

function TodoList({ todos = [], toggleTodo, deleteTodo }: Props) {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          item={todo}
          toggleItem={() => toggleTodo(todo.id)}
          deleteItem={() => deleteTodo(todo.id)}
        />
      ))}
    </List>
  );
}

const mapStateToProps = (state: RootState) => ({
  todos: getFilteredTodos(state.todos),
});

export default connect(
  mapStateToProps,
  {
    toggleTodo: (id: string) => todosActions.toggle({ id }),
    deleteTodo: (id: string) => todosActions.deleteT({ id }),
  }
)(TodoList);
