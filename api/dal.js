const {
  allDocs,
  findDocs,
  getDoc,
  addDoc,
  deleteDoc,
  getPage
} = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')
const pkGenerator = require('./lib/pkGen')
const { prop, assoc } = require('ramda')
const uuid = require('uuid')
const getSongs = (limit = 5, startkey) => {
  limit = Number(limit)
  const options = startkey
    ? { limit, startkey, endkey: 'song_\ufff0', skip: 1, include_docs: true }
    : { limit, startkey: 'song_', endkey: 'song_\ufff0', include_docs: true }

  return allDocs(options)
}

const getProfiles = (limit = 5, startkey) => {
  limit = Number(limit)
  const options = startkey
    ? { limit, startkey, endkey: 'profile_\ufff0', skip: 1, include_docs: true }
    : {
        limit,
        startkey: 'profile_',
        endkey: 'profile_\ufff0',
        include_docs: true
      }

  return allDocs(options)
}

const getSongsByArtist = (limit = 5, startkey) => {
  limit = Number(limit)
  const options = startkey
    ? {
        selector: {
          artistSortKey: { $gt: startkey }
        },
        sort: ['artistSortKey'],
        limit
      }
    : {
        selector: {
          artistSortKey: { $gte: null }
        },
        sort: ['artistSortKey'],
        limit
      }
  return findDocs(options)
}

const getSong = resourceId => getDoc(resourceId)

const createProfile = profile => {
  // _id: profile_marvin_gardens_34wd323dk449rkd932edi2o2lsldlol
  profile = assoc('type', 'profile', profile)
  const id = pkGenerator(
    'profile_',
    `${prop('firstName', profile)} ${prop('lastName', profile)} ${uuid.v4()}`
  )
  profile = assoc('_id', id, profile)
  profile = assoc('type', 'profile', profile)
  return addDoc(profile)
}

const getProfile = id => getDoc(id)

const dal = {
  getSongs,
  getSongsByArtist,
  getSong,
  getProfiles,
  getProfile,
  createProfile
}

module.exports = dal
