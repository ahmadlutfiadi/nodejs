const request = require ('request')
const forecast = (lat,long, callback) => {
    const url = 'https://api.darksky.net/forecast/1a24631014982f1ce620226efddf8d2c/'+lat+','+long+'?units=si'
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        }  else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, {
                temperature:response.body.currently.temperature,
                preciprob: response.body.currently.precipProbability,
                summary: response.body.daily.data[0].summary
                
            })
        }
    })
}

module.exports = forecast