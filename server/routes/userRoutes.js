const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/api/auth/register', userController.register);
router.post('/api/auth/activation', userController.activate);
router.post('/api/auth/signing', userController.signing);
router.post('/api/auth/access', userController.access);
router.post('/api/auth/forgot_pass', userController.forgot);
router.post('/api/auth/reset_pass', auth, userController.reset);
router.get('/api/auth/user', auth, userController.info);
router.patch('/api/auth/user_update', auth, userController.update);
router.get('/api/auth/signout', userController.signout);
router.post('/api/auth/google_signing', userController.google);

module.exports = router;