import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/auth';

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login(formData);

      if (!res || res.status === 401) {
        toast.error(res?.msg || 'Invalid credentials');
        setLoading(false);
        return;
      }

      localStorage.setItem('user', JSON.stringify(res));
      setToken(res.token);
      toast.success('Login successful!');
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-base-200'>
      <div className='w-full max-w-md p-6 shadow-xl card bg-base-100'>
        <form onSubmit={onSubmit} className='flex flex-col gap-y-4 card-body'>
          <h2 className='text-2xl font-bold text-center text-primary'>Login</h2>

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
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          {/* Register Link */}
          <div className='text-sm text-center text-base-content'>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='text-primary hover:underline'>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
