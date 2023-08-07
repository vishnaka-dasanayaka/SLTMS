const Course = require('../models/courseModel');

// @desc    Set a course
// @route   POST/courses
// @access  Private

const setCourse = async(req,res)=>{
    const courseID = req.body.courseID;
    const category = req.body.category;
    const subject = req.body.subject;
    const courseTitle = req.body.courseTitle;
    const fee = req.body.fee;
    const desc = req.body.desc;

    const newCourse = new Course({
        courseID,
        category,
        subject,
        courseTitle,
        fee,
        desc
    });

    newCourse.save();
}

// @desc    Get courses
// @route   GET/courses
// @access  Private

const getCourses = async(req,res)=>{
    try {
        const allCourses = await Course.find({});
        res.send({status:"ok", data:allCourses});
    } catch (error) {
        console.log(error);
    }
}
/*
// @desc    Delete courses
// @route   DELETE/courses
// @access  Private

const deleteCourse = async(req,res)=>{
    const {courseID} = req.body;
    console.log(courseID);
    try {
        await Course.deleteOne({_id:courseID});
    res.send({status:"ok", data:"Deleted"});
    } catch (error) {
        console.log(error);
    }
}

  
// @desc    Get courses
// @route   GET/courses
// @access  Private

const deleteCourse = async(req,res)=>{
    try {
        const allCourses = await Course.find({});
        res.send({status:"ok", data:allCourses});
    } catch (error) {
        console.log(error);
    }
}
*/

module.exports = {
    setCourse,
    getCourses
}

