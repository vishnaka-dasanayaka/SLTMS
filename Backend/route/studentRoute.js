const express = require('express');
const router = express.Router();
const { registerStudent, loginStudent, getStudent, enrollCourse, unenrollCourse, getEnrolledCourses } = require('../controllers/studentController');
const { protectStudent } = require('../middleware/authMiddleware')

router.post('/', registerStudent);
router.post('/login', loginStudent);
router.get('/me', protectStudent, getStudent);

//enroll to courses
router.put('/enrollCourse/:sId/:cId', enrollCourse);
//unenroll a course
router.put('/unenrollCourse/:sId/:cId', unenrollCourse);

//get enrolled courses
router.get('/getenrolledcourses/:id', getEnrolledCourses);

module.exports = router