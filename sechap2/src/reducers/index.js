import { combineReducers } from 'redux'
import counterReducer from './counter'
import { keys, selectedKey } from "./key";

const rootReducer = combineReducers({
  count: counterReducer,
  keys,
  selectedKey,
})

export default rootReducer
