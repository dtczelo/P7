const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');
const router = express.Router();

router.post('/signup', usersCtrl.signUp);
router.post('/login', usersCtrl.login);
router.delete('/deleteAccount/:id', usersCtrl.deleteAccount);

module.exports = router;