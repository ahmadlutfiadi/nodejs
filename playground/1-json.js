const fs = require ('fs')

//create json
// const book ={
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// console.log(bookJSON)
// const bookJSONP = JSON.parse(bookJSON)
// console.log(bookJSONP.title)

//read file
const dataBuffer = fs.readFileSync('1-json.json')
//convert to string
const dataJSON = dataBuffer.toString()
//convert to js object
const data = JSON.parse(dataJSON)
data.name = 'Ahmad'
data.age = 25
//console.log(data.name)
fs.writeFileSync('1-json.json', JSON.stringify(data))