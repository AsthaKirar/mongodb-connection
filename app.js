require("./config/db.config")
const express = require('express')
const app = express()
const userModel = require("./models/user.model")
app.use("view engine","ejs")
// app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/create',async function (req, res) {
    const user = await userModel.create({
        name:"Astha",
        email:"astha@gmail.com",
        age:23,
    })
    res.send('user');
  })
  
app.listen(3000)
