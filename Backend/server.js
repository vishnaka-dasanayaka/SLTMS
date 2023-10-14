const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const path = require("path");
const Stripe = require("stripe")(process.env.SECRET_KEY);
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const { default: mongoose } = require("mongoose");
const Course = require("./models/courseModel");
const Teacher = require("./models/teacherModel");
const { errorHandler } = require('./middleware/errorMiddleware');
mongoose.set('strictQuery', false);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(express.json());
app.use(express.static('public'))


// - - connect db via the browser - - 
connectDB();

const port = process.env.PORT || 3003;

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});

// app.post('/payment', async (req, res) => {
//     let status, error;

//     const {token, amount} = req.body;
//     console.log(token);
// })

app.post('/payment', async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });
