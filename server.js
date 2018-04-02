require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const songs = require('./routes/songs')
const home = require('./routes/home')

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

home(app)
songs(app)

app.listen(PORT, () => console.log('API UP!! on ', PORT))
