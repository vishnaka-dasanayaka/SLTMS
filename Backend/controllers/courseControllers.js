const Course = require('../models/courseModel');

// @desc    Set a course
// @route   POST/courses
// @access  Private

const setCourse = (req,res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error("Text area should be filled");
    }

    res.status(200).json({message:"Set Goal"});
    /*const courseID = req.body.courseID;
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

    newCourse.save();*/
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

// @desc    Delete courses
// @route   DELETE/courses
// @access  Private

const updateCourse = (req,res)=>{
    res.status(200).json({message:`Updated goal ${req.params.id}`})
}


// @desc    Get courses
// @route   GET/courses
// @access  Private

const deleteCourse = (req,res)=>{
    res.status(200).json({message:`Deleted goal ${req.params.id}`})
}


module.exports = {
    setCourse,
    getCourses,
    updateCourse,
    deleteCourse
}

