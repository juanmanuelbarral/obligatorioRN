import * as types from './types';
import storeItems from '../db/items';

export const fetchStore = () => ({
  type: types.FETCH_STORE,
  payload: storeItems
});

export const searchInput = (input) => ({
  type: types.SEARCH_INPUT,
  payload: input
});
