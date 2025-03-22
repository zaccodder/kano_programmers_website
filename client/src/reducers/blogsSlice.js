import { createSlice } from '@reduxjs/toolkit';
import blogService from '../services/blogs';

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    createBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    createComment: (state, action) => {
      state.blogs = state.blogs.map((blog) =>
        blog.id === action.payload.blogId
          ? { ...blog, comments: [...blog.comments, action.payload] }
          : blog
      );
    },
    updateComment: (state, action) => {
      state.blogs = state.blogs.map((blog) =>
        blog.id === action.payload.blogId
          ? {
              ...blog,
              comments: blog.comments.map((comment) =>
                comment.id === action.payload.id
                  ? { ...comment, comment: action.payload.comment }
                  : comment
              ),
            }
          : blog
      );
    },

    // ✅ DELETE BLOG
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },

    // ✅ LIKE/UNLIKE BLOG
    likeBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    },
  },
});

// 🚀 Async Thunks
export const initializeBlogs = () => async (dispatch) => {
  const res = await blogService.getAllBlogs();
  dispatch(setBlogs(res));
};

export const createBlogAction = (blog, token) => async (dispatch) => {
  const res = await blogService.createBlog(blog, token);
  console.log('res', res);

  dispatch(createBlog(res));
};

// ✅ Update blog action
export const updateBlogAction = (blog, token) => async (dispatch) => {
  const res = await blogService.updateBlog(blog, token);
  dispatch(updateBlog(res));
};

// ✅ Delete blog action
export const deleteBlogAction = (blogId, token) => async (dispatch) => {
  await blogService.deleteBlog(blogId, token);
  dispatch(deleteBlog(blogId));
};

// ✅ Like/unlike blog action
export const likeBlogAction = (blogId, token) => async (dispatch) => {
  const res = await blogService.likeBlog(blogId, token);
  dispatch(likeBlog(res));
};

// ✅ Create comment action
export const createCommentAction =
  (blogId, comment, token) => async (dispatch) => {
    const res = await blogService.createComment(blogId, comment, token);
    dispatch(createComment(res));
  };

// ✅ Update comment action
export const updateCommentAction =
  (commentId, comment, token) => async (dispatch) => {
    const res = await blogService.updateComment(commentId, comment, token);
    dispatch(updateComment(res));
  };

export const {
  setBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  createComment,
  updateComment,
  likeBlog,
} = blogsSlice.actions;

export default blogsSlice.reducer;
