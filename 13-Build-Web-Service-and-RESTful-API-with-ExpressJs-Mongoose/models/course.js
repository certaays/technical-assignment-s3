const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructors",
        required: true
    },
    ScheduleDateTime: {
        type: Date,
        required: true
    }
})

const courseModel = mongoose.model('Courses', courseSchema)
module.exports = courseModel