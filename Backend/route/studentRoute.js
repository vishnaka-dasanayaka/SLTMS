const express = require('express');
const router = express.Router();
const {registerStudent,loginStudent,getStudent} = require('../controllers/studentController');

router.post('/',registerStudent);
router.post('/login',loginStudent);
router.get('/me',getStudent);

module.exports = router