import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { updateUserProfile, fetchUserProfile } from '../api/userSlice';

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  // useEffect(() => {
  //   if (user) {
  //     setName(user.name);
  //     setEmail(user.email);
  //     setBio(user.bio || '');
  //   } else {
  //     dispatch(fetchUserProfile());
  //   }
  // }, [user, dispatch]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateUserProfile({ name, email, bio }));
  //   navigate(`/profile/${user.name}`);
  // };

  return (
    <div className='flex flex-col items-center min-h-screen py-8 bg-gray-100 dark:bg-dark-background'>
      <div className='w-full max-w-2xl p-6 mb-8 bg-white rounded-sm shadow-md dark:bg-dark-primary'>
        <h1 className='mb-4 text-3xl font-bold text-gray-800 dark:text-dark-text'>
          Edit Profile
        </h1>
        <form onSubmit={() => console.log('submit')}>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700 dark:text-dark-text'
              htmlFor='name'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded-sm shadow-sm appearance-none focus:outline-hidden focus:shadow-outline dark:bg-dark-secondary dark:text-dark-text'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700 dark:text-dark-text'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded-sm shadow-sm appearance-none focus:outline-hidden focus:shadow-outline dark:bg-dark-secondary dark:text-dark-text'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700 dark:text-dark-text'
              htmlFor='bio'
            >
              Bio
            </label>
            <textarea
              id='bio'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded-sm shadow-sm appearance-none focus:outline-hidden focus:shadow-outline dark:bg-dark-secondary dark:text-dark-text'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='px-4 py-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-700 focus:outline-hidden focus:shadow-outline'
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// EditProfile.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     bio: PropTypes.string,
//   }).isRequired,
// };

export default EditProfile;
