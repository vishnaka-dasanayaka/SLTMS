const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Teacher = require('../models/teacherModel');


// @desc   Register new Teacher
// @route  POST/teacher
// @access Public
const registerTeacher = asyncHandler(async (req,res) => {

    const{firstName, lastName, email, teachingArea, about, password} = req.body

    if(!firstName || !lastName || !email || !teachingArea || !about || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check teacher existance
    const teacherExists = await Teacher.findOne({email})

    if(teacherExists){
        res.status(400)
        throw new Error('User already exists !! Try with another email.')
    }

    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //Create teacher
    const teacher = await Teacher.create({
        firstName,
        lastName,
        email,
        teachingArea,
        about,
        password:hashedPassword
    })

    if(teacher){
        res.status(201).json({
            _id:teacher.id,
            firstName:teacher.firstName,
            lastName:teacher.lastName,
            email:teacher.email,
            token: generateJWT(teacher._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Data')
    }
})

// @desc   Authenticate a teacher
// @route  POST/teacher/login
// @access Public
const loginTeacher = asyncHandler(async (req,res) => {

    const {email,password} = req.body

    //checking email
    const teacher = await Teacher.findOne({email})

    if(teacher && (await bcrypt.compare(password,teacher.password))){
        res.json({
            _id:teacher.id,
            firstName:teacher.firstName,
            lastName:teacher.lastName,
            email:teacher.email,
            token: generateJWT(teacher._id)
        })
    } else{
        res.status(400)
        throw new Error('Invalid email or password !!! Try again')
    }
})

// @desc   Get teacher data 
// @route  GET/teacher/me
// @access Private
const getMe = asyncHandler(async (req,res) => {

    res.status(200).json(req.teacher)

})

//get all teachers from DB
const getAllTeachers = asyncHandler(async (req,res) => {
    try {
        const allTeachers = await Teacher.find();
        res.status(200).json(allTeachers) 
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//get one teacher
const getOne = asyncHandler(async(req,res) => {
    try {
        const teacher = await Teacher.findById(req.params.id)
        res.status(200).json(teacher)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})


// Generate JWT
const generateJWT = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

module.exports = {
    registerTeacher,
    loginTeacher,
    getMe,
    getAllTeachers,
    getOne
}