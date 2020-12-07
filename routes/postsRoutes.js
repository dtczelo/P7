const express = require('express');
const postsCtrl = require('../controllers/postsCtrl');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, multer, postsCtrl.createPosts);
router.put('/:id', auth, multer, postsCtrl.modifyPosts);
router.delete('/:id', auth, postsCtrl.deletePosts);
router.get('/:id', postsCtrl.findOnePosts);
router.use('/', postsCtrl.findPosts);


module.exports = router;