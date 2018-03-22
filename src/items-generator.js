// @flow

import type { CartItem, CartItems } from './types/cart';

export const goods = [
  'Lasagna',
  'Pepperoni',
  'Gamburger',
  'Pepsi',
  'Beef',
  'Pasta',
  'Juice',
  'Fajitas',
  'Steak',
  'Fish',
  'Chips',
  'Orange Fresh',
  'Milky Oolong',
  'Kesadilija',
  'Tomato soup',
  'Bread',
  'Yoplait greek',
  'Tacos',
  'Fresh milk',
  'Espresso',
  'Mocha',
  'Latte'
];

/**
 * Generate random item for adding to cart
 * @returns {{id: number, name: string, price}}
 */
export const generateProduct = (): CartItem => {
  const randomKey = Math.floor(Math.random() * goods.length);
  const basePrice = 5;
  return {
    id: randomKey,
    name: goods[randomKey],
    price: parseFloat((basePrice * (1 + randomKey / goods.length)).toFixed(2)),
    amount: 1
  };
};

/**
 * Generate array of random unique products for initail filling of cart
 * @param numberOfProducts
 * @returns {Array}
 */
export const generateCartContent = (numberOfProducts: number): CartItems => {
  const productsArr = [];
  while (productsArr.length < numberOfProducts) {
    const newProduct = generateProduct();
    if (!productsArr.some(p => p.id === newProduct.id)) {
      productsArr.push(newProduct);
    }
  }
  return productsArr;
};
