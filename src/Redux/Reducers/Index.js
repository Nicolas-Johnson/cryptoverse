import { combineReducers } from "redux";

// reducers
import crypto from './Crypto';
import news from './News';

const rootReducer = combineReducers({
  crypto,
  news,
});

export default rootReducer;
