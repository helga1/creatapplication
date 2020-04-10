// callback bunction is a function that we provide as an argument to another function
//const names= ['sfsfsdf','fssfsd','dd']
//const shortnames= names.filter(name => {
//    return name.length<5
/*
})

const geocode = (address, callback)=>{
  setTimeout(() =>{
        const data= {
            lattitude:0,
            longetude:0
        }
        callback(data)
  },2000)
}
geocode('Pilly', (data)=>{
    console.log(data)
})
*/
// Goal: Mess around with the callback pattern
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const addsum= (a,b, callback ) =>{
    setTimeout(()=> {
        let sum= a+b
    callback(sum)
}, 2000)
}

addsum(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
