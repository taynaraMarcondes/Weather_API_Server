const Controller = {}
const dotenv = require('dotenv')
const axios = require('axios')
dotenv.config()

Controller.getCityDetails = async (req, res) => {
    try {
        const { city } = req.params
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`)
        console.log('aqui', currentWeather)
        if (currentWeather.status === 200) {
            const data = currentWeather.data
            const cityDetails = {
                city: data?.name ?? city,
                country: data?.sys?.country ?? '-',
                temperature: data?.main?.temp ?? '-',
                humidity: data?.main?.humidity ?? '-',
                currentWeather: data?.weather?.main ?? '-',
            }
            return res.status(200).send(cityDetails)
        } else {
            throw currentWeather
        }

    } catch (e) {
        console.log(e)
        //return res.status(e.status).send(e.data.message)
        return res.send(e)
    }
}

Controller.get = async (req, res) => {
    return res.send('Conseguiu!')
}

module.exports = Controller