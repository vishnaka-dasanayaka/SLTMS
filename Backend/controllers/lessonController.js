const Course = require('../models/courseModel');
const Teacher = require('../models/teacherModel');
const Lesson = require('../models/lessonModel');
const asyncHandler = require('express-async-handler');



// @desc    Set a lesson
// @route   POST/lessons
// @access  Private

const setLesson = asyncHandler(async(req,res) => {
    if(!req.body.month || !req.body.lessonTitle || !req.body.duration || !req.body.description || !req.body.file || !req.body.course ){
        res.status(400)
        throw new Error('All Fields are mandetory')
    }

    const month = req.body.month;
    const lessonTitle = req.body.lessonTitle;
    const duration = req.body.duration;
    const description = req.body.description;
    const file = req.body.file;
    const teacher = req.teacher.id;
    const course = req.body.course

    const newLesson = new Lesson({
        month,
        lessonTitle,
        duration,
        description,
        file,
        teacher,
        course
    })

    newLesson.save()

    res.status(200).json(newLesson)
})

// @desc    get lessons
// @route   GET/lessons
// @access  Private

const getLessons = asyncHandler(async(req,res) => {
    try {
        const allLessons = await Lesson.find({teacher:req.teacher.id});
        res.status(200).json(allLessons)
    } catch (error) {
       console.log(error); 
    }
})

// @desc    update a lesson
// @route   PUT/lessons
// @access  Private

const updateLesson = asyncHandler(async(req,res) => {
    
    const lesson = await Lesson.findById(req.params.id)

    if(!lesson){
        res.status(400)
        throw new Error('Lesson not found')
    }

    if(!req.teacher){
        res.status(400)
        throw new Error('User not found')
    }

    //check for exact owner
    if(lesson.teacher.toString() !== req.teacher.id){
        res.status(401)
        throw new Error('Unauthorized')
    }

    const updatedLesson =  await Lesson.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedLesson)
})

// @desc    delete a lesson
// @route   DELETE/lessons
// @access  Private

const deleteLesson = asyncHandler(async(req,res) => {
    const lesson = await Lesson.findById(req.params.id)

    if(!lesson){
        res.status(400)
        throw new Error('Lesson not found')
    }

    if(!req.teacher){
        res.status(400)
        throw new Error('User not found')
    }

    //check for exact owner
    if(lesson.teacher.toString() !== req.teacher.id){
        res.status(401)
        throw new Error('Unauthorized')
    }

    const deletedLesson = await Lesson.findByIdAndRemove(req.params.id)

    res.status(200).json(deletedLesson)
})

module.exports = {
    setLesson,
    getLessons,
    deleteLesson,
    updateLesson
}