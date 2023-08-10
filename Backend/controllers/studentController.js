// @desc   Register a Student
// @route  POST/student
// @access Public
const registerStudent = (req,res) => {
    res.json({message:'Register a Student'})
}

// @desc   Login a Student
// @route  POST/student/login
// @access Public
const loginStudent = (req,res) => {
    res.json({message:'Login a Student'})
}

// @desc   Register a Student
// @route  Get/student/me
// @access Public
const getStudent = (req,res) => {
    res.json({message:'Display student data'})
}

module.exports = {
    registerStudent,
    loginStudent,
    getStudent
}