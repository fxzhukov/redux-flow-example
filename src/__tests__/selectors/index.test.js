import {
  sortedItemsSelector,
  sortingSelector,
  subtotalSelector
} from '../../selectors';
import { SORT_ASCENDING, SORT_DESCENDING } from '../../constants';
import {
  defaultItems,
  itemsSortedByNameAsc,
  itemsSortedByNameDesc,
  itemsSortedByPriceAsc,
  itemsSortedByPriceDesc,
  itemsSortedByAmountAsc,
  itemsSortedByAmountDesc,
  itemsSubtotal
} from '../../mock-data';

let state;
beforeEach(() => {
  state = {
    cart: defaultItems,
    sorting: {}
  };
});

describe('sortedItemsSelector should works properly', () => {
  test('should returns item properly', () => {
    expect(sortedItemsSelector(state)).toEqual(defaultItems);
  });

  test('should returns items sorted alphabetically by name', () => {
    state.sorting = { column: 'name', direction: SORT_ASCENDING };
    expect(sortedItemsSelector(state)).toEqual(itemsSortedByNameAsc);
  });

  test('should returns items sorted alphabetically by name (descending)', () => {
    state.sorting = { column: 'name', direction: SORT_DESCENDING };
    expect(sortedItemsSelector(state)).toEqual(itemsSortedByNameDesc);
  });

  test('should returns items sorted by price', () => {
    state.sorting = { column: 'price', direction: SORT_ASCENDING };
    expect(sortedItemsSelector(state)).toEqual(itemsSortedByPriceAsc);
  });

  test('should returns items sorted by price (descending)', () => {
    state.sorting = { column: 'price', direction: SORT_DESCENDING };
    expect(sortedItemsSelector(state)).toEqual(itemsSortedByPriceDesc);
  });

  test('should returns items sorted by amount', () => {
    state.sorting = { column: 'amount', direction: SORT_ASCENDING };
    expect(sortedItemsSelector(state)).toEqual(itemsSortedByAmountAsc);
  });

  test('should returns items sorted by amount (descending)', () => {
    state.sorting = { column: 'amount', direction: SORT_DESCENDING };
    expect(sortedItemsSelector(state)).toEqual(itemsSortedByAmountDesc);
  });
});

describe('subtotalSelector should works properly', () => {
  test('should returns a correct subtotal', () => {
    expect(subtotalSelector(state)).toEqual(itemsSubtotal);
  });
});

describe('sortingSelector should works properly', () => {
  test('should returns a proper sorting object', () => {
    state.sorting = { column: 'amount', direction: SORT_DESCENDING };
    expect(sortingSelector(state)).toEqual({
      column: 'amount',
      direction: SORT_DESCENDING
    });
  });
});
