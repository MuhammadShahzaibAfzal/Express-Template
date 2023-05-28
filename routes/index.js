const studentRegister = require('../controllers/auth/studentRegister');

const router = require('express').Router();

router.post('/register/student',studentRegister);

module.exports = router;