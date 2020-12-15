const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');
const passwordValidation = require('../middleware/passwordValidation')
const router = express.Router();

router.post('/signup', passwordValidation, usersCtrl.signUp);
router.post('/login', usersCtrl.login);
router.delete('/deleteAccount/:id', usersCtrl.deleteAccount);

module.exports = router;