import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Button } from 't63'
import { getProfile } from '../../action-creators/profiles'

import ContactHeader from '../../components/contact-header'
import MainFooter from '../../components/main-footer'
import { map } from 'ramda'

class Profile extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.id
    this.props.dispatch(getProfile(profileId))
  }

  render() {
    return (
      <div className="flex flex-column justify-between vh-100 w-100 avenir bg-lightest-blue">
        <ContactHeader
          title="HEALTHY.IO"
          auth={this.props.auth}
          target={`/profiles/${this.props.profile._id}/edit`}
          targetName="edit"
        />
        <main className="vh-100">
          <h4 className="tc silver f6 pv2 fw5">Profile</h4>

          <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img
                src={
                  this.props.profile.photo
                    ? this.props.profile.photo
                    : 'https://placehold.it/100x100?text=No Photo'
                }
                className="br-100 h4 w4 dib ba b--black-05 pa2"
                title="Missing profile photo"
              />
              <h1 className="f3 mb2">
                {this.props.profile.firstName} {this.props.profile.lastName}
              </h1>
              <h2 className="f5 fw4 gray mt0">{this.props.profile.dob}</h2>
              <h2 className="f5 fw4 gray mt0">
                {this.props.profile.gender === 'F' ? 'Female' : ' Male'}
              </h2>
              <Button className="w-100 b--red ba br2 bg-light-red">
                Remove Profile
              </Button>
            </div>
          </article>
        </main>
        <MainFooter />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
  console.log('profile', state)
}

const mapActionsToProps = dispatch => {
  return {
    dispatch
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Profile)
