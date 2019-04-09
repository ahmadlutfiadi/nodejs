// const square = function (x){
//     return x * x
// }
//version 2
// const square = (x) => {
//     return x * x
// }

//version3
// const square = (x) => x * x

// console.log(square(4))

const event = {
    name: 'BI meeting',
    guestList:['Ahmad','Lutfi','Adi','Jen'],
    printGuestList() {
        console.log('Guest List for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()