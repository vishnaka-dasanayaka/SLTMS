const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({

    firstName:{
        type:String,
        required:[true,'Please enter a first name']
    },

    lastName:{
        type:String,
        required:[true,'Please enter a last name']
    },

    ElementInternals:{
        type:String,
        required:[true,'Please enter an emai;']
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