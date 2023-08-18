const express = require("express");
const dotenv = require("dotenv").config();
const cors =  require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");
const Course = require("./models/courseModel");
const Teacher = require("./models/teacherModel");
const {errorHandler} = require('./middleware/errorMiddleware');
mongoose.set('strictQuery',false);

const app = express();
app.use(cors());
app.use(express.json());

// - - connect db via the browser - - 
connectDB();

const port = process.env.PORT || 3003;


// middle ware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes for courses
app.use("/courses", require('./route/courseRoute'));

// Routes for Teacher
app.use("/teachers", require('./route/teacherRoute'));

// Routs for Students
app.use("/students", require('./route/studentRoute'));

// Routs for Lessons
app.use("/lessons", require('./route/lessonRoute'));

// errorHandler
app.use(errorHandler);

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`);
});