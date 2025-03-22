import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader, User, Mail, Pencil } from 'lucide-react';

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load user data
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio || '');
      setLoading(false);
    }
  }, [user]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    // Simulate saving (Replace with actual dispatch)
    setTimeout(() => {
      setSaving(false);
      navigate(`/profile/${user.name}`);
    }, 2000);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-base-200'>
        <Loader className='animate-spin text-primary' size={40} />
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-base-200 px-4 w-full'>
      <div className='w-full max-w-3xl p-8 space-y-6 shadow-xl card bg-base-100 glass rounded-xl'>
        <h1 className='text-4xl font-extrabold text-primary text-center'>
          Edit Profile <Pencil size={28} className='inline-block ml-2' />
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Name Input */}
          <div className='form-control'>
            <label className='label text-lg font-medium text-neutral'>
              Name
            </label>
            <div className='relative'>
              <User className='absolute left-4 top-3 text-gray-400' size={20} />
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full pl-12 p-4 input input-bordered focus:ring-2 focus:ring-primary'
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className='form-control'>
            <label className='label text-lg font-medium text-neutral'>
              Email
            </label>
            <div className='relative'>
              <Mail className='absolute left-4 top-3 text-gray-400' size={20} />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full pl-12 p-4 input input-bordered focus:ring-2 focus:ring-primary'
                required
              />
            </div>
          </div>

          {/* Bio Input */}
          <div className='form-control'>
            <label className='label text-lg font-medium text-neutral'>
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows='5'
              className='w-full p-4 textarea textarea-bordered focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Buttons */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-between'>
            <button
              type='submit'
              className={`btn btn-primary w-full md:w-auto ${
                saving && 'loading'
              }`}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>

            <button
              type='button'
              className='btn btn-outline w-full md:w-auto'
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

export default EditProfile;
