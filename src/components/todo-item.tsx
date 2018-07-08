import * as React from 'react'
import {Todo} from '../redux/models'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import {Delete as DeleteIcon} from '@material-ui/icons'

interface Props {
  item: Todo
  toggleItem: () => void
  deleteItem: () => void
}

const Component = ({item, toggleItem, deleteItem}: Props) => (
  <ListItem key={item.title} button={true} onClick={toggleItem}>
    <ListItemText
      primary={item.title}
      primaryTypographyProps={{
        color: item.completed ? 'textSecondary' : 'primary',
        style: {textDecoration: item.completed ? 'line-through' : 'none'},
      }}
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Comments" onClick={deleteItem}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

export default Component
