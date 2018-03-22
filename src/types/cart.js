// @flow

import {
  CHANGE_AMOUNT_ACTION,
  REMOVE_ITEM_ACTION,
  ADD_ITEM_ACTION,
  FILL_CART_ACTION
} from '../constants';

export type Id = number;
export type Amount = number;
export type Name = string;
export type Price = number;

export type CartItem = {
  +id: Id,
  +name: Name,
  amount: Amount,
  +price: Price
};

export type CartItems = Array<CartItem>;

export type CartState = {
  cart: CartItems
};

export type ChangeAmountAction = {|
  type: typeof CHANGE_AMOUNT_ACTION,
  +id: Id,
  amount: Amount
|};
export type RemoveItemAction = {| type: typeof REMOVE_ITEM_ACTION, +id: Id |};
export type AddItemAction = {| type: typeof ADD_ITEM_ACTION, +item: CartItem |};
export type FillCartAction = {|
  type: typeof FILL_CART_ACTION,
  +items: CartItems
|};

export type CartAction =
  | ChangeAmountAction
  | RemoveItemAction
  | AddItemAction
  | FillCartAction;
