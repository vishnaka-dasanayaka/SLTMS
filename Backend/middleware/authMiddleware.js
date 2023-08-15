const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Teacher = require('../models/teacherModel')
const Student = require('../models/studentModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get teacher from the token
            req.teacher = await Teacher.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

const protectStudent = asyncHandler(async (req,res,next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get the token
            token = req.headers.authorization.split(' ')[1]

            //verify the token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            //get the student from the token
            req.student = await Student.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, No token')
    }
})

module.exports = {protect, protectStudent}