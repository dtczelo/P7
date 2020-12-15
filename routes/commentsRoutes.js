const express = require('express');
const commentsCtrl = require('../controllers/commentsCtrl');
const commentFormat = require('../middleware/commentFormat');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, commentFormat, commentsCtrl.createComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);
router.get('/:id', commentsCtrl.findComments);

module.exports = router;