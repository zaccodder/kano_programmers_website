import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlogAction } from '../api/blogsSlice';

const CreateBlog = ({ token }) => {
  const [newBlogs, setBlogs] = useState({
    title: '',
    content: '',
    isPublic: false,
  });
  const dispatch = useDispatch();

  // handle post change
  const handlePostChange = (e) => {
    setBlogs({ ...newBlogs, [e.target.name]: e.target.value });
  };

  // handle submission of blog
  const handlePostSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlogAction(newBlogs, token));
    setBlogs({ title: '', content: '', isPublic: false });
  };
  return (
    <div className='w-full max-w-2xl p-6 mb-8 bg-white rounded-sm shadow-md dark:bg-dark-primary'>
      <h2 className='mb-4 text-2xl font-bold text-gray-800 dark:text-dark-text'>
        Create a New Post
      </h2>
      <form onSubmit={handlePostSubmit}>
        <div className='mb-4'>
          <label
            className='block mb-2 text-sm font-bold text-gray-700 dark:text-dark-text'
            htmlFor='title'
          >
            Title
          </label>
          <input
            type='text'
            name='title'
            value={newBlogs.title}
            onChange={handlePostChange}
            required
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded-sm shadow-sm appearance-none dark:text-dark-text focus:outline-hidden focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input
            type='checkbox'
            name='isPublic'
            value={newBlogs.isPublic}
            onChange={() =>
              setBlogs({ ...newBlogs, isPublic: !newBlogs.isPublic })
            }
            className='mr-2 leading-tight'
          />
          <label
            className='text-sm font-bold text-gray-700 dark:text-dark-text'
            htmlFor='isPublic'
          >
            Is public ?
          </label>
        </div>
        <div className='mb-4'>
          <label
            className='block mb-2 text-sm font-bold text-gray-700 dark:text-dark-text'
            htmlFor='content'
          >
            Content
          </label>
          <textarea
            name='content'
            value={newBlogs.content}
            onChange={handlePostChange}
            required
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded-sm shadow-sm appearance-none dark:text-dark-text focus:outline-hidden focus:shadow-outline h-32'
          ></textarea>
        </div>
        <button
          type='submit'
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-700 focus:outline-hidden focus:shadow-outline'
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
