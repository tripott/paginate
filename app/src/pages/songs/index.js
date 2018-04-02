import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../../action-creators/songs'
import SongListItem from '../../components/SongListItem'
import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import { map } from 'ramda'
class Songs extends React.Component {
  componentDidMount() {
    this.props.getSongs(5)
  }

  render() {
    const props = this.props
    if (props.songListState === 'loading') {
      return <CircularProgress color="secondary" />
    }

    if (props.songListState === 'ready') {
      return (
        <div>
          <List>{map(s => <SongListItem song={s} />, props.songs)}</List>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    songListState: state.songListState,
    songs: state.songs
  }
}
const mapActionsToProps = dispatch => {
  return {
    getSongs: (limit, startKey) => dispatch(getSongs(limit, startKey))
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Songs)
