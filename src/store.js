import { createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from './reducers';

const initialState = {};
const middleware = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  persistState(['cart', 'sorting'], { key: 'flowCart' })
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
