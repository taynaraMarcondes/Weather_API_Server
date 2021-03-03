const dotenv = require('dotenv')
const axios = require('axios')
const { errorMessages, generateError } = require('../common/errors')
dotenv.config()

const Controller = {}

Controller.getCityDetails = async (req, res) => {
    try {
        const { city } = req.params
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`)
        if (currentWeather.status === 200) {
            const data = currentWeather.data

            const cityDetails = {
                city: data?.name ?? city,
                country: data?.sys?.country ?? '-',
                temperature: data?.main?.temp ?? '-',
                humidity: data?.main?.humidity ?? '-',
                currentWeather: data?.weather[0]?.main ?? '-',
            }
            return res.status(200).send(cityDetails)
        } else {
            throw currentWeather
        }

    } catch (e) {
        console.log(e)
        return generateError(res, 400, e.message)
    }
}


module.exports = Controller