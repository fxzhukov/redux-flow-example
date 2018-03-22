import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Cart from '../../containers/Cart';
import {
  addItem,
  removeItem,
  changeAmount,
  fillCart
} from '../../actions/cart';
import { toggleSorting } from '../../actions/sorting';
import { anotherFakeProduct, fakeProduct } from '../../mock-data';

const setup = (
  setupStore = {
    cart: [],
    sorting: {}
  }
) => {
  const store = configureStore()(setupStore);
  const wrapper = mount(<Cart store={store} />);

  return {
    store,
    wrapper
  };
};

describe('Cart', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('Should add item when a add item is clicked', () => {
    const { store, wrapper } = setup();
    wrapper
      .mount()
      .find('.addItem')
      .first()
      .simulate('click');
    expect(store.getActions()[0].type).toEqual(addItem().type);
  });

  test('Should fill cart with items when a fill cart is clicked', () => {
    const { store, wrapper } = setup();
    wrapper
      .mount()
      .find('.generateCart')
      .first()
      .simulate('click');
    expect(store.getActions()[0].type).toEqual(fillCart([]).type);
  });

  test('Should call sorting action when a table headers is clicked', () => {
    const { store, wrapper } = setup({
      cart: [fakeProduct, anotherFakeProduct],
      sorting: {}
    });
    wrapper
      .mount()
      .find('.sortBy')
      .first()
      .simulate('click');
    expect(store.getActions()[0]).toEqual(toggleSorting('name'));
    wrapper
      .mount()
      .find('.sortBy')
      .at(1)
      .simulate('click');
    expect(store.getActions()[1]).toEqual(toggleSorting('price'));
    wrapper
      .mount()
      .find('.sortBy')
      .at(2)
      .simulate('click');
    expect(store.getActions()[2]).toEqual(toggleSorting('amount'));
  });

  test('Should render items correctly', () => {
    const { store, wrapper } = setup({
      cart: [fakeProduct, anotherFakeProduct],
      sorting: {}
    });
    expect(wrapper.mount().find('Item')).toHaveLength(2);
  });

  test('Should call remove action when a remove item is clicked', () => {
    const { store, wrapper } = setup({
      cart: [fakeProduct, anotherFakeProduct],
      sorting: {}
    });
    wrapper
      .mount()
      .find('.removeItem')
      .first()
      .simulate('click');
    expect(store.getActions()[0]).toEqual(removeItem(1));
  });

  test('Should call change amount actions when buttons are clicked', () => {
    const { store, wrapper } = setup({
      cart: [fakeProduct, anotherFakeProduct],
      sorting: {}
    });
    wrapper
      .mount()
      .find('.amountPlus')
      .first()
      .simulate('click');
    expect(store.getActions()[0]).toEqual(changeAmount(1, 2));
    wrapper
      .mount()
      .find('.amountMinus')
      .first()
      .simulate('click');
    expect(store.getActions()[1]).toEqual(changeAmount(1, 0));
  });
});
