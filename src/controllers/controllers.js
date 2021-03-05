require('dotenv').config()
const { generateError } = require('../common/errors')
const db = require('../infrastructure/database/db')

const Controller = {}

Controller.upsertSearches = async (req, res) => {
    try {
        const { city } = req.params
        console.log(req.body)
        const { data } = req.body
        const query = `SELECT info FROM searches WHERE city=$1`
        const { rows } = await db.query(query, [city])
        const info = rows[0]?.info ?? { data: [] }

        data.created_at = new Date
        info.data.push(data)

        await db.query(`INSERT INTO searches (city,created_at,updated_at,cont,info) 
                        VALUES ($1,$2,$3,1,$4) 
                        ON CONFLICT (city) 
                        DO UPDATE SET updated_at=$5,cont=searches.cont+1,info=$6`,
            [city, new Date, new Date, info, new Date, info])

        const response = {
            error: false,
            message: 'Data updated with success'
        }
        return res.status(200).send(response)
    } catch (e) {
        return generateError(res, 400, e.message)
    }
}

Controller.getSearches = async (req, res) => {
    try {
        const { popularQtd = 3, latestQtd = 5 } = req.query
        const query = `SELECT city,cont FROM searches ORDER BY cont DESC `
        const query1 = `SELECT city, updated_at FROM searches ORDER BY updated_at DESC `
        const { ["rows"]: array } = await db.query(query)
        const { ["rows"]: array1 } = await db.query(query1)

        const popularSearches = Array(parseInt(popularQtd)).fill().map((el, key) => array[key] ?? '-')
        const latestSearches = Array(parseInt(latestQtd)).fill().map((el, key) => array1[key] ?? '-')

        const response = {
            error: false,
            message: 'Latest searches aquired with success',
            data: { latestSearches, popularSearches }
        }
        return res.status(200).send(response)
    } catch (e) {
        return generateError(res, 400, e.message)
    }
}

module.exports = Controller