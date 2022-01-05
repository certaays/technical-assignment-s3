const mongoose = require('mongoose')

const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    location: {
        type: String
    }
})

const instructorModel = mongoose.model('instructors', instructorSchema)
module.exports = instructorModel