const express = require('express');
const commentsCtrl = require('../controllers/commentsCtrl');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', commentsCtrl.createComment);
router.get('/:id', commentsCtrl.findComments);

module.exports = router;