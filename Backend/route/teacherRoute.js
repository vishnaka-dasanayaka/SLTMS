const express = require('express');
const router = express.Router();
const { registerTeacher, loginTeacher, getMe, getAllTeachers, getOne, uploadPhoto, getProfilePicture } = require('../controllers/teacherController');
const { protect } = require('../middleware/authMiddleware')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/TeacherPhoto')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }

})

const upload = multer({
    storage: storage
})

router.post('/', registerTeacher)
router.post('/login', loginTeacher)
router.get('/me', protect, getMe)
//get all teachers from DB
router.get('/allTeachers', getAllTeachers);
//get one teacher
router.get('/getOne/:id', getOne)

//upload profile picture
router.put('/upload/:id', upload.single('file'), uploadPhoto);

//get profile picture
router.get('/getProfilePicture/:id', getProfilePicture);


module.exports = router