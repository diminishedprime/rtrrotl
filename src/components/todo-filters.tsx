import * as React from 'react';
import { connect } from 'react-redux';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme, Select, MenuItem } from '@material-ui/core';
import { getTodosFilter } from '../redux/selectors';
import { TodosFilter, RootState } from '../redux/models';
import { todosActions } from '../redux/actions';
const { All, Active, Completed } = TodosFilter;

const styles = (theme: Theme) => ({
  form: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

interface Props extends WithStyles<typeof styles> {
  currentFilter: TodosFilter;
  changeFilter: (id: string) => any;
}

const FILTERS = [All, Active, Completed];

const TodoFilters = ({ currentFilter, changeFilter, classes }: Props) => (
  <Select value={currentFilter} onChange={e => changeFilter(e.target.value)}>
    {FILTERS.map((filter, idx) => (
      <MenuItem key={filter.toString()} value={filter}>
        {filter.toString()}
      </MenuItem>
    ))}
  </Select>
);

const mapStateToProps = (state: RootState) => ({
  currentFilter: getTodosFilter(state.todos),
});

export default connect(
  mapStateToProps,
  {
    changeFilter: todosActions.changeFilter,
  }
)(withStyles(styles)(TodoFilters));
