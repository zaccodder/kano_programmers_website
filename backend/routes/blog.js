const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogsByUser,
  createComment,
  deleteBlog,
  updateBlog,
  getAllComments,
  getComment,
  updateComment,
  deleteComment,
  likeBlog,
} = require('../controllers/blogs');
const { authorizationMiddleware } = require('../middleware/middleware');

router.get('/', getAllBlogs); // get all blogs
router.get('/:id', getBlogsByUser); // get single blog
router.post('/', authorizationMiddleware, createBlog); // create a new blog
router.put('/:id/like', authorizationMiddleware, likeBlog); // like a blog
router.post('/:id/comments', authorizationMiddleware, createComment); // create comment
router.delete('/:id', authorizationMiddleware, deleteBlog); // delete blog
router.put('/:id', authorizationMiddleware, updateBlog); // update blog
router.get('/comments', getAllComments); // get all comments
router.get('/comments/:id', getComment); // get single comment
router.put('/comments/:id', authorizationMiddleware, updateComment); // update comment
router.delete('/comments/:id', authorizationMiddleware, deleteComment); // delete comment

module.exports = router;
