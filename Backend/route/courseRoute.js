const express = require("express");
const router = express.Router();
const { getCourses, setCourse } = require("../controllers/courseControllers");

router.post("/",setCourse);

router.get('/',getCourses);


module.exports = router;