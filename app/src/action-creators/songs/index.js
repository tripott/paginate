import fetch from 'isomorphic-fetch'
import { SET_SONGS, SET_SONGS_LOAD_STATUS } from '../../constants'
const url = 'http://localhost:5000'

export const getSongs = (limit = 5, startkey) => async (dispatch, getState) => {
  const songsURL = startkey
    ? `${url}/songs?limit=${limit}&startkey=${startkey}`
    : `${url}/songs?limit=${limit}`

  const songs = await fetch(songsURL).then(res => res.json())
  dispatch({ type: SET_SONGS, payload: songs })
  dispatch({ type: SET_SONGS_LOAD_STATUS, payload: 'ready' })
}
