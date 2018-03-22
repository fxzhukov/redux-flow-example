// @flow

import type {
  TableSortingAction,
  TableSorting,
  SortColumn
} from '../types/sorting';
import {
  SORT_ASCENDING,
  SORT_DESCENDING,
  SORT_ITEMS_ACTION
} from '../constants';

/**
 * Save sorting settings to state.
 * Set sorting direction to ASCENDING at first, then change direction from ASCENDING to DESCENDING.
 * Otherwise returns empty object (no sorting)
 * @param state
 * @param column
 * @returns TableSorting new state
 */
const applySorting = (
  state: TableSorting,
  column: SortColumn
): TableSorting => {
  if (state.column === column) {
    return state.direction === SORT_ASCENDING
      ? { column, direction: SORT_DESCENDING }
      : {};
  } else {
    return { column, direction: SORT_ASCENDING };
  }
};

const sorting = (
  state: TableSorting = {},
  action: TableSortingAction
): TableSorting => {
  switch (action.type) {
    case SORT_ITEMS_ACTION:
      return applySorting(state, action.column);
    default:
      return state;
  }
};

export default sorting;
