const db = require('../infrastructure/database/db')

async function createSearches() {

    await db.query(
        `CREATE TABLE searches(
            id serial PRIMARY KEY,
            info JSON,
            city VARCHAR(150) UNIQUE,
            cont INT ,
            created_at TIMESTAMP,
            updated_at TIMESTAMP
        )`
    )

}

module.exports = { createSearches }