import { NavLink, Outlet } from 'react-router-dom';
import {
  AccountCircleRounded,
  Article,
  Create,
  NoteAlt,
} from '@mui/icons-material';
import { SingleProfile } from '../components/index';
const Profile = ({ user }) => {
  const links = ['home', 'about'];

  return (
    <div className='flex min-h-screen'>
      <div className='w-full md:w-3/4 shadow-md'>
        <div className='p-4 shadow-md'>
          <div className='flex items-center'>
            <div className='flex items-center justify-center bg-gray-200 rounded-full h-12 w-12 md:hidden'>
              <AccountCircleRounded
                fontSize='large'
                className='text-gray-600 '
              />
            </div>
            <h2 className='ml-2 md:text-3xl text-xl font-bold'>{user?.name}</h2>
          </div>
          <div className='flex items-center mt-4 space-x-4'>
            {links.map((link) => {
              return (
                <NavLink
                  key={link}
                  to={
                    link === 'home'
                      ? `/@${user.name}`
                      : `/@${user.name}/${link}`
                  }
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }
                >
                  {link}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className='flex items-center justify-center p-10'>
          <Outlet />
        </div>
      </div>
      <div className='hidden md:block md:w-1/4 pt-4 pl-2 '>
        <div className='flex flex-col items-center mb-10'>
          <AccountCircleRounded
            fontSize='large'
            className='text-gray-300 block '
            sx={{ height: '100px', width: '100px' }}
          />
          <h2 className='text-xl font-bold text-center'>{user?.name}</h2>
        </div>
        <NavLink to={`/@${user.name}/create-blog`}>
          <SingleProfile icon={<Create />} text={'Create a blog'} />
        </NavLink>
        <NavLink to={`/@${user.name}/update-blog/:id`}>
          <SingleProfile icon={<Article />} text={' Upadte Blog'} />
        </NavLink>
        <NavLink to={`/@${user.name}/edit-profile`}>
          <SingleProfile icon={<NoteAlt />} text={'Edit profile'} />
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
