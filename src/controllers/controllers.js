const Controller = {}

Controller.getCityDetails = async (req, res) => {
    const currentWeather = await axios(`api.openweathermap.org/data/2.5/weather?q=${req}&units=metric&appid=1c931d8004094ad110ed18c2f81e3ad3`)
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