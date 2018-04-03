import {
  SET_SONGS,
  SET_SONGS_LOAD_STATUS,
  SET_PREVIOUS_START_KEY
  //ADD_SONG_NAV_HISTORY
} from '../../constants'
import { last, propOr } from 'ramda'

export const songs = (state = [], action) => {
  switch (action.type) {
    case SET_SONGS:
      return action.payload
    default:
      return state
  }
}

export const songLoadStatus = (state = 'loading', action) => {
  switch (action.type) {
    case SET_SONGS_LOAD_STATUS:
      return action.payload
    default:
      return state
  }
}
//
// export const prevStartKey = (state = null, action) => {
//   switch (action.type) {
//     case SET_SONGS:
//       console.log('REDUCER prevStartKey', action.payload)
//       return propOr(null, '_id', last(action.payload))
//     default:
//       return state
//   }
// }

// export const songPageNavHistory = (
//   state = [
//     {
//       prevStartKey: undefined,
//       nextStartKey: undefined
//     }
//   ],
//   action
// ) => {
//   switch (action.type) {
//     case ADD_SONG_NAV_HISTORY:
//       return concat(state, action.payload)
//     default:
//       return state
//   }
// }
