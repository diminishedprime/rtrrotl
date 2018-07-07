import * as React from 'react';
import { Todo } from '../models';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

interface Props {
  item: Todo;
  toggleItem: () => void;
  deleteItem: () => void;
}

interface State {
  isMouseInside: boolean;
}

class TodoItem extends React.Component<Props, State> {
  readonly state: Readonly<State> = { isMouseInside: false };

  render() {
    const { item, toggleItem, deleteItem } = this.props;
    return (
      <ListItem
        key={item.title}
        role={undefined}
        button={true}
        onClick={toggleItem}
      >
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            color: item.completed ? 'textSecondary' : 'primary',
            style: { textDecoration: item.completed ? 'line-through' : 'none' },
          }}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Comments" onClick={deleteItem}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default TodoItem;
