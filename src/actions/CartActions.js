import * as types from './types';
import { goBack } from '../RootNavigation';

export const cartItemDecrease = (itemId) => ({
  type: types.CART_ITEM_DECREASE,
  payload: itemId,
});

export const cartItemIncrease = (itemId) => ({
  type: types.CART_ITEM_INCREASE,
  payload: itemId,
});

export const checkout = () => {
  goBack();
  return { type: types.CHECKOUT };
};
