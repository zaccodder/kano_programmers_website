import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-base-200 text-center'>
      <h1 className='text-6xl font-bold text-red-500'>404</h1>
      <p className='text-xl text-neutral mt-2'>Oops! Page not found.</p>
      <Link to='/' className='btn btn-primary mt-4'>
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
