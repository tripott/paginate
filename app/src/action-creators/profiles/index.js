import fetch from 'isomorphic-fetch'
import { SET_PROFILE, SET_PROFILES } from '../../constants'

const url = 'http://localhost:5000'

const getOptions = (method = 'GET', body = null) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body && JSON.stringify(body)
  }
}

export const createProfile = history => (dispatch, getState) => {
  fetch(`${url}/profiles`, getOptions('POST', getState().profile))
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SET_PROFILE,
        payload: {
          firstName: '',
          lastName: '',
          dob: '',
          gender: '',
          photo: '',
          profiles: []
        }
      })
    )
    .then(() => history.push('/profiles'))
}

export const listProfiles = (dispatch, getState) => {
  fetch(`${url}/profiles?limit=20`, getOptions())
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILES, payload: data }))
}

export const getProfile = id => (dispatch, getState) => {
  fetch(`${url}/profiles/${id}`, getOptions())
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE, payload: data }))
}
