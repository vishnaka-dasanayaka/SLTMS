const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const Course = require("../models/courseModel");

// @desc   Register a Student
// @route  POST/student
// @access Public
const registerStudent = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    //checking wether the fields are empty
    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Fields Cannot be empty");
    }

    //checking student existance
    const studentExists = await Student.findOne({ email });

    if (studentExists) {
        res.status(400);
        throw new Error("Student already exists! Try with differant email.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const student = await Student.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    if (student) {
        res.status(201).json({
            _id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            token: generateJWT(student._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid Data !!!");
    }
});

// @desc   Login a Student
// @route  POST/student/login
// @access Public
const loginStudent = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Fields cannot be empty");
    }

    //checking email
    const student = await Student.findOne({ email });

    if (student && (await bcrypt.compare(password, student.password))) {
        res.json({
            _id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            token: generateJWT(student._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid Credentials");
    }
});

// @desc   Register a Student
// @route  Get/student/me
// @access Private
const getStudent = asyncHandler(async (req, res) => {
    res.status(200).json(req.student);
});

// Enroll to courses
const enrollCourse = asyncHandler(async (req, res) => {
    try {
        const student = await Student.findById(req.params.sId);

        if (!student) {
            res.status(404);
            throw new Error("Student not found");
        }

        const course = await Course.findById(req.params.cId);

        if (!course) {
            res.status(404);
            throw new Error("Course not found");
        }

        // Check if the course is already enrolled
        const isCourseEnrolled = student.enrolledCourses.find((course) => {
            return course._id == req.params.cId;
        });

        if (isCourseEnrolled) {
            res.status(400)
            throw new Error("Course is already enrolled");
        }

        // Push the course object to the enrolledCourses array
        student.enrolledCourses.push(course);

        const updatedStudent = await student.save();

        res.status(200).json(updatedStudent);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message });
    }
});

// unenroll a course
const unenrollCourse = asyncHandler(async (req, res) => {
    try {
        // Find the student by ID
        const student = await Student.findById(req.params.sId);

        if (!student) {
            res.status(404)
            throw new Error("Student not found")
        }

        const course = await Course.findById(req.params.cId);

        if (!course) {
            res.status(404);
            throw new Error("Course not found");
        }

        // Check if the course ID is already enrolled
        const isCourseEnrolled = student.enrolledCourses.find((course) => {
            return course._id == req.params.cId;
        });

        if (!isCourseEnrolled) {
            res.status(400).json("Course is not enrolled");
        }

        // Pull (remove) the course ID from the enrolledCourses array
        student.enrolledCourses.pull(course);

        const updatedStudent = await student.save();

        res.status(200).json(updatedStudent);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message });
    }
});

//get enrolled courses
const getEnrolledCourses = asyncHandler(async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const enrolledCourses = student.enrolledCourses;

        console.log(enrolledCourses);

        res.status(200).json(enrolledCourses);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Generate JWT
const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = {
    registerStudent,
    loginStudent,
    getStudent,
    enrollCourse,
    unenrollCourse,
    getEnrolledCourses,
};
