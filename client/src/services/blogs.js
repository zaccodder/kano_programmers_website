import axios from 'axios';

const baseUrl = '/api/v1/blogs';

const getAll = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const create = async (newBlog, token) => {
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

const update = async (id, updatedBlog, token) => {
  try {
    const res = await axios.put(`${baseUrl}/${id}`, updatedBlog, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const remove = async (id, token) => {
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

const createComment = async (blogId, text, token) => {
  console.log('blogId', blogId);

  try {
    const res = await axios.post(
      `${baseUrl}/${blogId}/comments`,
      { text },
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

export default { getAll, create, update, remove, createComment };
