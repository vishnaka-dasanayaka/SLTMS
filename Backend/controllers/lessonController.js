const Teacher = require('../models/teacherModel');
const Lesson = require('../models/lessonModel');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const { param } = require('../route/courseRoute');
const upload = multer();

// @desc    Set a lesson
// @route   POST/lessons
// @access  Private

const setLesson = asyncHandler(async (req, res) => {
    if (!req.body.month || !req.body.lessonTitle || !req.body.duration || !req.body.description || !req.body.course) {
        res.status(400)
        throw new Error('All Fields are mandetory')
    }

    const month = req.body.month;
    const lessonTitle = req.body.lessonTitle;
    const duration = req.body.duration;
    const description = req.body.description;
    const teacher = req.teacher.id;
    const course = req.body.course
    const file = ''

    // console.log(req.file);


    const newLesson = new Lesson({
        month,
        lessonTitle,
        duration,
        description,
        teacher,
        course,
        file
    })

    newLesson.save()

    res.status(200).json(newLesson)
})

// @desc    get lessons
// @route   GET/lessons
// @access  Private

const getLessons = asyncHandler(async (req, res) => {
    try {
        const allLessons = await Lesson.find({ teacher: req.teacher.id, course: req.params.id });
        res.status(200).json(allLessons)
    } catch (error) {
        console.log(error);
    }
})

// @desc    update a lesson
// @route   PUT/lessons
// @access  Private

const updateLesson = asyncHandler(async (req, res) => {

    const lesson = await Lesson.findById(req.params.id)

    if (!lesson) {
        res.status(400)
        throw new Error('Lesson not found')
    }

    if (!req.teacher) {
        res.status(400)
        throw new Error('User not found')
    }

    //check for exact owner
    if (lesson.teacher.toString() !== req.teacher.id) {
        res.status(401)
        throw new Error('Unauthorized')
    }

    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedLesson)
})

// @desc    delete a lesson
// @route   DELETE/lessons
// @access  Private

const deleteLesson = asyncHandler(async (req, res) => {
    const lesson = await Lesson.findById(req.params.id)

    if (!lesson) {
        res.status(400)
        throw new Error('Lesson not found')
    }

    if (!req.teacher) {
        res.status(400)
        throw new Error('User not found')
    }

    //check for exact owner
    if (lesson.teacher.toString() !== req.teacher.id) {
        res.status(401)
        throw new Error('Unauthorized')
    }

    const deletedLesson = await Lesson.findByIdAndRemove(req.params.id)

    res.status(200).json(deletedLesson)
})

const getLessonByCourse = asyncHandler(async (req, res) => {
    try {
        const allLessons = await Lesson.find({ course: req.params.id });
        res.status(200).json(allLessons)
    } catch (error) {
        console.log(error);
    }
})

const getSingleLesson = asyncHandler(async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id)
        res.status(200).json(lesson)

    } catch (error) {
        console.log(error);
    }
})


const setQuiz = asyncHandler(async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);

        if (!lesson) { res.status(400).json('lesson not found') }

        for (let index = 0; index < req.body.length; index++) {
            lesson.quiz.push(req.body[index])

            const updatedLesson = await lesson.save();

        }

        res.status(200).json(updateLesson);
    } catch (error) {
        console.log(error);
    }
})

const markQuiz = asyncHandler(async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);

        if (!lesson) { res.status(400).json('not found') }

        let mark = 0;


        for (let index = 0; index < req.body.length; index++) {

            if (req.body[index].value == lesson.quiz[index].correctAnswer) mark++;


        }



        res.status(200).json(mark);
    } catch (error) {
        console.log(error);
    }
})

const setLessonFile = asyncHandler(async (req, res) => {
    try {
        res.status(200).json('kk')
    } catch (error) {
        res.status(400).json(error)
    }
})

const addFile = asyncHandler(async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndUpdate(req.params.id, { file: req.file.filename })
        res.status(200).json(lesson)
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = {
    setLesson,
    getLessons,
    deleteLesson,
    updateLesson,
    getLessonByCourse,
    getSingleLesson,
    setQuiz,
    markQuiz,
    setLessonFile,
    addFile
}