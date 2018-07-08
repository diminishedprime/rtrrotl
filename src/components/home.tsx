import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import FormFilter from './todo-filters';
import TodoList from './todo-list';
import TodoForm from './todo-form';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

interface Props extends WithStyles<typeof styles> {}

const Component = ({ classes }: Props) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Title
        </Typography>
        <FormFilter />
      </Toolbar>
    </AppBar>
    <TodoForm />
    <TodoList />
  </div>
);

export default withStyles(styles)(Component);
