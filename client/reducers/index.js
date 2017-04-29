import { combineReducers } from 'redux'
import entriesReducer from './entries'
import layoutReducer from './layout'

export default combineReducers({
  entriesReducer,
  layoutReducer
})
