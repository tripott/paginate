# Paginate

React/Redux pagination. Performant express/couch api pagination strategies with allDocs and mango queries.

## Clone and install dependencies

Clone the repo and add dependencies for the react app and express api.

```bash
git clone https://github.com/tripott/paginate.git
cd paginate
cd app
yarn
cd ..
cd api
yarn
```

## Create database

Create a couchdb database and note the url to the couch server and database.

## Environment variables

* Create a **.env** file within your **api** directory.
* Place the following environment variables within the **.env** file.  
  `PORT` is the express api port number.  
  `DBURL` is the urls to the couch server and database.

  ```
  PORT=5000
  DBURL=http://localhost:5984/paginate-songs
  ```

## Load sample songs and index

* Run the following script from the **api** directory to load the couchdb documents into the database.

  ```bash
  cd api
  node load-data
  ```

* Run the following script to create the indexes supporting mango queries.

  ```bash
  node load-indexes
  ```

## Start the API

* Run the following script from the **api** directory to start the api on `localhost:5000`

  ```bash
  yarn start
  ```

  ## Try the API

* Browse to api home route [http://localhost:5000/](http://localhost:5000/)
* By default, you are limited to 5 songs per page. `GET` the first page of 5 songs [http://localhost:5000/songs](http://localhost:5000/songs)

  ```json
  [
    {
      "_id": "song_africa-dub",
      "_rev": "3-1f3f5e0ec2b39a8ca4ffaac5eab77ab3",
      "title": "Africa Dub",
      "artist": "Augustus Pablo",
      "album": "Classic Rockers",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "augustus-pablo_song_africa-dub"
    },
    {
      "_id": "song_coming-in-from-the-cold",
      "_rev": "3-c616a72676a0aa9d44ed938946b2c50f",
      "title": "Coming in from the cold",
      "artist": "Bob Marley and the Wailers",
      "album": "Uprising",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "bob-marley-and-the-wailers_song_coming-in-from-the-cold"
    },
    {
      "_id": "song_fisher-man-dub",
      "_rev": "3-548b7cb62ddc18031547f2c6e3e1561c",
      "title": "Fisher Man Dub",
      "artist": "Lee \"Scratch\" Perry",
      "album": "Essential Sub Masters",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "lee-\"scratch\"-perry_song_fisher-man-dub"
    },
    {
      "_id": "song_funky-kingston",
      "_rev": "3-37bf027099ab73b433306fe6bc25ae24",
      "title": "Funky Kingston",
      "artist": "Toots and the Maytals",
      "album": "Reggae Greats",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "toots-and-the-maytals_song_funky-kingston"
    },
    {
      "_id": "song_karma-police",
      "_rev": "3-8b0084ddb5e8f6a127310bd94e4dc066",
      "title": "Karma Police",
      "artist": "Easy Star All-Stars",
      "album": "Radiodread",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "easy-star-all-stars_song_karma-police"
    }
  ]
  ```

* `GET` the first page of 3 songs using the `limit` query parameter [http://localhost:5000/songs?limit=3](http://localhost:5000/songs?limit=3)

  ```json
  [
    {
      "_id": "song_africa-dub",
      "_rev": "3-1f3f5e0ec2b39a8ca4ffaac5eab77ab3",
      "title": "Africa Dub",
      "artist": "Augustus Pablo",
      "album": "Classic Rockers",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "augustus-pablo_song_africa-dub"
    },
    {
      "_id": "song_coming-in-from-the-cold",
      "_rev": "3-c616a72676a0aa9d44ed938946b2c50f",
      "title": "Coming in from the cold",
      "artist": "Bob Marley and the Wailers",
      "album": "Uprising",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "bob-marley-and-the-wailers_song_coming-in-from-the-cold"
    },
    {
      "_id": "song_fisher-man-dub",
      "_rev": "3-548b7cb62ddc18031547f2c6e3e1561c",
      "title": "Fisher Man Dub",
      "artist": "Lee \"Scratch\" Perry",
      "album": "Essential Sub Masters",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "lee-\"scratch\"-perry_song_fisher-man-dub"
    }
  ]
  ```

* `GET` the second page of 3 songs using `limit` and the `startkey` of the last document in the first page [http://localhost:5000/songs?limit=3&startkey=song_fisher-man-dub](http://localhost:5000/songs?limit=3&startkey=song_fisher-man-dub)

  ```json
  [
    {
      "_id": "song_funky-kingston",
      "_rev": "3-37bf027099ab73b433306fe6bc25ae24",
      "title": "Funky Kingston",
      "artist": "Toots and the Maytals",
      "album": "Reggae Greats",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "toots-and-the-maytals_song_funky-kingston"
    },
    {
      "_id": "song_karma-police",
      "_rev": "3-8b0084ddb5e8f6a127310bd94e4dc066",
      "title": "Karma Police",
      "artist": "Easy Star All-Stars",
      "album": "Radiodread",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "easy-star-all-stars_song_karma-police"
    },
    {
      "_id": "song_let-down",
      "_rev": "3-26535d41e27dbda26b604806f0f7e9ed",
      "title": "Let Down",
      "artist": "Toots and the Maytals",
      "album": "Radiodread",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "toots-and-the-maytals_song_let-down"
    }
  ]
  ```

* `GET` the third page of 3 songs using `limit` and the `startkey` of the last document in the second page [http://localhost:5000/songs?limit=3&startkey=song_let-down](http://localhost:5000/songs?limit=3&startkey=song_let-down)

  ```json
  [
    {
      "_id": "song_pressure-drop",
      "_rev": "3-16b750c175c075d28dc253c85f599380",
      "title": "Pressure Drop",
      "artist": "Toots and the Maytals",
      "album": "Reggae Greats",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "toots-and-the-maytals_song_pressure-drop"
    },
    {
      "_id": "song_sweet-and-dandy",
      "_rev": "3-b1edf23c0d2628c5214924f221b9a4d8",
      "title": "Sweet and Dandy",
      "artist": "Toots and the Maytals",
      "album": "Time Tough the Anthology",
      "type": "song",
      "genre": "reggae",
      "artistSortKey": "toots-and-the-maytals_song_sweet-and-dandy"
    }
  ]
  ```
