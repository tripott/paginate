import {
  SET_PROFILE,
  SET_PROFILE_X,
  CLEAR_PROFILE,
  SET_PROFILES
} from '../../constants'
import { merge, cond, always, equals, T } from 'ramda'

export const profile = (
  state = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    photo: '',
    contacts: []
  },
  action
) => {
  return cond([
    [
      equals(SET_PROFILE_X + 'FIRSTNAME'),
      type => merge(state, { firstName: action.payload })
    ],
    [
      equals(SET_PROFILE_X + 'LASTNAME'),
      type => merge(state, { lastName: action.payload })
    ],
    [
      equals(SET_PROFILE_X + 'DOB'),
      type => merge(state, { dob: action.payload })
    ],
    [
      equals(SET_PROFILE_X + 'GENDER'),
      type => merge(state, { gender: action.payload })
    ],
    [
      equals(SET_PROFILE_X + 'PHOTO'),
      type => merge(state, { photo: action.payload })
    ],
    [equals(SET_PROFILE), always(action.payload)],
    [equals(CLEAR_PROFILE), always(action.payload)],
    [T, always(state)]
  ])(action.type)
}

export const profiles = (state = [], action) => {
  switch (action.type) {
    case SET_PROFILES:
      return action.payload
    default:
      return state
  }
  return state
}
