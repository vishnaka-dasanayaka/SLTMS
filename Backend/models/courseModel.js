const mongoose = require("mongoose");

const courseSchema = {

    courseID:String,
    category:String,
    subject:String,
    courseTitle:String,
    fee:String,
    desc:String
}

const Course = mongoose.model("Course",courseSchema);

module.exports = Course;