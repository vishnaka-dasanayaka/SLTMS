const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({

    enrolledCourses: [{
        
            type: Object,
            ref: 'Course'
          
    }],

    firstName:{
        type:String,
        required:[true,'Please enter a first name']
    },

    lastName:{
        type:String,
        required:[true,'Please enter a last name']
    },

    email:{
        type:String,
        required:[true,'Please enter an emai;'],
        unique: true
    },

    password:{
        type:String,
        required:[true,'Please enter a password']
    },

},
{
    timestamps:true
})

module.exports = mongoose.model('Student',studentSchema)