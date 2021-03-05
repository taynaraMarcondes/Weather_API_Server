require('dotenv').config()
const { Pool, Client } = require('pg')
const { createSearches } = require('../models/searches')

const pool = new Pool({
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    database: "postgres"
})

async function createDatabase() {
    const client = await pool.connect()
    try {
        await client.query(`CREATE DATABASE ${process.env.DB_NAME}`)
    } finally {
        client.release()
    }
}

async function migrate() {
    await createDatabase()
    await createSearches()
}

migrate()