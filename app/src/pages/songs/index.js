import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../../action-creators/songs'
import SongListItem from '../../components/SongListItem'

import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import { map } from 'ramda'

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
    const { songs } = this.props

    if (this.props.songLoadStatus === 'loading') {
      return <CircularProgress color="secondary" />
    }

    if (this.props.songLoadStatus === 'ready') {
      return (
        <div>
          <List>
            {map(song => <SongListItem key={song._id} song={song} />, songs)}
          </List>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    songLoadStatus: state.songLoadStatus,
    songs: state.songs,
    page: state.songPageCounter
  }
}

const mapActionsToProps = dispatch => {
  return {
    getSongs: (limit, startKey, page) =>
      dispatch(getSongs(limit, startKey, page))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(Songs)
