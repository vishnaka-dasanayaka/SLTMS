// @desc   Register new Teacher
// @route  POST/teacher
// @access Public
const registerTeacher = (req,res) => {
    res.json({message:'Register a Teacher'})
}

// @desc   Authenticate a teacher
// @route  POST/teacher/login
// @access Public
const loginTeacher = (req,res) => {
    res.json({message:'Login a Teacher'})
}

// @desc   Get teacher data 
// @route  GET/teacher/me
// @access Public
const getMe = (req,res) => {
    res.json({message:'Teacher data display'})
}

module.exports = {
    registerTeacher,
    loginTeacher,
    getMe
}