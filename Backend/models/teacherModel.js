const mongoose = require("mongoose");

const teacherSchema = {

   firstName:String,
   lastName:String,
   email:String,
   teachingArea:String,
   about:String,
   password:String
}

const Teacher = mongoose.model("Teacher",teacherSchema);

module.exports = Teacher;