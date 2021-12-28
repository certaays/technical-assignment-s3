const express = require('express')
const res = require('express/lib/response')
const { Hewan, sequelize } = require('./models/index')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/hewan', async(req, res) => {
    await Hewan.findAll().then(result => {
        res.json(
            {
                message : "OK",
                data : result
            }
        )
    }) 
})

app.get('/hewan/:id', async(req, res) => {
    const id = req.params.id
    Hewan.findOne({
        where : {
            id : id
        }
    }).then(result => (
        res.send({
            message : "OK",
            data : result
        })
    )).catch(err => {
        res.send({
            message : err
        })
    })
})

app.post('/hewan', async(req, res) => {
    const body = req.body
    const data = {
        nama : body['nama'],
        namaSpesies : body['nama_spesies'],
        umur : body['umur']
    }

    try{
        await Hewan.create(data)
        res.status(201).send(data)
    } catch (err){
        res.status(500).send({
            message : err.message
        })
    }
})

app.patch('/hewan/:id', async(req, res) => {
    try{
        const id = req.params.id
        const body = req.body
        const data = {
            nama : body['nama'],
            namaSpesies : body['nama_spesies'],
            umur : body['umur']
        }

        await Hewan.update(data, {
            where : {
                id : id
            }
        })
        res.status(200).json({
            message : "Updated"
        })
    } 
    catch(err){
        res.status(500).send({
            message : err
        })
    }
}) 

app.delete('/hewan/:id', async(req, res) => {
    try{
        const id = req.params.id
        await Hewan.destroy({
            where : {
                id : id
            }
        })

        res.status(200).json({
            message : "Deleted"
        })
    } catch(err){
        res.status(500).json({
            message : err
        })
    }
})

function connect () {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .then(() => {
            Hewan.sync().then(() => console.log('table Hewan created') )
        })
        .catch(err => {
            console.log('Unable to connect to the databases: ', err)
        })
}

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
    connect()
})