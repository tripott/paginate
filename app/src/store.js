import { createStore, combineReducers, applyMiddleware } from 'redux'
import { songs, songLoadStatus, prevStartKey } from './reducers/songs'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    songs,
    songLoadStatus,
    prevStartKey
  }),
  applyMiddleware(thunk)
)
// store.subscribe(() => {
//   console.log('store.getState()', store.getState())
// })
export default store
