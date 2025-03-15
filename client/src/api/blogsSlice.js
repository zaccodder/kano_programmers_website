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
      state.blogs = state.blogs.concat(action.payload);
    },

    updateBlog: (state, action) => {
      const blogs = state.blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
      return blogs;
    },

    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },

    appendBlog: (state, action) => {
      state.blogs.push(action.payload);
    },

    createComment: (state, action) => {
      state.blogs.map((blog) =>
        blog.id === action.payload.blogId
          ? blog.comments.push(action.payload.comment)
          : blog
      );
    },
  },
});

// action creators

export const initializeBlogs = () => {
  return async (dispatch) => {
    const res = await blogService.getAll();

    dispatch(setBlogs(res));
  };
};

export const createBlogAction = (blog, token) => {
  return async (dispatch) => {
    const res = await blogService.create(blog, token);
    dispatch(createBlog(res));
  };
};

export const updateBlogAction = (blog) => {
  return async (dispatch) => {
    const res = await blogService.update(blog);
    dispatch(updateBlog(res));
  };
};

export const deleteBlogAction = (id) => {
  return async (dispatch) => {
    await blogService.remove(id);
    dispatch(deleteBlog(id));
  };
};

export const createCommentAction = (blogId, text, token) => {
  return async (dispatch) => {
    const res = await blogService.createComment(blogId, text, token);
    dispatch(createComment(res));
  };
};

export const { setBlogs, createBlog, updateBlog, deleteBlog, createComment } =
  blogsSlice.actions;
export default blogsSlice.reducer;
