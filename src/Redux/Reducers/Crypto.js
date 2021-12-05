import { REQUEST_CRYPTO, RECEIVED_CRYPTO, HOME_DISMOUNT, RECEIVED_COIN, RECEIVED_HISTORY } from '../Actions/Index';

const INITIAL_STATE = {
  isFetcthing: false,
  coins: [],
  coin: '',
  //currencies: [],
  stats: {},
  canRender: false,
  history: '',
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
  case RECEIVED_COIN:
      return {
        ...state,
        isFetcthing: false,
        coin: action.coin.data.coin,
      }
  case HOME_DISMOUNT:
    return {
      ...state,
      canRender: false,
    }
  case RECEIVED_HISTORY:
    return {
      ...state,

      isFetcthing: false,
      history: action.history.data,
    }
  default:
    return state;
  }
}

export default crypto;
