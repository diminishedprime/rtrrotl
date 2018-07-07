import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Todos from '../features/todos/components/main';
import FormFilter from '../features/todos/components/todo-filters';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

export default withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Title
        </Typography>
        <FormFilter />
      </Toolbar>
    </AppBar>
    <Todos />
  </div>
));
