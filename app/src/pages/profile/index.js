import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Button } from 't63'
import { listProfiles } from '../../action-creators/profiles'
import { Link } from 'react-router-dom'
import { map, propOr } from 'ramda'

import MainHeader from '../../components/main-header'
import MainFooter from '../../components/main-footer'

class Profiles extends React.Component {
  componentDidMount() {
    this.props.dispatch(listProfiles)
  }
  render() {
    const listProfiles = propOr([], 'profiles', this.props)

    return (
      <div className="flex flex-column justify-between vh-100 w-100 avenir">
        <MainHeader title="Healthy.IO" target="/profiles/new" />
        <main className="vh-100 ph2 overflow-y-scroll">
          <h2>Profiles</h2>
          <List>{map(li, listProfiles)}</List>
        </main>
        <MainFooter />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles,
    session: state.session
  }
}

const connector = connect(mapStateToProps)

export default connector(Profiles)

const li = profile => {
  return (
    <ListItem
      right={
        <Link to={`/profiles/${profile._id}`}>
          <Button>Show</Button>
        </Link>
      }
      left={<img className="h2 w2 br-100" src={profile.photo} />}
    >
      {`${profile.firstName} ${profile.lastName}`}
    </ListItem>
  )
}
