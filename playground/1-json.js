const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)










const a= 'https://stage.omaze.com/collections/covid?oa_h=bd49d6203f7f590b28a8ad9bc0c0d8af&utm_term=collections/covid&utm_medium=paidfb&'
console.log(a.length)