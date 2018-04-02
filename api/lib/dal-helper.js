require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')
const { pluck, prop } = require('ramda')
const db = new PouchDB(`${process.env.LOCALDBURL}`)

const allDocs = options =>
  db.allDocs(options).then(result => pluck('doc', result.rows))

const findDocs = options => db.find(options).then(prop('docs'))

const bulkUpdate = docs => db.bulkDocs(docs)

const getDoc = id => db.get(id)
const addDoc = doc => db.put(doc)
const deleteDoc = id => db.get(id).then(doc => db.remove(doc))
const updateDoc = doc => {
  return db.put(doc)
}

const dalHelper = {
  allDocs,
  findDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  bulkUpdate
}

module.exports = dalHelper
