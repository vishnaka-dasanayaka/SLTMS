const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({

    firstName:{
        type:String,
        required:[true,'Please add a first name ! ']
    },

    lastName:{
        type:String,
        required:[true,'Please add a last name ! ']
    },

    email:{
        type:String,
        required:[true,'Please add a email ! ']
    },

    password:{
        type:String,
        required:[true,'Please add a password ! ']
    },

},

{
    timestamps:true
}
)

module.exports = mongoose.model('Teacher',teacherSchema)