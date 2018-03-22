// @flow

import type {
  Id,
  Amount,
  CartItem,
  CartItems,
  CartAction
} from '../types/cart';
import {
  CHANGE_AMOUNT_ACTION,
  REMOVE_ITEM_ACTION,
  ADD_ITEM_ACTION,
  FILL_CART_ACTION
} from '../constants';

export const changeAmount = (id: Id, amount: Amount): CartAction => {
  return {
    type: CHANGE_AMOUNT_ACTION,
    id,
    amount
  };
};

export const removeItem = (id: Id): CartAction => {
  return {
    type: REMOVE_ITEM_ACTION,
    id
  };
};

export const addItem = (item: CartItem): CartAction => {
  return {
    type: ADD_ITEM_ACTION,
    item
  };
};

export const fillCart = (items: CartItems): CartAction => {
  return {
    type: FILL_CART_ACTION,
    items
  };
};
