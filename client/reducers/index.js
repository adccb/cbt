import { combineReducers } from 'redux'

import distortionsReducer from './distortions'
import entriesReducer from './entries'

export default combineReducers({
  distortionsReducer,
  entriesReducer
})
