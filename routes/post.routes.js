const router = require('express').Router();
const multer = require('multer');
const upload = multer();

const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const postController = require('../controllers/post.controller');

router.get('/', postController.readPost);
router.post('/', upload.single('file'), postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

/// comments
router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edit-comment-post/:id', postController.editcommentPost);
router.patch('/delete-comment-post/:id', postController.deletecommentPost);



module.exports = router;