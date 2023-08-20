const express = require('express')
const router = express.Router()
const {setLesson, getLessons, updateLesson, deleteLesson} = require('../controllers/lessonController')
const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect,setLesson);
router.route('/:id').get(protect,getLessons).put(protect,updateLesson).delete(protect,deleteLesson);

module.exports = router;