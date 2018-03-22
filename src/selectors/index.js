// @flow

import { createSelector } from 'reselect';
import type { State } from '../types';
import type { CartItems } from '../types/cart';
import type { TableSorting } from '../types/sorting';
import { SORT_ASCENDING, SORT_DESCENDING } from '../constants';
import { compareHelper } from '../utils';

const itemsSelector = (state: State): CartItems => state.cart;
export const sortingSelector = (state: State): TableSorting => state.sorting;

export const subtotalSelector = createSelector(itemsSelector, items =>
  parseFloat(
    items.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)
  )
);

export const sortedItemsSelector = createSelector(
  itemsSelector,
  sortingSelector,
  (items, sorting) => {
    const { column, direction } = sorting;
    switch (direction) {
      case SORT_ASCENDING:
        return [...items].sort((a, b) =>
          compareHelper[column](a[column], b[column])
        );
      case SORT_DESCENDING:
        return [...items]
          .sort((a, b) => compareHelper[column](a[column], b[column]))
          .reverse();
      default:
        return items;
    }
  }
);
