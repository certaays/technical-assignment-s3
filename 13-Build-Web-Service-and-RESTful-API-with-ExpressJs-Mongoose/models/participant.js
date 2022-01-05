const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        maxlength: 50
    },
    phone: {
        type: Number,
        maxlength: 13
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }
})

const participantModel = mongoose.model('Participants', participantSchema)
module.exports = participantModel