import { REQUEST_CRYPTO, RECEIVED_CRYPTO, HOME_DISMOUNT } from '../Actions/Index';

const INITIAL_STATE = {
  isFetcthing: false,
  exchanges: {},
  //currencies: [],
  stats: {},
  canRender: false,
};

const crypto = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CRYPTO:
    return {
      ...state,
      isFetcthing: true,
    }
  case RECEIVED_CRYPTO:
    return {
      ...state,
      isFetcthing: false,
      exchanges: action.coins.data,
      //currencies: [...action.coins.data.currencies],
      stats: action.coins.data.stats,
      canRender: true,
    }
  case HOME_DISMOUNT:
    return {
      ...state,
      canRender: false,
    }
  default:
    return state;
  }
}

export default crypto;
