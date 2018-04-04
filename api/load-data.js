require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.DBURL}`)

db
  .bulkDocs([
    {
      title: 'Sweet and Dandy',
      artist: 'Toots and the Maytals',
      album: 'Time Tough the Anthology',
      type: 'song',
      genre: 'reggae',
      _id: 'song_sweet-and-dandy',
      artistSortKey: 'toots-and-the-maytals_song_sweet-and-dandy'
    },
    {
      title: 'Funky Kingston',
      artist: 'Toots and the Maytals',
      album: 'Reggae Greats',
      type: 'song',
      genre: 'reggae',
      _id: 'song_funky-kingston',
      artistSortKey: 'toots-and-the-maytals_song_funky-kingston'
    },
    {
      title: 'Pressure Drop',
      artist: 'Toots and the Maytals',
      album: 'Reggae Greats',
      type: 'song',
      genre: 'reggae',
      _id: 'song_pressure-drop',
      artistSortKey: 'toots-and-the-maytals_song_pressure-drop'
    },
    {
      title: 'Karma Police',
      artist: 'Easy Star All-Stars',
      album: 'Radiodread',
      type: 'song',
      genre: 'reggae',
      _id: 'song_karma-police',
      artistSortKey: 'easy-star-all-stars_song_karma-police'
    },
    {
      title: 'Let Down',
      artist: 'Toots and the Maytals',
      album: 'Radiodread',
      type: 'song',
      genre: 'reggae',
      _id: 'song_let-down',
      artistSortKey: 'toots-and-the-maytals_song_let-down'
    },
    {
      title: 'Fisher Man Dub',
      artist: 'Lee "Scratch" Perry',
      album: 'Essential Sub Masters',
      type: 'song',
      genre: 'reggae',
      _id: 'song_fisher-man-dub',
      artistSortKey: 'lee-"scratch"-perry_song_fisher-man-dub'
    },
    {
      title: 'Coming in from the cold',
      artist: 'Bob Marley and the Wailers',
      album: 'Uprising',
      type: 'song',
      genre: 'reggae',
      _id: 'song_coming-in-from-the-cold',
      artistSortKey: 'bob-marley-and-the-wailers_song_coming-in-from-the-cold'
    },
    {
      title: 'Africa Dub',
      artist: 'Augustus Pablo',
      album: 'Classic Rockers',
      type: 'song',
      genre: 'reggae',
      _id: 'song_africa-dub',
      artistSortKey: 'augustus-pablo_song_africa-dub'
    }
  ])
  .then(result => console.log('Documents successfully uploaded!', result))
  .catch(err => console.log('Error uploading documents', err))
