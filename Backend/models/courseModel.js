const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const courseSchema = {

    courseID:{
        type:String,
        required:[true,'Please add an ID']
    },
    category:{
        type:String,
        required:[true,'Please add a category']
    },
    subject:{
        type:String,
        required:[true,'Please add a Subject']
    },
    courseTitle:{
        type:String,
        required:[true,'Please add a course title']
    },
    fee:{
        type:String,
        required:[true,'Please add a fee']
    },
    desc:{
        type:String,
        required:[true,'Please add a desc']
    }
}

const Course = mongoose.model("Course",courseSchema);

module.exports = Course;