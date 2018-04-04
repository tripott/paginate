require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.DEMO1DBURL}`)
var docs = [
  { _id: 'doc01', name: 'uno' },
  { _id: 'doc02', name: 'dos' },
  { _id: 'doc03', name: 'tres' },
  { _id: 'doc04', name: 'cuatro' },
  { _id: 'doc05', name: 'cinco' },
  { _id: 'doc06', name: 'seis' },
  { _id: 'doc07', name: 'siete' },
  { _id: 'doc08', name: 'ocho' },
  { _id: 'doc09', name: 'nueve' },
  { _id: 'doc10', name: 'diez' },
  { _id: 'doc11', name: 'once' },
  { _id: 'doc12', name: 'doce' },
  { _id: 'doc13', name: 'trece' },
  { _id: 'doc14', name: 'catorce' },
  { _id: 'doc15', name: 'quince' },
  { _id: 'doc16', name: 'dieciseis' },
  { _id: 'doc17', name: 'diecisiete' },
  { _id: 'doc18', name: 'dieciocho' },
  { _id: 'doc19', name: 'diecinueve' },
  { _id: 'doc20', name: 'veinte' }
]

//////////////////////////////////////////////////////////////////
//
//   DEMO 1 - loading the docs and allDocs()
//
//////////////////////////////////////////////////////////////////

db.bulkDocs({ docs: docs }, function(err, response) {
  if (err) {
    return console.log('bulkDocs() err', err)
  }
  // Now, the simplest kind of Pouch query, called allDocs(),
  // doesn't do any pagination by default. As the name implies,
  // it just returns all the docs:
  db.allDocs(function(err, response) {
    if (err) {
      return console.log('allDocs() err', err)
    }
    console.log('allDocs success!!', response)
  })
})
