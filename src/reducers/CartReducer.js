import * as types from '../actions/types';

const MAX_ITEMS = 20;
const MIN_ITEMS = 0;
const INITIAL_STATE = {
  cartItems: {},
  canCheckout: false,
};

export default (state = INITIAL_STATE, action) => {
  const { cartItems } = state;
  const { type, payload } = action;
  let newItems = cartItems;

  switch (type) {
    case types.CART_ITEM_DECREASE:
      newItems = { ...cartItems, [payload]: getNextQuantity(cartItems[payload], -1) };
      console.log(newItems);
      return {
        ...state,
        cartItems: newItems,
        canCheckout: canCheckout(newItems),
      };
    case types.CART_ITEM_INCREASE:
      newItems = { ...cartItems, [payload]: getNextQuantity(cartItems[payload], +1) };
      console.log(newItems);
      return {
        ...state,
        cartItems: newItems,
        canCheckout: canCheckout(newItems),
      };
    case types.CHECKOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const getNextQuantity = (current, diff) => {
  const currentNotUndefined = current || 0;
  return Math.max(MIN_ITEMS, Math.min(MAX_ITEMS, currentNotUndefined + diff));
};

const canCheckout = (cartItems) => {
  const values = Object.values(cartItems);
  if (values.length === 0) {
    return false;
  } else {
    return values.some(entry => entry > 0);
  }
};
