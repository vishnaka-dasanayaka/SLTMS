const express = require('express')
const router = express.Router()
const {setLesson, getLessons, updateLesson, deleteLesson} = require('../controllers/lessonController')

router.route('/').get(getLessons).post(setLesson);
router.route('/:id').put(updateLesson).delete(deleteLesson);

module.exports = router;