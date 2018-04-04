# Paginate

React/Redux pagination.  Performant express/couch api pagination strategies with allDocs and mango queries. 


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

- Create a **.env** file within your **api** directory.  
- Place the following environment variables within the **.env** file.  
  `PORT` is the express api port number.  
  `DBURL` is the urls to teh couch server and database.

  ```
  PORT=5000
  DBURL=http://localhost:5984/paginate-songs
  ```

## Load sample songs and index

- Run the following script from the **api** directory to load the couchdb documents into the database. 

  ```bash
  cd api
  node load-data
  ```
  
- Run the following script to create the index that supports sorting and finding documents with a mango query.

  ```bash
  node load-indexes
  ```

## Start the API

```bash
yarn start
```

