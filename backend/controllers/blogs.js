const { StatusCodes } = require('http-status-codes');
const Blog = require('../models/blog');

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}); // get all blogs
  if (blogs.length === 0) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'No blogs found' });
  }
  res.status(StatusCodes.OK).json(blogs);
};

// create a new blog
const createBlog = async (req, res) => {
  const author = req.user.userId;
  const name = req.user.name;
  const blog = new Blog({ ...req.body, author, name });
  await blog.save();
  res.status(StatusCodes.CREATED).json({ blog });
};

// get single blog
const getBlogsByUser = async (req, res) => {
  const userId = req.params.id;

  const blog = await Blog.findById(userId);
  if (!blog) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Blog not found' });
  }

  res.status(StatusCodes.OK).json(blog);
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogsByUser,
};
