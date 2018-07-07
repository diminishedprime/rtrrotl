import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { todosModels, todosActions, todosSelectors } from '../';
import { List } from '@material-ui/core';
import TodoItem from './todo-item';

interface Props {
  todos: todosModels.Todo[];
  toggleTodo: (id: string) => any;
}

function TodoList({ todos = [], toggleTodo }: Props) {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          item={todo}
          toggleItem={() => toggleTodo(todo.id)}
        />
      ))}
    </List>
  );
}

const mapStateToProps = (state: RootState) => ({
  todos: todosSelectors.getFilteredTodos(state.todos),
});

export default connect(
  mapStateToProps,
  {
    toggleTodo: (id: string) => todosActions.toggle({ id }),
  }
)(TodoList);
