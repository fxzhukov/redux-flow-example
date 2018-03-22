import cart from '../../reducers/cart';
import {
  addItem,
  changeAmount,
  removeItem,
  fillCart
} from '../../actions/cart';
import { fakeProduct, anotherFakeProduct } from '../../mock-data';
import { generateCartContent } from '../../items-generator';

describe('Cart reducer', () => {
  it('should handle initial state', () => {
    expect(cart(undefined, { type: '@@INIT' })).toEqual([]);
  });

  it('should handle ADD_ITEM', () => {
    expect(cart([], addItem(fakeProduct))).toEqual([fakeProduct]);
    expect(cart([fakeProduct], addItem(anotherFakeProduct))).toEqual([
      fakeProduct,
      anotherFakeProduct
    ]);
  });

  it('should handle CHANGE_AMOUNT', () => {
    const cartState = cart([], addItem(fakeProduct));
    expect(cart(cartState, changeAmount(1, 2))[0].amount).toBe(2);
  });

  it('should handle REMOVE_ITEM', () => {
    const cartState = cart([], addItem(fakeProduct));
    expect(cart(cartState, removeItem(1))).toEqual([]);
  });

  it('should handle FILL_CART', () => {
    const cartState = cart([], fillCart(generateCartContent(10)));
    expect(cartState).toHaveLength(10);
  });
});
