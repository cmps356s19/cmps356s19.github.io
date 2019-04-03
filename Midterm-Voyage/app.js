const express = require('express')
let path = require('path')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const apiroutes = require('./route')
let mongoose = require('mongoose');

const port = 9000;
const hostname = 'localhost'

const app = express()
app.use(express.static(path.join(__dirname, 'views')));



let database = 'mongodb://localhost:27017/finaldb'

//adding and overwriting the promise in mongoose:
mongoose.Promise = global.Promise;

mongoose.connect(database);

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cookieparser())
app.use('/', apiroutes)




app.listen(port, () => {
    console.log(`App is running @ http://${hostname}:${port}`)
})
