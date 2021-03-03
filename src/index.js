const express = require('express')
const cors = require('cors')
const routes = require('./interfaces/routes/routes')

const app = express()


app.use(cors())
app.options('*', cors())

app.use('/', routes)

app.listen(8080, () => console.log('Server is running!'))