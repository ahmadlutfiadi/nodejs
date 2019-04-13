//http request
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//const yargs = require('yargs')

const address = process.argv[2]

if (!address) {
    console.log('Please provide the address')
} else {
    geocode(address, (error, {lat, long, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(lat,long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log('Location', location)
            console.log('Data', forecastData)
        })
    })

}
/*const url = "https://api.darksky.net/forecast/1a24631014982f1ce620226efddf8d2c/-6.1754,106.8272?units=si"

request({
    url: url,
    json: true
}, (error, response) => {
    if (error) {
        console.log("Unabale to connect to weather service")
    }  else if (response.body.error) {
        console.log(response.body.error)
    } else {
        const temperature = response.body.currently.temperature
        const preciprob = response.body.currently.precipProbability
        console.log(response.body.daily.data[0].summary + " It is currently " + temperature + " degrees out. There is a " + preciprob * 100 + "% chance of rain")
    }
})
*/