import React from 'react';

const AboutEachUser = ({ user }) => {
  return (
    <div className='flex flex-col items-center min-h-screen py-8 bg-gray-100 dark:bg-dark-background'>
      <div className='w-full max-w-2xl p-6 mb-8 bg-white rounded-sm shadow-md dark:bg-dark-primary'>
        <h1 className='mb-4 text-3xl font-bold text-gray-800 dark:text-dark-text'>
          About {user?.name}
        </h1>
        <p className='mb-4 text-gray-600 dark:text-dark-text'>
          {user?.bio || 'This user has not provided a bio yet.'}
        </p>
        <div className='flex flex-col space-y-2'>
          <div>
            <span className='font-bold text-gray-800 dark:text-dark-text'>
              Email:
            </span>{' '}
            {user?.email}
          </div>
          <div>
            <span className='font-bold text-gray-800 dark:text-dark-text'>
              Location:
            </span>{' '}
            {user?.location || 'Not specified'}
          </div>
          <div>
            <span className='font-bold text-gray-800 dark:text-dark-text'>
              Joined:
            </span>{' '}
            {new Date(user?.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEachUser;
