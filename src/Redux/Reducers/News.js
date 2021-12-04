import { REQUEST_NEWS, RECEIVED_NEWS } from '../Actions/Index';

const INITIAL_STATE = {
  news: [],
  isFetcthing: false,
};

const news = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_NEWS:
    return {
      ...state,
      isFetcthing: true,
    }
  case RECEIVED_NEWS:
    return {
      ...state,
      isFetcthing: false,
      news: action.news.value,
    }
  default:
    return state;
  }
}

export default news;