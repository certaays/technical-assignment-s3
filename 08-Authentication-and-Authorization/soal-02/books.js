const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()

dotenv.config()
app.use(bodyParser.json())
const accessTokenSecret = process.env.TOKEN_SECRET

const books = [
    {
      "author": "Robert Martin",
      "country": "USA",
      "language": "English",
      "pages": 209,
      "title": "Clean Code",
      "year": 2008
    },
    {
      "author": "Dave Thomas & Andy Hunt",
      "country": "USA",
      "language": "English",
      "pages": 784,
      "title": "The Pragmatic Programmer",
      "year": 1999
    },
    {
      "author": "Kathy Sierra, Bert Bates",
      "country": "USA",
      "language": "English",
      "pages": 928,
      "title": "Head First Java",
      "year": 2003
    },
];

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (authHeader) {
        const token = authHeader.split(' ')[1]

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403)
            }

            req.user = user
            next()
        })
    } else {
        res.sendStatus(401)
    }
}

app.get('/books', authenticateJWT, (req, res) => {
    res.json(books)
})

app.post('/books', authenticateJWT, (req, res) => {
    const role = req.user.role

    if (role !== 'admin') {
        return res.sendStatus(403)
    }

    const book = req.body
    books.push(book)

    res.send('Book added successfully')
})

app.listen(4000, () => {
    console.log("listening to port 4000")
})