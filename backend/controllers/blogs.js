const { StatusCodes } = require('http-status-codes');
const Blog = require('../models/blog');
const User = require('../models/user');
const Comment = require('../models/comment');

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).populate('user').populate('comments');

  res.status(StatusCodes.OK).json(blogs);
};

// create a new blog
const createBlog = async (req, res) => {
  const user = await User.findById(req.user.id);
  const name = req.user.name;
  const blog = new Blog({ ...req.body, user: user._id, name });
  await blog.save();
  user.blogs = user.blogs.concat(blog._id); // add blog to user's blogs array
  await user.save();
  res.status(StatusCodes.CREATED).json(blog);
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

const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Blog not found' });
  }
  if (blog.user.toString() !== req.user.id) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Not authorized' });
  }
  await Blog.findByIdAndRemove(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'Blog removed' });
};

//  update blog
const updateBlog = async (req, res) => {
  const { title, content, category } = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    { title, content, category },
    { new: true, runValidators: true, context: 'query' }
  );
  if (!updatedBlog) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Blog not found' });
  }
  if (updatedBlog.user.toString() !== req.user.id) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Not authorized' });
  }
  await updatedBlog.save();
  res.status(StatusCodes.OK).json(updatedBlog);
};

// create a comment controller
const createComment = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  const userId = req.user.id;

  const newComment = new Comment({ ...req.body, userId, blogId: blog._id });
  const savedComment = await newComment.save();
  blog.comments = blog.comments.concat(savedComment._id);
  await blog.save();
  console.log(savedComment);
  res.status(201).json(savedComment);
};

// get all comments
const getAllComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(StatusCodes.OK).json(comments);
};

// get a single comment
const getComment = async (req, res) => {
  const commentId = req.params.id;
  const comment = await Comment.findById(commentId).populate('user', 'name');
  if (!comment) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Comment not found' });
  }
  res.status(StatusCodes.OK).json(comment);
};

// update a comment
const updateComment = async (req, res) => {
  const commentId = req.params.id;
  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    { ...req.body },
    { new: true, runValidators: true, context: 'query' }
  );
  if (!updatedComment) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Comment not found' });
  }
  res.status(StatusCodes.OK).json(updatedComment);
};

// delete a comment
const deleteComment = async (req, res) => {
  const commentId = req.params.id;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Comment not found' });
  }
  await comment.remove();
  res.status(StatusCodes.OK).json({ msg: 'Comment removed' });
};

// like a blog
const likeBlog = async (req, res) => {
  const loggedUser = req.user.id;
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Blog not found' });
  }
  if (blog.likes.includes(loggedUser)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'Blog already liked' });
  }

  blog.likes = blog.likes.concat(loggedUser);
  await blog.save();
  res.status(StatusCodes.OK).json(blog);
};

module.exports = {
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
  getBlogsByUser,
  likeBlog,
};
