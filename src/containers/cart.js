// @flow

import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import type { State, Dispatch } from '../types/index';

import {
  sortedItemsSelector,
  subtotalSelector,
  sortingSelector
} from '../selectors';
import { addItem, removeItem, changeAmount, fillCart } from '../actions/cart';
import { toggleSorting } from '../actions/sorting';
import type { Id, Amount } from '../types/cart';
import type { Props } from '../components/cart';
import type { SortColumn } from '../types/sorting';
import { generateProduct, generateCartContent } from '../items-generator';

import Cart from '../components/cart';

const mapStateToProps = (state: State) => ({
  items: sortedItemsSelector(state),
  total: subtotalSelector(state),
  sortColumn: sortingSelector(state).column,
  sortDirection: sortingSelector(state).direction
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: () => dispatch(addItem(generateProduct())),
  fillCart: () => dispatch(fillCart(generateCartContent(10))),
  removeItem: (id: Id) => dispatch(removeItem(id)),
  changeAmount: (id: Id, amount: Amount) => dispatch(changeAmount(id, amount)),
  toggleSorting: (column: SortColumn) => dispatch(toggleSorting(column))
});

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Cart);
