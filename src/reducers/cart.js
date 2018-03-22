// @flow

import type {
  CartItems,
  Id,
  Amount,
  CartItem,
  CartAction
} from '../types/cart';
import {
  CHANGE_AMOUNT_ACTION,
  REMOVE_ITEM_ACTION,
  ADD_ITEM_ACTION,
  FILL_CART_ACTION
} from '../constants';

/**
 * Find product in cart and change amount to given value. Amount could be only positive integer
 * @param items - initial state
 * @param id - id of a product
 * @param amount - amount to set
 * @returns CartItems new state
 */
const changeItemAmount = (
  items: CartItems,
  id: Id,
  amount: Amount
): CartItems =>
  items.map(
    item => (item.id !== id || amount <= 0 ? item : { ...item, amount })
  );

/**
 * Remove product from cart
 * @param items - initial state
 * @param id - id of a product to delete
 * @returns CartItems new state
 */
const removeItem = (items: CartItems, id: Id): CartItems =>
  items.filter(item => item.id !== id);

/**
 * Add new product to the cart or increase amount of existing product by one
 * @param items - initial state
 * @param itemToAdd - item to add
 * @returns CartItems new state
 */
const addItem = (items: CartItems, itemToAdd: CartItem): CartItems => {
  return items.some(i => i.id === itemToAdd.id)
    ? items.map(
        i => (i.id === itemToAdd.id ? { ...i, amount: i.amount + 1 } : i)
      )
    : [...items, itemToAdd];
};

const cart = (state: CartItems = [], action: CartAction): CartItems => {
  switch (action.type) {
    case CHANGE_AMOUNT_ACTION:
      return changeItemAmount(state, action.id, action.amount);
    case ADD_ITEM_ACTION:
      return addItem(state, action.item);
    case REMOVE_ITEM_ACTION:
      return removeItem(state, action.id);
    case FILL_CART_ACTION:
      return [...action.items];
    default:
      return state;
  }
};

export default cart;
