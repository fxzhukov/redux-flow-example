// @flow

import React from 'react';
import type { Name, Price, Amount, Id } from '../types/cart';

export type Props = {
  id: Id,
  idx: number,
  name: Name,
  price: Price,
  amount: Amount,
  changeAmount: (id: Id, amount: Amount) => void,
  removeItem: (id: Id) => void
};

const Item = ({
  id,
  idx,
  name,
  price,
  amount,
  changeAmount,
  removeItem
}: Props) => (
  <tr>
    <td>{idx + 1}</td>
    <td align={'right'}>{name}</td>
    <td align={'right'}>{`$ ${price}`}</td>
    <td>
      <button
        onClick={() => changeAmount(id, amount - 1)}
        className={'amountMinus'}
      >
        -
      </button>
      {amount}
      <button
        onClick={() => changeAmount(id, amount + 1)}
        className={'amountPlus'}
      >
        +
      </button>
    </td>
    <td>
      <button onClick={() => removeItem(id)} className={'removeItem'}>
        Delete
      </button>
    </td>
  </tr>
);

export default Item;
