//const square = function (x) {
 //   return x*x

//}

//const square =(x)=>{
 //   return x*x
//}

//const square = (x) => x*x


//console.log(square(4))
/*const event ={
    name:'Day',
    //now setting the method inside the object
    printGuestList: function () {
        console.log('Guest list '+ this.name)

    }
}
event.printGuestList()

 */
/*const event ={
    name:'Day',
    printGuestList: ()=> {
        console.log('Guest list '+ this.name)
        //will not work! because , it does not have access to this. bacause we use arrow function.
        //Arrow function does not work with method properties when we want to access this.
}
}
event.printGuestList()
 */
//what is standart function features?

 const event ={
    name:'Day',
     guestList:['Andrew', 'Mike', 'Olga'],
    printGuestList() {
        console.log('Guest list '+ this.name)

        this.guestList.forEach((guest) => {
            console.log(guest+ ' is a guest '+ this.name)

        })

    }
}
event.printGuestList()
