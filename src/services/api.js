const axios = require('axios')

const api = axios.create({
    baseUrl: 'http://localhost:8080'
})

module.exports = api