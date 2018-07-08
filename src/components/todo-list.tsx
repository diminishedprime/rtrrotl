import * as React from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import {List} from '@material-ui/core'
import TodoItem from './todo-item'
import {Todo, RootState, getFilteredTodos} from '../redux/models'

interface Props {
  todos: Todo[]
  toggleTodo: (id: string) => any
  deleteTodo: (id: string) => any
}

const Component = ({todos = [], toggleTodo, deleteTodo}: Props) => (
  <List>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        item={todo}
        toggleItem={() => toggleTodo(todo.id)}
        deleteItem={() => deleteTodo(todo.id)}
      />
    ))}
  </List>
)

const mapStateToProps = (state: RootState) => ({
  todos: getFilteredTodos(state),
})

export default connect(
  mapStateToProps,
  {
    toggleTodo: (id: string) => actions.toggle({id}),
    deleteTodo: (id: string) => actions.deleteT({id}),
  }
)(Component)
