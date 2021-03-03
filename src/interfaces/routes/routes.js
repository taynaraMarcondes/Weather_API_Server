const Controller = require('../../controllers/controllers')
const express = require('express')
const router = express.Router()
const { errorMessages, generateError } = require('../../common/errors')
const Controllers = require('../../controllers/controllers')

router.get('/search/:city', Controllers.getCityDetails)

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