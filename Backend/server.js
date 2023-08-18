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


//delete a course

app.post('/deleteCourse', async(req,res)=>{

    const {courseID} = req.body;
   console.log(courseID);
    try {
        await Course.deleteOne({_id:courseID});
    res.send({status:"ok", data:"Deleted"});
    } catch (error) {
        console.log(error);
    }
});

// errorHandler
app.use(errorHandler);

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`);
});