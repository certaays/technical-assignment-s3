const express = require('express')
const sessions = require('express-session')
const cookieParser = require('cookie-parser')

const myusername = 'user1'
const mypassword = 'mypassword'
let  session;

const app = express()
app.get(express.json)
app.use('/login', express.static('views'))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(sessions({
    secret: "sysjDkadhaQhW1aks0ahnA",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000}
}))

app.get('/', (req, res) => {
    session = req.session
    if(session.userID === myusername){
        const message = 
        `
        <h1>Hello, ${myusername}</h1>
        <a href="/logout">Logout</a>
        `
        res.send(message)
    }
    else
    {
        res.redirect('/login')
    }
})

app.post('/user', (req, res) => {    
    const username = req.body.username
    const password = req.body.password

    session = req.session
    if(session.userID === username){
        res.redirect('/')
    }
    else if(username === myusername && password === mypassword){
        session.userID = username
        res.redirect('/')
    }
    else{
        const message = 
        `
        <h1>Login fail</h1>
        <a href="/">Login Again</a>
        `
        res.send(message)
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    const message = 
        `
        <h1>Logout success!</h1>
        <a href="/">Login</a>
        `
    res.send(message)
})

app.listen(3000, () => { console.log("App is running on port 3000") })