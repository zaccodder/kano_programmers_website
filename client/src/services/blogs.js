import axios from 'axios';

const baseUrl = '/api/v1/blogs';

const getAllBlogs = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const createBlog = async (newBlog, token) => {
  try {
    const res = await axios.post(baseUrl, newBlog, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const updateBlog = async (blog, token) => {
  try {
    const res = await axios.put(`${baseUrl}/${blog._id}`, blog, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const updateComment = async (commentId, comment, token) => {
  try {
    const res = await axios.put(
      `${baseUrl}/comments/${commentId}`,
      { comment },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const deleteBlog = async (id, token) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const likeBlog = async (id, token) => {
  try {
    const res = await axios.put(`${baseUrl}/${id}/like`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const createComment = async (blogId, comment, token) => {
  try {
    const res = await axios.post(
      `${baseUrl}/${blogId}/comments`,
      { comment },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  getAllBlogs,
  createBlog,
  updateBlog,
  likeBlog,
  updateComment,
  deleteBlog,
  createComment,
};
