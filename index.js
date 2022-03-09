const express = require('express')
const app = express()
const createUser = require('./public/js/login')

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/login', (req, res) => {
    res.render("login")
})

app.get('/loginFirebase', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})

app.listen(3000, () => {
    console.log("Running on port 3000");
})
