//object property shorthand

const name ="Ahmad"
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Jakarta'
}

console.log(user)

//object destructuring, to access value as individual
const product = {
    label: 'Mouse',
    price: 150000,
    stock: 200,
    salePrice: undefined,
    rating:3
}

// <array>:<new array>, <array>:<valur>
const {label:productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

//destructure in function
const transaction = (type, {label, stock})=> {
    console.log(type,label,stock)
    
}
transaction('order', product)