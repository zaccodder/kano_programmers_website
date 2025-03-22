import { NavLink, Outlet } from 'react-router-dom';
import { User, FilePlus, FileEdit, Settings } from 'lucide-react';

const Profile = ({ user }) => {
  const links = ['home', 'about', 'create-blog', 'edit-profile'];

  return (
    <div className='flex min-h-screen bg-base-200'>
      {/* Main Content */}
      <div className='w-full md:w-3/4 bg-base-100 shadow-md'>
        {/* Header */}
        <div className='p-6 shadow-md bg-primary text-primary-content rounded-md'>
          <div className='flex items-center'>
            {/* Profile Icon (Visible on Mobile) */}
            <div className='flex items-center justify-center bg-secondary rounded-full h-12 w-12 md:hidden'>
              <User size={32} className='text-secondary-content' />
            </div>
            <h2 className='ml-2 md:text-3xl text-xl font-bold'>{user?.name}</h2>
          </div>

          {/* Navigation Links */}
          <div className='flex items-center mt-4 space-x-4'>
            {links.map((link) => (
              <NavLink
                key={link}
                to={
                  link === 'home' ? `/@${user.name}` : `/@${user.name}/${link}`
                }
                className={({ isActive }) =>
                  `btn btn-sm ${isActive ? 'btn-accent' : 'btn-ghost'}`
                }
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className='flex items-center justify-center p-10'>
          <Outlet />
        </div>
      </div>

      {/* Sidebar (Hidden on Mobile) */}
      <div className='hidden md:block md:w-1/4 pt-4 pl-2'>
        <div className='flex flex-col items-center mb-10'>
          <div className='avatar'>
            <div className='w-24 rounded-full bg-secondary flex items-center justify-center'>
              <User size={50} className='text-secondary-content' />
            </div>
          </div>
          <h2 className='text-xl font-bold mt-4'>{user?.name}</h2>
        </div>

        {/* Sidebar Links */}
        <div className='flex flex-col gap-2'>
          <NavLink
            to={`/@${user.name}/create-blog`}
            className='btn btn-primary btn-block'
          >
            <FilePlus className='mr-2' /> Create a Blog
          </NavLink>
          <NavLink
            to={`/@${user.name}/update-blog/:id`}
            className='btn btn-secondary btn-block'
          >
            <FileEdit className='mr-2' /> Update Blog
          </NavLink>
          <NavLink
            to={`/@${user.name}/edit-profile`}
            className='btn btn-accent btn-block'
          >
            <Settings className='mr-2' /> Edit Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
