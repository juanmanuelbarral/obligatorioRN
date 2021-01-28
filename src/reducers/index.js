import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import StoreReducer from './StoreReducer';

export default combineReducers({
  cart: CartReducer,
  store: StoreReducer,
});
