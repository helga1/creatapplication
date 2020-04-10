const geocode= require('./geoFunction.js')
const forecast = require ('./forecast.js')


forecast(37.8267, -122.4233, (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)

})




geocode('Boston', (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})



