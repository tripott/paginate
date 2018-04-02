require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.LOCALDEMO1DBURL}`)

//////////////////////////////////////////////////////////////////
//
//   DEMO 2 - passing the options object to allDocs()
//
//////////////////////////////////////////////////////////////////

const options = { startkey: 'doc05', endkey: 'doc06' }

db.allDocs(options, function(err, response) {
  if (err) {
    return console.log('allDocs() err', err)
  }
  console.log('allDocs success!!', response)
})
