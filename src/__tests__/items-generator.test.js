import {
  generateProduct,
  goods,
  generateCartContent
} from '../items-generator';

describe('itemsGenerator should works properly', () => {
  const desiredProduct = {
    id: expect.any(Number),
    amount: expect.any(Number),
    price: expect.any(Number),
    name: expect.any(String)
  };

  test('should returns item properly', () => {
    const product = generateProduct();
    expect(product).toMatchObject(desiredProduct);
    expect(goods).toContain(product.name);
    expect(product.amount).toBe(1);
  });

  test('should generate random items sets', () => {
    const products = generateCartContent(10);
    const product = products[4];
    expect(products).toHaveLength(10);
    expect(product).toMatchObject(desiredProduct);
    expect(goods).toContain(product.name);
    expect(product.amount).toBe(1);
  });
});
