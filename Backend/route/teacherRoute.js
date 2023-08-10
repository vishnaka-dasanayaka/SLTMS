const express = require('express');
const router = express.Router();
const {registerTeacher,loginTeacher,getMe} = require('../controllers/teacherController');

router.post('/', registerTeacher)
router.post('/login', loginTeacher)
router.get('/me', getMe)

module.exports = router