import { REQUEST_CRYPTO, RECEIVED_CRYPTO, HOME_DISMOUNT, RECEIVED_COIN, RECEIVED_HISTORY, REQUEST_EXCHANGES, RECEIVED_EXCHANGES } from '../Actions/Index';

const INITIAL_STATE = {
  isFetcthing: false,
  coins: [],
  coin: '',
  stats: {},
  canRender: false,
  history: '',
  exchanges: [],
};

const crypto = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CRYPTO || REQUEST_EXCHANGES:
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
  case RECEIVED_EXCHANGES:
    return {
      ...state,
      isFetcthing: false,
      exchanges: action.exchanges.data.exchanges,
    }
  default:
    return state;
  }
}

export default crypto;
