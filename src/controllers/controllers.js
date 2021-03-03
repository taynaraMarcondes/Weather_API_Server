const Controller = {}

Controller.getCityDetails = async (req, res) => {
    const currentWeather = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${req}&units=metric&appid=${API_KEY}`)
    const cityDetails = {
        city: currentWeather.name,
        country: currentWeather.sys.country,
        temperature: currentWeather.main.temp,
        humidity: currentWeather.main.humidity,
        currentWeather: currentWeather.weather.main,
    }
    return res.send(cityDetails)
}

module.exports = Controller