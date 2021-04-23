import { combineReducers } from 'redux';
import counterReducer from "./CountReducer";
import dataReducer from "./DataReducer"

const rootReducer = combineReducers({ counterReducer, dataReducer })
export default rootReducer;