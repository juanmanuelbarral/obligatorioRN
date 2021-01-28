import * as types from '../actions/types';

const INITIAL_STATE = {
  search: '',
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_STORE:
      return { ...state, items: payload };
    case types.SEARCH_INPUT:
      return { ...state, search: payload };
    default:
      return state;
  }
};
