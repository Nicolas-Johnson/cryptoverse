import { combineReducers } from "redux";

// reducers
import crypto from './Crypto';

const rootReducer = combineReducers({
  crypto,
  //reducerY,
});

export default rootReducer;
