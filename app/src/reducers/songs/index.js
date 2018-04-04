import {
  SET_SONGS,
  SET_SONGS_LOAD_STATUS,
  INCREMENT_SONG_PAGE_COUNTER,
  DECREMENT_SONG_PAGE_COUNTER
} from '../../constants'
import { last, map, merge, prop, append, find } from 'ramda'

/* sample action
  {
    type: SET_SONGS,
    payload: {currentPage: 2, data: [ ...array of songs...]}
  }
*/

export const songs = (state = [], action) => {
  switch (action.type) {
    case SET_SONGS:
      return action.payload.data
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

const initialState = [{ page: 1, current: null, next: null }]

/* sample action
  {
    type: SET_SONGS,
    payload: {currentPage: 2, data: [ ...array of songs...]}
  }
*/

export const pageHistory = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      if (action.payload.currentPage === 1) {
        const newState = map(
          page =>
            page.page === 1
              ? merge(page, { next: prop('_id', last(action.payload.data)) })
              : page,
          state
        )
        console.log('First page state:', newState)
        /* sample returned newstate
        [
          {page: 1, current: null, next: "song_fisher-man-dub"}
        ]
        */
        return newState
      } else if (action.payload.currentPage > 1) {
        // see if the page is already in pageHistory
        // if we alredy have the current page in state
        //   then there is noting to do.  return existing state.
        if (find(page => page.page === action.payload.currentPage, state)) {
          console.log(
            'Page already in pageHistory.  No changes to state:',
            state
          )
          return state
        }

        const previousHistoryPage = find(
          page => page.page === action.payload.currentPage - 1,
          state
        )

        // get the previous page's next value and use for the current page value
        if (previousHistoryPage) {
          const newState = append(
            {
              page: action.payload.currentPage,
              current: previousHistoryPage.next,
              next: prop('_id', last(action.payload.data))
            },
            state
          )
          console.log('Additional pages state:', newState)
          /* sample returned newstate for second page.
          [
            {page: 1, current: null, next: "song_fisher-man-dub"},
            {page: 2, current: "song_fisher-man-dub", next: "song_let-down"}
          ]
          */

          /* sample returned newstate for third page.
          [
            {page: 1, current: null, next: "song_fisher-man-dub"},
            {page: 2, current: "song_fisher-man-dub", next: "song_let-down"},
            {page: 3, current: "song_let-down", next: "song_sweet-and-dandy"}
          ]
          */
          return newState
        }
      } else {
        return state
      }
      break
    default:
      return state
  }
}

export const songPageCounter = (state = 1, action) => {
  switch (action.type) {
    case INCREMENT_SONG_PAGE_COUNTER:
      return state + 1
    case DECREMENT_SONG_PAGE_COUNTER:
      return state - 1 === 0 ? 1 : state - 1
    default:
      return state
  }
}
