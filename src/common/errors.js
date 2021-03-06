const errorMessages = {
    resourceNotFound: "resource not found",
    internalServerError: "Internal server error"
}

const generateError = (res, status, msg) => res.status(status).send({
    error: true,
    message: msg
})

module.exports = { errorMessages, generateError }