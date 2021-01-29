import * as types from '../actions/types';
import Toast from 'react-native-toast-message';

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
      return {
        ...state,
        cartItems: newItems,
        canCheckout: canCheckout(newItems),
      };
    case types.CART_ITEM_INCREASE:
      checkEndOfStock(cartItems[payload], +1);
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

const checkEndOfStock = (current, diff) => {
  const totalStock = MAX_ITEMS;
  const nextValue = (current || 0) + diff;
  if (nextValue > totalStock) {
    Toast.show({
      text1: 'No more stock 😱',
      text2: 'We are sorry but we don\'t have enough stock of that product',
      topOffset: 50,
      type: 'error',
    });
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
