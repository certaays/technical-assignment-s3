const { query } = require('express')
const express = require('express')

const app = express()
const port = 3000
const hewanRoute = require('express').Router()

const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
  ]
app.use(express.json())

//middleware logger
const logger = function(req, res, next){
    console.log("server run");
    console.log("this is logger");
    next()
}
app.use(logger)

//ERROR HANDLING
const errorHandle = function(err, req, res, next){
    res.status(500).json(err)
}

//ROUTE FOR HOME
app.get('/', (req, res) =>{
    res.send("Home")
})

//NESTED ROUTE
app.use("/hewan", hewanRoute)
//GET ALL
hewanRoute.get('/', (req, res) => {
    res.send({
        message: "Success get data Pet",
        hewan: hewan
    })
})

//MIDDLEWARE HEWAN
const hewanMiddleware = function (req, res, next){
    const index = hewan.findIndex((hewan) => hewan.id === +req.params.id)
    if(index === -1){
        next({
            message: "hewan dengan id tersebut tidak ditemukan"
        })        
    }else{
        next()
    }
}

//GET BY ID
hewanRoute.get('/:id', hewanMiddleware, (req, res) => {
    const hewanId = hewan.filter((hewan) => hewan.id === Number(req.params.id))
    res.send({
        message: "Success get data Pet",
        hewanFilter: hewanId
    })
})

//MIDDLEWARE POSTCHECKER UNTUK MEMERIKSA SPESIES HEWAN
const postChecker = function(req, res, next){
    if(req.body['spesies'] === 'kucing' || req.body['spesies'] === 'anjing' || req.body['spesies'] === 'kelinci')
    {
        next()
    }else{
        next({
            message: "Spesies not valid"
        })
    }
}

//POST
hewanRoute.post('/', postChecker, (req, res) => {
        const newHewan = {
            id: hewan.length + 1,
            nama: req.body['nama'],
            spesies: req.body['spesies']
        }    

        hewan.push(newHewan)
        res.status(201).send({
            message: "Success adding data Pet",
            hewan: hewan
         })
})

//PUT
hewanRoute.put('/:id', postChecker, hewanMiddleware, (req, res) => {
    const body = req.body
    const index = hewan.findIndex((hewan) => hewan.id === +req.params.id)
    const updateHewan = {
        id: +req.params.id,
        ...body
    }

    hewan[index] = updateHewan
    res.status(201).send({
        message: "Success updated",
        hewan: hewan
    })
}
)

//DELETE
hewanRoute.delete('/:id', hewanMiddleware, (req, res) => {
    const index = hewan.findIndex((hewan) => hewan.id === +req.params.id)
    const deleteHewan = hewan.splice(index, 1)

    res.status(200).send({
        message: "Success deleted",
        deletedHewan: deleteHewan
    })
})

//USE MIDDLEWARE ERROR HANDLING
app.use(errorHandle)
app.listen(port, () => {
    console.log("server is listening on port ", port)
})