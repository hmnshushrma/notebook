import { combineReducers } from 'redux'
import shopReducer from './shop.slice'

export const rootReducer = combineReducers({
  shop: shopReducer
})
