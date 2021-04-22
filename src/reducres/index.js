import { combineReducers } from 'redux';
import counterReducer from "./CountReducer";

const rootReducer = combineReducers({ counterReducer })
export default rootReducer;