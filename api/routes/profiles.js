const { getProfile, createProfile, getProfiles } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr, propOr, pick } = require('ramda')

module.exports = app => {
  app.get('/profiles/:id', (req, res) => {
    getProfile(req.params.id).then(resource => res.send(resource))
  })

  app.get('/profiles', (req, res) => {
    const limit = pathOr(5, ['query', 'limit'], req)
    const startkey = pathOr(undefined, ['query', 'startkey'], req)

    getProfiles(limit, startkey)
      .then(profiles => res.send(profiles))
      .catch(err => console.log(err))
  })

  app.post('/profiles', (req, res, next) => {
    const body = propOr({}, 'body', req)

    createProfile(
      pick(
        ['firstName', 'lastName', 'dob', 'gender', 'contacts', 'photo'],
        body
      )
    ).then(newProfileResponse => res.send(newProfileResponse))
  })
}
