const request = require ('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?types=address&access_token=pk.eyJ1IjoiYWx1dGZpYWRpIiwiYSI6ImNqdWFvdXhldTA0eXg0NHBidWpteThhcG4ifQ.qCxNrzcETIcnR9m-fEpWCg'
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unabale to connect to location service', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unabale to find Location. try another search.', undefined)
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[0],
                long:response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
            
        }
    })
}

module.exports = geocode
