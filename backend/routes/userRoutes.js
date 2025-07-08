const { Router } = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = Router();

// Register
router.post('/register', userController.register);
// Login
router.post('/login', userController.login);
// Get profile (protected)
router.get('/profile', auth, userController.getProfile);

module.exports = router;
