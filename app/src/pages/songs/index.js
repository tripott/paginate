import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../../action-creators/songs'
import SongListItem from '../../components/SongListItem'
import PageNav from '../../components/PageNav'
import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import { map, find } from 'ramda'
import {
  INCREMENT_SONG_PAGE_COUNTER,
  DECREMENT_SONG_PAGE_COUNTER
} from '../../constants'

class Songs extends React.Component {
  componentDidMount() {
    //use limit from the app url to state your page size
    const params = new URLSearchParams(this.props.location.search)
    const limit = params.get('limit') || 3

    if (this.props.page === 1) {
      let startkey = null
      this.props.getSongs(limit, startkey, 1)
    }
  }
  render() {
    const { songs, page, pageHistory, navPrev, navNext } = this.props
    const params = new URLSearchParams(this.props.location.search)
    const limit = params.get('limit') || 3

    if (this.props.songLoadStatus === 'loading') {
      return <CircularProgress color="secondary" />
    }

    if (this.props.songLoadStatus === 'ready') {
      return (
        <div>
          <List>
            {map(song => <SongListItem key={song._id} song={song} />, songs)}
          </List>
          <PageNav
            page={page}
            pageCount={songs.length}
            navPrev={navPrev(pageHistory, page, limit)}
            navNext={navNext(pageHistory, page, limit)}
            limit={limit}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    songLoadStatus: state.songLoadStatus,
    songs: state.songs,
    page: state.songPageCounter,
    pageHistory: state.pageHistory
  }
}

const mapActionsToProps = dispatch => {
  return {
    getSongs: (limit, startKey, page) =>
      dispatch(getSongs(limit, startKey, page)),

    navNext: (pageHistory, page, limit) => () => {
      page = page + 1
      const pageInHistory = find(ph => ph.page === page - 1, pageHistory)

      if (pageInHistory) {
        dispatch(getSongs(limit, pageInHistory.next, page))
      }
      dispatch({ type: INCREMENT_SONG_PAGE_COUNTER })
    },

    navPrev: (pageHistory, page, limit) => () => {
      page = page - 1
      const pageInHistory = find(ph => ph.page === page, pageHistory)
      if (pageInHistory) {
        dispatch(getSongs(limit, pageInHistory.current, page))
      }
      dispatch({ type: DECREMENT_SONG_PAGE_COUNTER })
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(Songs)
