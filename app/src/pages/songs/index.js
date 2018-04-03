import React from 'react'
import { connect } from 'react-redux'
import { getSongs, navNext } from '../../action-creators/songs'
import SongListItem from '../../components/SongListItem'
import PageNav from '../../components/PageNav'
import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import { map, last, propOr } from 'ramda'

class Songs extends React.Component {
  componentDidMount() {
    //http://localhost:3000/?limit=3&startkey=song_fisher-man-dub
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const limit = params.get('limit') || 3
    const startkey = params.get('startkey') || null
    //console.log('componentDidMount startKey:', startkey)

    this.props.getSongs(limit, startkey)
  }

  render() {
    const {
      songs,
      prevStartKey,
      navPrev,
      navNext,
      history,
      location
    } = this.props

    const params = new URLSearchParams(location.search)
    const limit = params.get('limit') || 3
    const currentUrlStartKey = params.get('startkey') || null

    const nextStartKey = propOr(null, '_id', last(songs))
    console.log('render startKey:', currentUrlStartKey)
    console.log('render nextStartKey:', nextStartKey)
    console.log('render prevStartKey:', prevStartKey)

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
            currentUrlStartKey={currentUrlStartKey}
            prevStartKey={prevStartKey}
            nextStartKey={nextStartKey}
            navPrev={navPrev(history, limit, prevStartKey)}
            navNext={navNext(history, limit, nextStartKey, nextStartKey)}
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
    prevStartKey: state.prevStartKey
  }
}
const mapActionsToProps = dispatch => {
  return {
    getSongs: (limit, startKey) => dispatch(getSongs(limit, startKey)),
    navNext: (history, limit, startkey, nextStartKey) => e => {
      console.log('navNext action called')
      dispatch(navNext(history, limit, startkey, nextStartKey))
    },
    navPrev: (history, limit, prevStartKey) => e => {
      const prevStartKeyQuery = prevStartKey ? `&startkey=${prevStartKey}` : ''
      history.push(`/?limit=${limit}${prevStartKeyQuery}`)
      history.go()
    }
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

*/
