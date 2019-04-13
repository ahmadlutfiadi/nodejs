//load library express
const express =  require('express')

const app = express()

console.log(__dirname)
console.log(__filename)

//app.com
app.get('', (req, res)=>{
    res.send('<h1>Weather Home</h1>')
})

//app.com/help
app.get('/help', (req, res) => {
    res.send([{
        name: 'Ahmad',
        age: 25
    },{
        name:'Upi',
        age: 22
    }])
})

//app.com/about
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
}
)
//app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Nice',
        location: 'Home'
    })
})


//start the server (dev prot 3000)
app.listen(3000, ()=>{
    console.log('Server is UP on port 3000')
})