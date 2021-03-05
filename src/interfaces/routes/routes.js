const express = require('express')
const router = express.Router()
const { errorMessages } = require('../../common/errors')
const Controller = require('../../controllers/controllers')

router.post('/weather/:city', Controller.upsertSearches)

router.get('/weather', Controller.getSearches)

router.get("*", (req, res) => {
    return res.status(404).send({
        message: errorMessages.resourceNotFound,
    })
})

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: errorMessages.internalServerError,
    })
})

module.exports = router