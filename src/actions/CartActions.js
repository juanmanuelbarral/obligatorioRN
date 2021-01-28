import * as types from './types';

export const cartItemDecrease = (itemId) => ({
  type: types.CART_ITEM_DECREASE,
  payload: itemId,
});

export const cartItemIncrease = (itemId) => ({
  type: types.CART_ITEM_INCREASE,
  payload: itemId,
});

//TODO: pop navigation from here
//TODO: also look for a way of also clearing the search text?
export const checkout = () => ({
  type: types.CHECKOUT,
});
