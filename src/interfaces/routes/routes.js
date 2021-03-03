const Controller = require('../../controllers/controllers')
const express = require('express')
const router = express.Router()
const Controllers = require('../../controllers/controllers')

router.get('/search/:city', async (req, res) => {
    await Controllers.getCityDetails(req, res)
})
router.get('/', Controllers.get)

router.get("*", (req, res) => {
    return res.status(404).send({
        message: "resource not foud",
    });
});

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: "Internal server error",
    });
});

module.exports = router