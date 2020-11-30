const express = require('express');
const postsCtrl = require('../controllers/postsCtrl');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', postsCtrl.createPosts);
router.put('/:id', postsCtrl.modifyPosts);
router.delete('/:id', postsCtrl.deletePosts);
router.get('/:id', postsCtrl.findOnePosts);
router.use('/', postsCtrl.findPosts);


module.exports = router;