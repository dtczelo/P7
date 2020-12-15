const express = require('express');
const postsCtrl = require('../controllers/postsCtrl');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const postFormat = require('../middleware/postFormat');

const router = express.Router();

router.post('/', auth, multer, postFormat, postsCtrl.createPosts);
router.put('/:id', auth, multer, postFormat, postsCtrl.modifyPosts);
router.delete('/:id', auth, postsCtrl.deletePosts);
router.get('/:id', postsCtrl.findOnePosts);
router.use('/', postsCtrl.findPosts);


module.exports = router;