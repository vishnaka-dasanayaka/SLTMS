const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');
const Course = require('../models/courseModel');

// @desc   Register a Student
// @route  POST/student
// @access Public
const registerStudent = asyncHandler(async (req,res) => {
    const {firstName, lastName, email, password} = req.body

    //checking wether the fields are empty
    if(!firstName || !lastName || !email || !password){
        res.status(400)
        throw new Error("Fields Cannot be empty")
    }

    //checking student existance
    const studentExists = await Student.findOne({email})

    if(studentExists){
        res.status(400)
        throw new Error('Student already exists! Try with differant email.')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const student =await Student.create({
        firstName,
        lastName,
        email,
        password:hashedPassword
    })

    if(student){
        res.status(201).json({
            _id:student.id,
            firstName:student.firstName,
            lastName:student.lastName,
            email:student.email,
            token:generateJWT(student._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Data !!!')
    }
})

// @desc   Login a Student
// @route  POST/student/login
// @access Public
const loginStudent = asyncHandler(async(req,res) => {
    const {email,password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Fields cannot be empty')
    }

    //checking email
    const student = await Student.findOne({email})

    if(student && (await bcrypt.compare(password,student.password))){
        res.json({
            _id:student.id,
            firstName:student.firstName,
            lastName:student.lastName,
            email:student.email,
            token:generateJWT(student._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

// @desc   Register a Student
// @route  Get/student/me
// @access Private
const getStudent = asyncHandler(async (req,res) => {

    res.status(200).json(req.student)

})


//Generate JWT
const generateJWT = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

module.exports = {
    registerStudent,
    loginStudent,
    getStudent
}