const express = require('express')
const cors = require('cors')
//const axios = require('axios')

const app = express()

app.use(cors())

//app.get('/', async())

app.listen(8080, () => console.log('Server is running!'))