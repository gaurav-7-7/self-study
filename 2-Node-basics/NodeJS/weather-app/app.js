const req = require('request')
const url = 'http://api.weatherstack.com/current?access_key=ef7b57b3069e02c1f149e4c64bef3c24&query=37.8267,-122.4233';

// req({ url: url, json: true }, (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
// })

// Geocoding 
// we'll convert the input location into its long-latitude using another api and pass this data along with our HTTP request to get the data of a specif location on user input 

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

req({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})