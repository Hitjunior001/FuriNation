const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("dotenv").config();


const app = express();
const router = express.Router();

const firebaseAuthController = require('../controllers/auth-controller');

// SignUp
router.post('/api/register', firebaseAuthController.registerUser);

//SignIn
router.post('/api/login', firebaseAuthController.loginUser);


module.exports = router;

