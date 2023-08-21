const express = require("express");
const router = express.Router();
const { getCourses, setCourse, updateCourse, deleteCourse,getAllCourses } = require("../controllers/courseControllers");
const {protect} = require('../middleware/authMiddleware');


router.route('/').get(protect,getCourses).post(protect,setCourse);
router.route('/:id').put(protect,updateCourse).delete(protect,deleteCourse);
router.get('/allCourses',getAllCourses);


module.exports = router;