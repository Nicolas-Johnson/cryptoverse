import { REQUEST_CRYPTO, RECEIVED_CRYPTO, HOME_DISMOUNT } from '../Actions/Index';

const INITIAL_STATE = {
  isFetcthing: false,
  coins: [],
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
      coins: [...action.coins.data.coins],
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
