import * as types from './types';
import storeItems from '../db/items';

export const fetchStore = () => ({
  type: types.FETCH_STORE,
  payload: storeItems
});
