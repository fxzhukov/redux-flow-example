// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { CartState, CartAction } from './cart';
import type { TableSortingState, TableSortingAction } from './sorting';

export type ReduxInitAction = { type: '@@INIT' };

export type State = CartState & TableSortingState;

export type Action = ReduxInitAction | CartAction | TableSortingAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
