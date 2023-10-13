const mongoose = require('mongoose')

const lessonSchema = mongoose.Schema({

    quiz: {
        type: Array
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
    },

    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Course'
    },

    month: {
        type: String,
        required: [true, 'Please add an ID']
    },
    lessonTitle: {
        type: String,
        required: [true, 'Please add a category']
    },
    duration: {
        type: String,
        required: [true, 'Please add a Subject']
    },
    description: {
        type: String,
        required: [true, 'Please add a course title']
    },
    file: {
        type: String,
        //required:[true,'Please add a fee']
    }
},
    {
        timestamps: true
    })

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;