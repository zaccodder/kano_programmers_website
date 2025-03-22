import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signup } from '../services/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signup(formData);
      if (!res || res.status === 400) {
        toast.error(res?.msg || 'Registration failed');
        setLoading(false);
        return;
      }

      toast.success('Registration successful!');
      navigate('/log-in');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-base-200'>
      <div className='w-full max-w-md p-6 shadow-xl card bg-base-100'>
        <form onSubmit={onSubmit} className='flex flex-col gap-y-4 card-body'>
          <h2 className='text-2xl font-bold text-center text-primary'>
            Register
          </h2>

          {/* Name Input */}
          <div className='w-full form-control'>
            <label className='label'>
              <span className='text-base-content'>Name</span>
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={onChange}
              required
              className='w-full input input-bordered'
              placeholder='Enter your name'
            />
          </div>

          {/* Email Input */}
          <div className='w-full form-control'>
            <label className='label'>
              <span className='text-base-content'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={onChange}
              required
              className='w-full input input-bordered'
              placeholder='Enter your email'
            />
          </div>

          {/* Password Input */}
          <div className='w-full form-control'>
            <label className='label'>
              <span className='text-base-content'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={onChange}
              required
              autoComplete='false'
              className='w-full input input-bordered'
              placeholder='Enter your password'
            />
          </div>

          {/* Submit Button */}
          <div className='w-full form-control'>
            <button
              type='submit'
              className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>

          {/* Login Link */}
          <div className='text-sm text-center text-base-content'>
            Already have an account?{' '}
            <Link to='/log-in' className='text-primary hover:underline'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
