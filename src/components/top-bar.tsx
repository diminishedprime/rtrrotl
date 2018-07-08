import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Route, Switch } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import FormFilter from './todo-filters';
import * as actions from '../redux/actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
};

interface Props extends WithStyles<typeof styles> {
  goToHome: () => any;
  goToAbout: () => any;
}

interface ComponentState {
  open: boolean;
}

// TODO make the form filter conditional based on route?
class Component extends React.Component<Props, ComponentState> {
  readonly state: Readonly<ComponentState> = { open: false };

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      open,
    });
  };

  render() {
    const { classes, goToAbout, goToHome } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Title
            </Typography>
            <Switch>
              <Route exact={true} path="/" component={FormFilter} />
            </Switch>
            <SwipeableDrawer
              open={open}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}
            >
              <div
                className={classes.list}
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
              >
                <List>
                  <ListItem button={true} onClick={goToHome}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button={true} onClick={goToAbout}>
                    <ListItemText primary="About" />
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(
  undefined,
  {
    goToAbout: () => actions.navigate({ path: '/about' }),
    goToHome: () => actions.navigate({ path: '/' }),
  }
)(withStyles(styles)(Component));
