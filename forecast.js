  const request = require('request')

  const forecast = (latitude, longitude, callback) => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&appid=7e14c86b6631b53d4d360bfd6bd19595&units=metric'
          //console.log(latitude, longitude)
          //console.log(url);
      request({ url: url, json: true }, (error, response) => {

          if (error) {
              callback('unable to connect to weather services!', undefined)
          } else if (response.body.error) {
              callback('Unable to find Location', undefined)
          } else {
              callback(undefined, 'It is currently ' + response.body.main.temp + ' degree celsius with humdity ' + response.body.main.humidity)
          }
      })

  }

  module.exports = forecast