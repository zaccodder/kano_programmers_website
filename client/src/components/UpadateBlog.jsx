import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBlog } from '../api/blogsSlice';

const UpdateBlog = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((b) => b.id === id)
  );
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // useEffect(() => {
  //   if (blog) {
  //     setTitle(blog.title);
  //     setContent(blog.content);
  //   } else {
  //     dispatch(fetchBlogById(id));
  //   }
  // }, [blog, dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlog({ id, title, content, author: user.name }));
    navigate(`/profile/${user.name}`);
  };

  return (
    <div className='flex flex-col items-center min-h-screen py-8 bg-gray-100 dark:bg-dark-background'>
      <div className='w-full max-w-2xl p-6 mb-8 bg-white rounded-sm shadow-md dark:bg-dark-primary'>
        <h1 className='mb-4 text-3xl font-bold text-gray-800 dark:text-dark-text'>
          Update Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700 dark:text-dark-text'
              htmlFor='title'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded-sm shadow-sm appearance-none focus:outline-hidden focus:shadow-outline dark:bg-dark-secondary dark:text-dark-text'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700 dark:text-dark-text'
              htmlFor='content'
            >
              Content
            </label>
            <textarea
              id='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded-sm shadow-sm appearance-none focus:outline-hidden focus:shadow-outline dark:bg-dark-secondary dark:text-dark-text'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='px-4 py-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-700 focus:outline-hidden focus:shadow-outline'
            >
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// UpdateBlog.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default UpdateBlog;
