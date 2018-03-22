import type { SortColumn, TableSortingAction } from '../types/sorting';
import { SORT_ITEMS_ACTION } from '../constants';

export const toggleSorting = (column: SortColumn): TableSortingAction => {
  return {
    type: SORT_ITEMS_ACTION,
    column
  };
};
