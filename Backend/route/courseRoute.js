const express = require("express");
const router = express.Router();
const { getSingleCourse, getCourses, setCourse, updateCourse, deleteCourse,getAllCourses, getTeachersCourse } = require("../controllers/courseControllers");
const {protect} = require('../middleware/authMiddleware');


router.route('/').get(protect,getCourses).post(protect,setCourse);
router.route('/:id').put(protect,updateCourse).delete(protect,deleteCourse);
router.get('/allCourses',getAllCourses);
router.get('/teachersCourses/:id',getTeachersCourse)

router.get('/getsinglecourse/:id',getSingleCourse)


module.exports = router;