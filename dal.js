const {
  allDocs,
  findDocs,
  getDoc,
  addDoc,
  deleteDoc,
  getPage
} = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')

const getSongs = (limit = 5, startkey) => {
  limit = Number(limit)
  const options = startkey
    ? { limit, startkey, endkey: 'song_\ufff0', skip: 1, include_docs: true }
    : { limit, startkey: 'song_', endkey: 'song_\ufff0', include_docs: true }

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

const dal = {
  getSongs,
  getSongsByArtist,
  getSong
}

module.exports = dal
