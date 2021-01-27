import * as types from '../actions/types';

const MAX_ITEMS = 20;
const MIN_ITEMS = 0;
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CART_ITEM_DECREASE:
      return { ...state, [payload]: getNextQuantity(state[payload], -1) };
    case types.CART_ITEM_INCREASE:
      return { ...state, [payload]: getNextQuantity(state[payload], +1) };
    default:
      return state;
  }
};

const getNextQuantity = (current, diff) => {
  const currentNotUndefined = current || 0;
  return Math.max(MIN_ITEMS, Math.min(MAX_ITEMS, currentNotUndefined + diff));
};
