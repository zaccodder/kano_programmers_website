import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBlogAction } from '../reducers/blogsSlice';
import { Loader } from 'lucide-react';

const UpdateBlog = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((b) => b.id === id)
  );

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load blog data when component mounts
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [blog]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    await dispatch(updateBlogAction({ id, title, content, author: user.name }));

    setSaving(false);
    navigate(`/profile/${user.name}`); // Redirect to user's profile page
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-base-200'>
        <Loader className='animate-spin text-primary' size={40} />
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-base-200 px-4'>
      <div className='w-full max-w-4xl p-8 space-y-6 shadow-xl card bg-base-100 glass rounded-xl'>
        <h1 className='text-4xl font-extrabold text-primary text-center'>
          Update Your Blog ✍️
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Title Input */}
          <div className='form-control'>
            <label className='label text-lg font-medium text-neutral'>
              Blog Title
            </label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full p-4 input input-bordered focus:ring-2 focus:ring-primary'
              required
            />
          </div>

          {/* Content Textarea */}
          <div className='form-control'>
            <label className='label text-lg font-medium text-neutral'>
              Blog Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows='10'
              className='w-full p-4 textarea textarea-bordered focus:ring-2 focus:ring-primary'
              required
            />
          </div>

          {/* Buttons */}
          <div className='flex justify-between flex-col md:flex-row space-y-2'>
            <button
              type='submit'
              className={`btn btn-primary  w-full md:w-auto btn-sm ${
                saving && 'loading'
              }`}
              disabled={saving}
            >
              {saving ? 'Updating...' : 'Update Blog'}
            </button>

            <button
              type='button'
              className='btn btn-outline w-full md:w-auto btn-sm'
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
