const request= require('request')
const chalk= require('chalk')

const forecast= (lattitude, longetude, callback) => {const url = 'http://api.weatherstack.com/current?access_key=20ccafaa6d62d809b8508025162ebc76&query='+lattitude+ ',' + longetude+ '&units=f'

    request({url:url, json: true}, (error, response)=> {
        if (error){
            callback('there is no internet connection')
        }
        else  if (response.body.error){
            callback(`the error is ${response.body.error.type}`)
        }

        else {


            //const data= JSON.parse(response.body)
            //console.log(response.body.current)

            callback(chalk.green.bold.inverse(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees. And  feels like ${response.body.current.feelslike} degrees.`))
        }

    })



}

module.exports = forecast