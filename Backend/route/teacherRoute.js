const express = require('express');
const router = express.Router();
const {registerTeacher,loginTeacher,getMe} = require('../controllers/teacherController');
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerTeacher)
router.post('/login', loginTeacher)
router.get('/me', protect, getMe)

module.exports = router