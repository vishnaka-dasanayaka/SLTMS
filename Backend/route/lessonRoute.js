const express = require('express')
const router = express.Router()
const { getTeacher, addFile, markQuiz, setLessonFile, setQuiz, getSingleLesson, setLesson, getLessons, updateLesson, deleteLesson, getLessonByCourse } = require('../controllers/lessonController')
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Lessons')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }

})

const upload = multer({
    storage: storage
})

router.route('/').post(protect, setLesson);
router.route('/:id').get(protect, getLessons).put(protect, updateLesson).delete(protect, deleteLesson);

//get lessons by course ID
router.get('/getlessonsbycourse/:id', getLessonByCourse)
router.get('/getsinglelesson/:id', getSingleLesson);
router.post('/setquiz/:id', setQuiz);
router.post('/markquiz/:id', markQuiz);

router.post('/setlessonfile/:id', setLessonFile);

router.put('/addfile/:id', upload.single('file'), addFile)

router.get('/getTeacher/:id', getTeacher);

module.exports = router;