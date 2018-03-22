// @flow

import { combineReducers } from 'redux';

import cart from './cart';
import sorting from './sorting';

export default combineReducers({
  cart,
  sorting
});
