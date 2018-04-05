require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.DBURL}`)

db
  .bulkDocs([
    {
      _id: 'profile_marvin_gardens_34wd323dk449rkd932edi2o2lsldlol',
      firstName: 'Marvin',
      type: 'profile',
      lastName: 'Gardens',
      dob: '1980-01-17',
      gender: 'M',
      contacts: [
        {
          firstName: 'Judy',
          lastName: 'Gardens',
          primaryPhone: '843 222 1212',
          primaryEmail: 'jg1000@hotmail.com'
        }
      ]
    },

    {
      _id: 'profile_steve_martin_334345dsfdsrwer23sdfs',
      firstName: 'Steve',
      type: 'profile',
      lastName: 'Martin',
      dob: '1958-01-30',
      gender: 'M',
      contacts: [
        {
          firstName: 'Minerva',
          lastName: 'Martin',
          primaryPhone: '843 555 1212',
          primaryEmail: 'minerv@gmail.com'
        }
      ]
    }
  ])
  .then(result => console.log('Documents successfully uploaded!', result))
  .catch(err => console.log('Error uploading documents', err))

/*
,
 {
  _id: "profile_steve_martin_334345dsfdsrwer23sdfs",
  firstName: "Steve",
  type: "profile",
  lastName: "Martin",
  dob: "1958-01-30",
  gender: "M",
  contacts: [
    {
      firstName: "Minerva",
      lastName: "Martin",
      primaryPhone: "843 555 1212",
      primaryEmail: "minerv@gmail.com"
    }
  ]
},

*/
