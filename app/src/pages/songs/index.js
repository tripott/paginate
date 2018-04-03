import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../../action-creators/songs'
import SongListItem from '../../components/SongListItem'
import PageNav from '../../components/PageNav'
import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import { map, find, props } from 'ramda'
import {
  INCREMENT_SONG_PAGE_COUNTER,
  DECREMENT_SONG_PAGE_COUNTER
} from '../../constants'

class Songs extends React.Component {
  componentDidMount() {
    console.log('componentDidMount!')
    // http://localhost:3000/?limit=3&startkey=song_fisher-man-dub
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const limit = params.get('limit') || 3

    // let startkey = null
    // console.log('componentDidMount startKey:', startkey)
    if (this.props.page === 1) {
      let startkey = null
      this.props.getSongs(limit, startkey, 1)
    }
  }
  render() {
    const { songs, page, navPrev, navNext, pageHistory } = this.props

    const params = new URLSearchParams(this.props.location.search)
    const limit = params.get('limit') || 3
    //const currentUrlStartKey = params.get('startkey') || null

    // const nextStartKey = propOr(null, '_id', last(songs))
    // console.log('render startKey:', currentUrlStartKey)
    // console.log('render nextStartKey:', nextStartKey)
    // console.log('render prevStartKey:', prevStartKey)

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
            {...this.props}
            page={page}
            pageCount={songs.length}
            navPrev={navPrev}
            navNext={navNext(pageHistory, page, limit)}
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
      // console.log('pageHistory', pageHistory)
      page = page + 1
      console.log('navNext page', page)

      var pageInHistory = undefined

      //if (page === 1) {
      //  pageInHistory = find(ph => ph.page === page, pageHistory)
      //} else {
      pageInHistory = find(ph => ph.page === page - 1, pageHistory)
      //}

      // console.log(`page ${page} pageInHistory ${JSON.stringify(pageInHistory)}`)

      if (pageInHistory) {
        console.log('navNext page is in page history', pageInHistory)
        dispatch(getSongs(limit, pageInHistory.next, page))
      }
      dispatch({ type: INCREMENT_SONG_PAGE_COUNTER })
    },
    navPrev: () => dispatch({ type: DECREMENT_SONG_PAGE_COUNTER })
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Songs)

/*
<PageNav
  {...this.props}
  prevStartKey={prevStartKey}
  startkey={startkey}
  lastPageItem={last(songs)}
  lastPageItemPropName="_id"
  limit={limit}
/>
<PageNav
  {...this.props}
  currentUrlStartKey={currentUrlStartKey}
  prevStartKey={prevStartKey}
  nextStartKey={nextStartKey}
  navPrev={navPrev(history, limit, prevStartKey)}
  navNext={navNext(history, limit, nextStartKey, nextStartKey)}
/>
*/
