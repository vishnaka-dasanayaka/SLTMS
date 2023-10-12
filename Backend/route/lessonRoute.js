const express = require('express')
const router = express.Router()
const { getSingleLesson, setLesson, getLessons, updateLesson, deleteLesson, getLessonByCourse } = require('../controllers/lessonController')
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, setLesson);
router.route('/:id').get(protect, getLessons).put(protect, updateLesson).delete(protect, deleteLesson);

//get lessons by course ID
router.get('/getlessonsbycourse/:id', getLessonByCourse)
router.get('/getsinglelesson/:id', getSingleLesson);

module.exports = router;