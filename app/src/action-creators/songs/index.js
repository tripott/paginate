import fetch from 'isomorphic-fetch'
import { SET_SONGS, SET_SONGS_LOAD_STATUS } from '../../constants'
const url = 'http://localhost:5000'

// export const getSongs = (limit = 5, startkey, page) => async (dispatch, getState) => {
//   const songsURL = startkey
//     ? `${url}/songs?limit=${limit}&startkey=${startkey}`
//     : `${url}/songs?limit=${limit}`
//
//   const songs = await fetch(songsURL).then(res => res.json())
//   dispatch({ type: SET_SONGS, payload: songs })
//   dispatch({ type: SET_SONGS_LOAD_STATUS, payload: 'ready' })
// }

export const getSongs = (limit = 3, startkey, page) => async (
  dispatch,
  getState
) => {
  const songsURL = startkey
    ? `${url}/songs?limit=${limit}&startkey=${startkey}`
    : `${url}/songs?limit=${limit}`

  const songs = await fetch(songsURL).then(res => res.json())

  /*
  {
    type: SET_SONGS,
    payload: {currentPage: 2, data: [ ...array of songs...]}
  }
  */

  dispatch({ type: SET_SONGS, payload: { currentPage: page, data: songs } })
  dispatch({ type: SET_SONGS_LOAD_STATUS, payload: 'ready' })
}

// export const navNext = (history, limit, startkey, nextStartKey) => (
//   dispatch,
//   getState
// ) => {
//   history.push(`/?limit=${limit}&startkey=${nextStartKey}`)
//   history.go()
// }
