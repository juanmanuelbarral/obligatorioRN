import * as types from './types';

export const cartItemDecrease = (itemId) => ({
  type: types.CART_ITEM_DECREASE,
  payload: itemId
});

export const cartItemIncrease = (itemId) => ({
  type: types.CART_ITEM_INCREASE,
  payload: itemId
});
