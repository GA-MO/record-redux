import { combineReducers } from 'redux'
import todo from './todo'
import count from './count'

export default combineReducers({
  todo,
  count,
})
