import React from 'react'
import FileInput from '../../components/file-input'

import { Link } from 'react-router-dom'
import { SET_PROFILE_X, SET_PROFILE } from '../../constants'
import { createProfile, getProfile } from '../../action-creators/profiles'

import { TextField, Button } from 't63'
import { connect } from 'react-redux'
import { toUpper, compose, path, head, pathOr } from 'ramda'

class ProfileForm extends React.Component {
  componentDidMount() {
    // const id = pathOr(null, [
    //   'props','match','params','id'
    // ], this)
    // if (id) {
    //   this.props.dispatch(getProfile(id))
    // } else {
    //   this.props.dispatch({type: SET_PROFILE, payload: {firstName:'', lastName: '', dob: '', gender: '', photo: '', profiles: []}})
    // }
  }
  render() {
    const props = this.props

    return (
      <div className="flex flex-column justify-start w-100 avenir">
        <header className="h3 flex justify-between items-center bg-light-green">
          <div className="ml2">
            <Link
              to={props._id ? '/profiles/' + props._id : '/profiles'}
              className="link black-70"
            >
              cancel
            </Link>
          </div>
          <div className="f4">Healthy.IO</div>
          <div className="mr2">save</div>
        </header>
        <main className="overflow-scroll ph2 black-70">
          <h2 className="f4 f2-ns">{props._id ? 'Edit' : 'New'} Profile</h2>
          <form className="ph2" onSubmit={props.submitProfile(props.history)}>
            <TextField
              value={props.firstName}
              onChange={props.handleFirstName}
              name="First Name"
              helptxt="First Name"
            />
            <TextField
              value={props.lastName}
              onChange={props.handleLastName}
              name="Last Name"
            />
            <TextField
              value={props.dob}
              onChange={props.handleDOB}
              name="Birth Date"
              placeholder="MM/DD/YYYY"
            />
            <div className="measure mt2">
              <label className="f6 b db mb2">Gender</label>
              <div className="flex justify-center">
                <div
                  className={`ba br2 pa2 b--black black mr1 ${
                    props.gender === 'M' ? 'bg-green' : 'bg-white'
                  }`}
                  onClick={props.handleGender('M')}
                >
                  Male
                </div>
                <div
                  className={`ba br2 pa2 b--black ${
                    props.gender === 'F' ? 'bg-green' : 'bg-white'
                  } black ml1`}
                  onClick={props.handleGender('F')}
                >
                  Female
                </div>
              </div>
            </div>
            <div className="measure mt2">
              <label className="f6 b db mb2">Photo (optional)</label>
              <div className="flex justify-center pv4">
                <img
                  className="h3 w3 ba pa2 br2 mr2"
                  src={
                    props.photo
                      ? props.photo
                      : "https://placehold.it/64x64?text='photo'"
                  }
                />
                <FileInput className="pv3 ml2" onChange={props.handlePhoto}>
                  <Button
                    type="button"
                    className="bg-green ba br2 b--light-green black"
                  >
                    Upload
                  </Button>
                </FileInput>
              </div>
            </div>
            <div className="">
              <Button className="w-100 bg-green ba br2 b--light-green">
                Save Profile
              </Button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    _id: state.profile._id,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    dob: state.profile.dob,
    gender: state.profile.gender,
    photo: state.profile.photo
  }
}

const mapActionsToProps = dispatch => {
  const doDispatch = (field, value) => {
    dispatch({
      type: SET_PROFILE_X + toUpper(field),
      payload: value
    })
  }
  return {
    dispatch,
    submitProfile: history => e => {
      e.preventDefault()
      dispatch(createProfile(history))
    },
    handleFirstName: e => doDispatch('FIRSTNAME', e.target.value),
    handleLastName: e => doDispatch('LASTNAME', e.target.value),
    handleDOB: e => doDispatch('DOB', e.target.value),
    handleGender: gender => e => doDispatch('GENDER', gender),
    handlePhoto: (e, results) => {
      const blob = compose(path(['target', 'result']), head, head)(results)
      doDispatch('PHOTO', blob)
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ProfileForm)
