const express = require('express')
const router = express.Router()
const { setLesson, getLessons, updateLesson, deleteLesson, getLessonByCourse } = require('../controllers/lessonController')
const { protect } = require('../middleware/authMiddleware');
const upload = require('../multerConfig'); // Import the multer configuration


router.route('/').post(protect, upload.single('file'), setLesson);
router.route('/:id').get(protect, getLessons).put(protect, updateLesson).delete(protect, deleteLesson);

//get lessons by course ID
router.get('/getlessonsbycourse/:id', getLessonByCourse)

module.exports = router;