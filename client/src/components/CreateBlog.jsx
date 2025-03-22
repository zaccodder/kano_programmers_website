import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createBlogAction } from '../reducers/blogsSlice';
import { PenBox } from 'lucide-react';

const CreateBlog = ({ token }) => {
  const [newBlogs, setBlogs] = useState({
    title: '',
    content: '',
    category: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes
  const handlePostChange = (e) => {
    setBlogs({ ...newBlogs, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlogAction(newBlogs, token));
    navigate(`/blogs`);

    setBlogs({ title: '', content: '', category: '' });
  };

  return (
    <div className='flex justify-center min-h-screen bg-base-200 p-6 w-full'>
      <div className='card w-full max-w-2xl bg-base-100 shadow-xl'>
        <div className='card-body'>
          {/* Header */}
          <h2 className='text-2xl font-bold flex items-center gap-2 text-primary'>
            <PenBox size={24} /> Create a New Blog
          </h2>

          {/* Form */}
          <form onSubmit={handlePostSubmit} className='space-y-4'>
            {/* Title */}
            <div>
              <label className='label'>
                <span className='text-sm font-bold'>Title</span>
              </label>
              <input
                type='text'
                name='title'
                value={newBlogs.title}
                onChange={handlePostChange}
                required
                className='input input-bordered w-full'
              />
            </div>

            {/* Category */}
            <div>
              <label className='label'>
                <span className='text-sm font-bold'>Category</span>
              </label>
              <select
                name='category'
                value={newBlogs.category}
                onChange={handlePostChange}
                required
                className='select select-bordered w-full'
              >
                <option value='' disabled>
                  Select a category
                </option>
                <option value='Technology'>Technology</option>
                <option value='Science'>Science</option>
                <option value='Health'>Health</option>
                <option value='Education'>Education</option>
                <option value='Business'>Business</option>
              </select>
            </div>

            {/* Content */}
            <div>
              <label className='label'>
                <span className='text-sm font-bold'>Content</span>
              </label>
              <textarea
                name='content'
                value={newBlogs.content}
                onChange={handlePostChange}
                required
                className='textarea textarea-bordered w-full h-32'
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type='submit' className='btn btn-primary w-full'>
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
