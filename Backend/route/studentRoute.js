const express = require('express');
const router = express.Router();
const {registerStudent,loginStudent,getStudent} = require('../controllers/studentController');
const {protectStudent} = require('../middleware/authMiddleware')

router.post('/',registerStudent);
router.post('/login',loginStudent);
router.get('/me',protectStudent,getStudent);

module.exports = router