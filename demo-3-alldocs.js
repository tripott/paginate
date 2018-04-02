require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.LOCALDEMO1DBURL}`)

//////////////////////////////////////////////////////////////////
//
//   DEMO 3 - both startkey and endkey are inclusive,
//     the matching value itself is included in the results.
//
//////////////////////////////////////////////////////////////////

const options = { startkey: 'doc05' }
//const options = {endkey : 'doc15'}
//const options = {startkey : 'doc05', endkey: 'doc15'}

// skip tells PouchDB how many documents to skip from its normal starting point.
// E.g. {skip : 5} gives us:
// const options = {skip : 5}

// Whereas limit does the opposite:
//  it cuts off documents from the end and only gives us the first 15 docs:
// const options = {limit : 15}

//When skip and limit are used together,
// limit applies after skip.
//  const options = {skip : 5, limit : 10}

db.allDocs(options, function(err, response) {
  if (err) {
    return console.log('allDocs() err', err)
  }
  console.log('allDocs success!!', response)
})
