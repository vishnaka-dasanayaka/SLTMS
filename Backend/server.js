const express = require("express");
const dotenv = require("dotenv").config();
const cors =  require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");
const Course = require("./models/courseModel");
const Teacher = require("./models/teacherModel");
mongoose.set('strictQuery',false);

const app = express();
app.use(cors());
app.use(express.json());

// - - connect db via the browser - - 
connectDB();

const port = process.env.PORT || 3003;

// GET and POST courses
app.use("/courses", require('./route/courseRoute'));


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


// Teacher 

// sign Up a teacher
app.post("/newTeacher", async (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const teachingArea = req.body.teachingArea;
    const about = req.body.about;
    const password = req.body.password;

    const newTeacher = new Teacher({
        firstName,
        lastName,
        email,
        teachingArea,
        about,
        password
    });

    newTeacher.save();
});


/* ************** */

app.get('/goals',(req,res)=>{
    res.status(200).json({message:"Get all goals"})
})

/* ************** */

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`);
});