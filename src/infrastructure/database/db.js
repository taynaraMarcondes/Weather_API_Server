require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    database: process.env.DB_NAME
})

async function query(query, param) {
    const client = await pool.connect()
    try {
        return await client.query(query, param)
    } finally {
        client.release()
    }
}

pool.on('connect', () => {
    console.log('Database default connection is open')
})

pool.on('error', err => {
    console.error(`Unexpected error `, err)
})

module.exports = { query }