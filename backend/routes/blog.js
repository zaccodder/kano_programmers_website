const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogsByUser,
} = require('../controllers/blogs');
const { authorizationMiddleware } = require('../middleware/middleware');

router.get('/', getAllBlogs); // get all blogs
router.get('/:id', getBlogsByUser); // get single blog
router.post('/', authorizationMiddleware, createBlog); // create a new blog

module.exports = router;
