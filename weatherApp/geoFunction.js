// Getting LA coordinates
const request= require('request')
const chalk = require('chalk')



const geocode =(address, callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'  +encodeURIComponent(address) +  '.json?access_token=pk.eyJ1IjoiaGVsZ2FvbGdhIiwiYSI6ImNrOHMxNnh3MjAwNmkzZG85dGludG9udDEifQ.Zn2aAWkLzCB1snkdZD_7ww'
    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length===0){
            callback (`unable to find locastion, try another search`, undefined)
        }
        else {
            callback(undefined, {
                latituda: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }


    })
}
module.exports= geocode

