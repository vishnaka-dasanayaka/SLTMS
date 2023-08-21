const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");
const Course = require("./models/courseModel");
const Teacher = require("./models/teacherModel");
const { errorHandler } = require('./middleware/errorMiddleware');
mongoose.set('strictQuery', false);

const app = express();
app.use(cors());
app.use(express.json());

// - - connect db via the browser - - 
connectDB();

const port = process.env.PORT || 3003;


// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes for courses
app.use("/courses", require('./route/courseRoute'));

//get all courses with no JWT
app.get('/getAllCourses', async (req, res) => {
    try {
        const allCourses = await Course.find();
        res.status(200).json(allCourses)

    } catch (error) {
        res.status(400)
        throw new Error('some error occured')
    }
})

// Routes for Teacher
app.use("/teachers", require('./route/teacherRoute'));

//get all teachers with no JWT
app.get('/getAllTeachers', async (req, res) => {
    try {
        const allTeachers = await Teacher.find();
        res.status(200).json(allTeachers)

    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// Routs for Students
app.use("/students", require('./route/studentRoute'));

// Routs for Lessons
app.use("/lessons", require('./route/lessonRoute'));

// errorHandler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});