import * as types from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_STORE:
      return payload;
    default:
      return state;
  }
};
