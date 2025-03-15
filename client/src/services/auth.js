import axios from 'axios';

const baseUrl = '/api/v1/users';

export const login = async (formData) => {
  try {
    const res = await axios.post(`${baseUrl}/log-in`, formData);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const signup = async (formData) => {
  try {
    const res = await axios.post(`${baseUrl}/sign-up`, formData);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
