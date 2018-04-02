const { getSongs, getSongsByArtist, getSong } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr } = require('ramda')

module.exports = app => {
  app.get('/songs', (req, res) => {
    const limit = pathOr(5, ['query', 'limit'], req)
    const startkey = pathOr(undefined, ['query', 'startkey'], req)

    getSongs(limit, startkey)
      .then(songs => {
        console.log('success!', songs)
        return res.send(songs)
      })
      .catch(err => console.log(err))
  })

  app.get('/songs-by-artist', (req, res) => {
    const limit = pathOr(5, ['query', 'limit'], req)
    const startkey = pathOr(undefined, ['query', 'startkey'], req)

    getSongsByArtist(limit, startkey)
      .then(songs => {
        console.log('success!', songs)
        return res.send(songs)
      })
      .catch(err => console.log(err))
  })

  app.get('/songs/:id', (req, res) => {
    getSong(req.params.id).then(resource => res.send(resource))
  })
}
