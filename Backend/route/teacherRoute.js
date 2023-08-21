const express = require('express');
const router = express.Router();
const {registerTeacher,loginTeacher,getMe,getAllTeachers, getOne} = require('../controllers/teacherController');
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerTeacher)
router.post('/login', loginTeacher)
router.get('/me', protect, getMe)
//get all teachers from DB
router.get('/allTeachers',getAllTeachers);
//get one teacher
router.get('/getOne/:id',getOne)

module.exports = router