require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(`${process.env.DBURL}`)

db
  .createIndex({
    index: {
      fields: ['artistSortKey']
    }
  })
  .then(function(result) {
    console.log('successfully created index on artistSortKey property')
  })
  .catch(function(err) {
    console.log(err)
  })
