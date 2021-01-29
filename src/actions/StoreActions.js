import * as types from './types';
import banners from '../db/banners';
import storeItems from '../db/items';

export const fetchBanners = () => ({
  type: types.FETCH_BANNERS,
  payload: banners,
});

export const fetchStore = () => ({
  type: types.FETCH_STORE,
  payload: storeItems,
});

export const searchInput = (input) => ({
  type: types.SEARCH_INPUT,
  payload: input,
});

export const clearSearchInput = () => searchInput('');
