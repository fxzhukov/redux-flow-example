// @flow

import React from 'react';
import type { CartItems, Id, Amount, Price } from '../types/cart';
import type { SortColumn, SortDirection } from '../types/sorting';
import Item from './item';
import { SORT_ASCENDING } from '../constants';

export type Props = {
  items: CartItems,
  addItem: () => void,
  fillCart: () => void,
  changeAmount: (id: Id, amount: Amount) => void,
  removeItem: (id: Id) => void,
  toggleSorting: (column: SortColumn) => void,
  sortColumn: SortColumn,
  sortDirection: SortDirection,
  total: Price
};

const generateClassName = (
  columnName: SortColumn,
  sortColumn: SortColumn,
  sortDirection: SortDirection
) => {
  if (columnName === sortColumn && sortDirection) {
    return sortDirection === SORT_ASCENDING ? 'ascending' : 'descending';
  }
  return '';
};

const Cart = ({
  addItem,
  fillCart,
  items,
  changeAmount,
  removeItem,
  total,
  toggleSorting,
  sortColumn,
  sortDirection
}: Props) => (
  <div>
    <div className={'flexBlock appHeader'}>
      <h2>My cool cart</h2>
      <div>
        <button onClick={fillCart} className={'generateCart'}>
          Generate random cart content
        </button>
        <button onClick={addItem} className={'addItem'}>
          + Add item
        </button>
      </div>
    </div>
    <table width={'100%'}>
      <thead>
        <tr>
          <th>#</th>
          <th
            onClick={() => toggleSorting('name')}
            align={'right'}
            className={`sortBy ${generateClassName(
              'name',
              sortColumn,
              sortDirection
            )}`}
          >
            Product Name
          </th>
          <th
            onClick={() => toggleSorting('price')}
            align={'right'}
            className={`sortBy ${generateClassName(
              'price',
              sortColumn,
              sortDirection
            )}`}
          >
            Price
          </th>
          <th
            onClick={() => toggleSorting('amount')}
            className={`sortBy ${generateClassName(
              'amount',
              sortColumn,
              sortDirection
            )}`}
          >
            Amount
          </th>
          <th>Delete item</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <Item
            idx={idx}
            key={item.id}
            {...item}
            changeAmount={changeAmount}
            removeItem={removeItem}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2} align={'right'}>
            <strong>Total:</strong>
          </td>
          <td align={'right'}>
            <strong>{`$ ${total}`}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default Cart;
