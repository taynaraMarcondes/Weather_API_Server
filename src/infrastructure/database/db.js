require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'db_test'
})

pool.on('connect', () => {
    console.log('Database default connection is open')
})

pool.on('error', err => {
    console.error(`Unexpected error `, err)
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}