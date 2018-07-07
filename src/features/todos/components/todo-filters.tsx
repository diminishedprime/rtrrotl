import * as React from 'react';
import { connect } from 'react-redux';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme, Select, MenuItem } from '@material-ui/core';
import { RootState } from '../../../store';
import { todosModels, todosActions, todosSelectors } from '../';
const {
  TodosFilter: { All, Active, Completed },
} = todosModels;

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
  currentFilter: todosModels.TodosFilter;
  changeFilter: (id: string) => any;
}

const FILTERS = [All, Active, Completed];

const TodoFilters = ({ currentFilter, changeFilter, classes }: Props) => (
  <Select value={currentFilter} onChange={e => changeFilter(e.target.value)}>
    {FILTERS.map((filter, idx) => (
      <MenuItem value={filter}>{filter.toString()}</MenuItem>
    ))}
  </Select>
);

const mapStateToProps = (state: RootState) => ({
  currentFilter: todosSelectors.getTodosFilter(state.todos),
});

export default connect(
  mapStateToProps,
  {
    changeFilter: todosActions.changeFilter,
  }
)(withStyles(styles)(TodoFilters));
