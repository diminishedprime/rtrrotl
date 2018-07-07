import * as React from 'react';
import { Todo } from '../models';
import { ListItem, ListItemText } from '@material-ui/core';

interface Props {
  item: Todo;
  toggleItem: () => void;
}

const TodoItem = ({ item, toggleItem }: Props) => (
  <ListItem button={true} onClick={toggleItem}>
    <ListItemText
      primary={item.title}
      primaryTypographyProps={{
        color: item.completed ? 'textSecondary' : 'primary',
        style: { textDecoration: item.completed ? 'line-through' : 'none' },
      }}
    />
  </ListItem>
);

export default TodoItem;
