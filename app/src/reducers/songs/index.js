import { SET_SONGS, SET_SONGS_LOAD_STATUS } from '../../constants'

export const songs = (state = [], action) => {
  switch (action.type) {
    case SET_SONGS:
      return action.payload
    default:
      return state
  }
}

export const songListState = (state = 'loading', action) => {
  switch (action.type) {
    case SET_SONGS_LOAD_STATUS:
      return action.payload
    default:
      return state
  }
}
