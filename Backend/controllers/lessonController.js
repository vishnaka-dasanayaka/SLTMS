const Course = require('../models/courseModel');
const Teacher = require('../models/teacherModel');
const Lesson = require('../models/lessonModel');


// @desc    Set a lesson
// @route   POST/lessons
// @access  Private

const setLesson = (req,res) => {
    res.json('lesson is set')
}

// @desc    get lessons
// @route   GET/lessons
// @access  Private

const getLessons = (req,res) => {
    res.json('get lessons')
}

// @desc    update a lesson
// @route   PUT/lessons
// @access  Private

const updateLesson = (req,res) => {
    res.json(`${req.params.id} lesson is updated`)
}

// @desc    delete a lesson
// @route   DELETE/lessons
// @access  Private

const deleteLesson = (req,res) => {
    res.json(`${req.params.id} lesson is deleted`)
}

module.exports = {
    setLesson,
    getLessons,
    deleteLesson,
    updateLesson
}