const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()

dotenv.config()
app.use(bodyParser.json())
const accessTokenSecret = process.env.TOKEN_SECRET

const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
  ];

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password    

    const user = users.find(user => { return (user.username === username) && (user.password === password) })

    if(user){
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret)
        res.json({ accessToken }) 
    }
    else{
        res.send('username or password incorrect')
    }
})

app.listen(3000, () => {
    console.log("listening to port 3000");
})