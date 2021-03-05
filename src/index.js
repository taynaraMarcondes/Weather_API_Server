const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./interfaces/routes/routes')

const app = express()


app.use(cors())
app.options('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', routes)

app.listen(8080, () => console.log('Server is running!'))