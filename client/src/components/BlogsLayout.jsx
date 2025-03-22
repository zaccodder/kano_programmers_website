import { Outlet, Link } from 'react-router-dom';
import Blogs from './Blogs';
import { nav_links } from '.';
const BlogsLayout = ({ user, token }) => {
  return (
    <>
      <div className='lg:flex justify-center space-x-4  bg-base-100 p-2 border-t-2 hidden text-sm'>
        {nav_links.map((link) => (
          <button key={link} className='btn btn-ghost'>
            {link}
          </button>
        ))}
      </div>
      <div className='breadcrumbs w-full text-sm bg-base-100 p-2 border-t-2 lg:hidden'>
        <ul>
          {nav_links.map((link) => (
            <li key={link} className='inline'>
              <Link to='/blogs'>{link}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
      <Blogs user={user} token={token} />
    </>
  );
};

export default BlogsLayout;
