// @flow
import {
  SORT_ASCENDING,
  SORT_DESCENDING,
  SORT_ITEMS_ACTION
} from '../constants';

export type SortDirection = typeof SORT_ASCENDING | typeof SORT_DESCENDING;
export type SortColumn = 'name' | 'amount' | 'price';

export type TableSorting = { column?: SortColumn, direction?: SortDirection };

export type TableSortingState = {
  sorting: TableSorting
};

export type TableSortingAction = {
  type: typeof SORT_ITEMS_ACTION,
  column: SortColumn
};
