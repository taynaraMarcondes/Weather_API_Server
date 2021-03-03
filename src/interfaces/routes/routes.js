const api = require('../../services/api')
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

async function get() {
    try {
        const res = await api.get('/')
        console.log(res)
        return console.log('conseguiu!')
    } catch (e) {
        console.error(e)
    }
}


get()

module.exports = get