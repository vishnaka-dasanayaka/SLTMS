const Course = require('../models/courseModel');
const Teacher = require('../models/teacherModel');
const asyncHandler = require('express-async-handler');

// @desc    Set a course
// @route   POST/courses
// @access  Private
const setCourse = asyncHandler(async(req,res)=>{

    if(!req.body.courseID){
        res.status(400)
        throw new Error("Text area should be filled");
    }

    
    const courseID = req.body.courseID;
    const category = req.body.category;
    const subject = req.body.subject;
    const courseTitle = req.body.courseTitle;
    const fee = req.body.fee;
    const desc = req.body.desc;
    const teacher = req.teacher.id;

    const newCourse = new Course({
        courseID,
        category,
        subject,
        courseTitle,
        fee,
        desc,
        teacher
    });

    newCourse.save();

    res.status(200).json(newCourse);
})

// @desc    Get courses
// @route   GET/courses
// @access  Private

const getCourses = asyncHandler(async(req,res)=>{
    try {
        const allCourses = await Course.find({teacher:req.teacher.id});
        res.status(200).json(allCourses)
    } catch (error) {
        console.log(error);
    }
})

// @desc    Update courses
// @route   PUT/courses
// @access  Private

const updateCourse = asyncHandler(async(req,res)=>{

    const course = await Course.findById(req.params.id)

    if(!course){
        res.status(400)
        throw new Error('Course not found')
    }


    //check for teacher
    if(!req.teacher){
        res.status(401)
        throw new Error('User not found')
    }

    //check for exact owner
    if(course.teacher.toString() !== req.teacher.id){
        res.status(401)
        throw new Error('Unauthorized')
    }

    const updatedCourse = await Course.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedCourse)
})

  

// @desc    Delete courses
// @route   DELETE/courses
// @access  Private

const deleteCourse = asyncHandler(async(req,res)=>{

    const course = await Course.findById(req.params.id);

    if(!course){
        res.status(400)
        throw new Error('Relavent course is not found')
    }


    //check for teacher
    if(!req.teacher){
        res.status(401)
        throw new Error('User not found')
    }

    //check for exact owner
    if(course.teacher.toString() !== req.teacher.id){
        res.status(401)
        throw new Error('Unauthorized')
    }

    const deletedCourse = await Course.findByIdAndRemove(req.params.id)


    res.status(200).json(deletedCourse)
})


//get all courses for the dashboard
const getAllCourses = asyncHandler(async (req,res) => {
    try {
        const allCourses = await Course.find();
        res.status(200).json(allCourses) 
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//get courses of single teacher

const getTeachersCourse = asyncHandler(async (req,res) => {
    try {
       const courses = await Course.find({teacher:req.params.id})
       res.status(200).json(courses)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})


module.exports = {
    setCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    getAllCourses,
    getTeachersCourse
}

