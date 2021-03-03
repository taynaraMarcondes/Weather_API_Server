const axios = require('axios')
const Controllers = require('../../controllers/controllers')

/*async function getCityDetails() {
    try {
        const req = await axios.get('/')
        console.log('ali')
        await Controllers.getCityDetails(req, res)
        console.log('aqui')
    } catch (e) {
        console.error(e)
    }
}*/

axios.get('/')
    .then(() => {
        return console.log('foi')
    })
    .catch((e) => {
        console.error(e)
    })

module.exports = axios