import { createStore, combineReducers, applyMiddleware } from 'redux'
import { songs, songListState } from './reducers/songs'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    songs,
    songListState
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})
export default store
