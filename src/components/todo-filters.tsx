import * as React from 'react';
import { connect } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import { Filter, RootState, getTodosFilter } from '../redux/models';
import * as actions from '../redux/actions';
const { All, Active, Completed } = Filter;

interface Props {
  currentFilter: Filter;
  changeFilter: (id: string) => any;
}

const FILTERS = [All, Active, Completed];

const Component = ({ currentFilter, changeFilter }: Props) => (
  <Select value={currentFilter} onChange={e => changeFilter(e.target.value)}>
    {FILTERS.map((filter, idx) => (
      <MenuItem key={filter.toString()} value={filter}>
        {filter.toString()}
      </MenuItem>
    ))}
  </Select>
);

const mapStateToProps = (state: RootState) => ({
  currentFilter: getTodosFilter(state),
});

export default connect(
  mapStateToProps,
  {
    changeFilter: actions.changeFilter,
  }
)(Component);
