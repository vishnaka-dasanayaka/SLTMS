const express = require("express");
const router = express.Router();
const Course = require('../models/courseModel');

router.post("/", async (req, res) => {

    const courseID = req.body.courseID;
    const category = req.body.category;
    const subject = req.body.subject;
    const courseTitle = req.body.courseTitle;
    const fee = req.body.fee;
    const desc = req.body.desc;

    const newCourse = new Course({
        courseID,
        category,
        subject,
        courseTitle,
        fee,
        desc
    });

    newCourse.save();
});

router.get('/',async(req,res)=>{
    try {
        const allCourses = await Course.find({});
        res.send({status:"ok", data:allCourses});
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;