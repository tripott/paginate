import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  songs,
  songLoadStatus,
  songPageCounter,
  pageHistory
} from './reducers/songs'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    songs,
    songLoadStatus,
    songPageCounter,
    pageHistory
  }),
  applyMiddleware(thunk)
)
// store.subscribe(() => {
//   console.log('store.getState()', store.getState())
// })
export default store
