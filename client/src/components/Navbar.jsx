import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlignJustify, Pen } from 'lucide-react';
const Navbar = ({ user, setUser }) => {
  // Get theme from localStorage or default to 'cmyk'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'cmyk'
  );

  // navigate
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = (e) => {
    setTheme(e.target.checked ? 'cmyk' : 'luxury');
  };

  // logout
  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };
  return (
    <div className='justify-between px-4 shadow-sm navbar bg-base-100 lg:px-16'>
      <div className='flex-none'>
        <Link to='/'>
          <img
            src='/images/kpf_logo.png'
            alt='Kano Programmers Forum'
            className='w-12 h-12 rounded-full'
          />
        </Link>
      </div>
      <div className='hidden px-2 mx-2 space-x-5 lg:flex'>
        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
          Home
        </Link>
        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
          About
        </Link>
        <Link to='/blogs' className='btn btn-ghost btn-sm rounded-btn'>
          Blogs
        </Link>
        {user && (
          <Link
            to={`/@${user.name}`}
            className='btn btn-ghost btn-sm rounded-btn'
          >
            Profile
          </Link>
        )}
        {user ? (
          <div className='avatar'>
            <div className='ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2'>
              {user?.profileImage ? (
                <img
                  src={user?.profileImage}
                  alt={user?.name}
                  className='w-10 h-10 rounded-full'
                />
              ) : (
                <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-neutral font-bold text-lg shadow-md'>
                  {user?.name.split(' ')[0][0].toUpperCase() +
                    user?.name
                      .split(' ')
                      [user?.name.split(' ').length - 1][0].toUpperCase()}
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link to='/log-in' className='btn btn-ghost btn-sm rounded-btn'>
            Login
          </Link>
        )}
      </div>

      {/* theme switcher */}
      <div className='hidden lg:flex space-x-3 items-center'>
        {user && (
          <button className='btn btn-primary btn-sm' onClick={logout}>
            Logout
          </button>
        )}
        <label className=' swap swap-rotate' onClick={toggleTheme}>
          {/* this hidden checkbox controls the state */}
          <input
            type='checkbox'
            className='theme-controller'
            value='synthwave'
          />

          {/* sun icon */}
          <svg
            className='w-10 h-10 fill-current swap-off'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
          </svg>

          {/* moon icon */}
          <svg
            className='w-10 h-10 fill-current swap-on'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
          </svg>
        </label>
      </div>
      <div className='flex items-center space-x-5 lg:hidden'>
        <div className='block dropdown dropdown-bottom dropdown-end lg:hidden'>
          <div tabIndex={0} role='button' className='m-1 btn'>
            <AlignJustify />
          </div>
          <ul
            tabIndex={0}
            className='p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52'
          >
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
            <Link to='/blogs' className='btn btn-ghost btn-sm rounded-btn'>
              Blogs
            </Link>
            {user && (
              <Link
                to={`/@${user.name}`}
                className='btn btn-ghost btn-sm rounded-btn mb-2'
              >
                Profile
              </Link>
            )}
            {user ? (
              <button className='btn btn-primary btn-sm mb-10' onClick={logout}>
                Logout
              </button>
            ) : (
              <Link
                to='/log-in'
                className='btn btn-ghost btn-sm rounded-btn mb-10'
              >
                Login
              </Link>
            )}

            <label className=' swap swap-rotate' onClick={toggleTheme}>
              {/* this hidden checkbox controls the state */}
              <input
                type='checkbox'
                className='theme-controller'
                value='synthwave'
              />

              {/* sun icon */}
              <svg
                className='w-10 h-10 fill-current swap-off'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
              </svg>

              {/* moon icon */}
              <svg
                className='w-10 h-10 fill-current swap-on'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
              </svg>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
// import logo from '../assets/images/kpf_logo.png';

// const Navbar = ({ isAuthenticated, setIsAuthenticated, user }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (darkMode) {
//       document.documentElement.classList.remove('dark');
//     } else {
//       document.documentElement.classList.add('dark');
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsAuthenticated(false);
//     setDropdownOpen(false);
//     navigate('/');
//   };

//   return (
//     <nav className='sticky top-0 z-50 w-full p-4 bg-gray-800 dark:bg-dark-primary'>
//       <div className='container flex items-center justify-between mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center text-lg font-bold text-white dark:text-dark-text'
//         >
//           <img src={logo} alt='Logo' className='w-12 h-12 mr-2 rounded-full' />
//           Kano Programmers Forum
//         </Link>
//         <div className='items-center hidden md:flex'>
//           <Link
//             to='/'
//             className='mx-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//           >
//             Home
//           </Link>
//           <Link
//             to='/about'
//             className='mx-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//           >
//             About
//           </Link>
//           <Link
//             to='/blogs'
//             className='mx-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//           >
//             Blogs
//           </Link>
//           {!isAuthenticated && (
//             <Link
//               to='/log-in'
//               className='mx-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//             >
//               Login
//             </Link>
//           )}
//           {isAuthenticated && user && (
//             <div className='relative'>
//               <button
//                 onClick={toggleDropdown}
//                 className='flex items-center justify-center mx-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//               >
//                 <div className='flex items-center justify-center w-8 h-8 text-white bg-black rounded-full dark:bg-gray-700 dark:text-dark-text'>
//                   {user?.name.split(' ')[0][0].toUpperCase() +
//                     user?.name
//                       .split(' ')
//                       [user?.name.split(' ').length - 1][0].toUpperCase()}
//                 </div>
//               </button>
//               {dropdownOpen && (
//                 <div className='absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-lg dark:bg-dark-primary'>
//                   <Link
//                     to={`/@${user?.name}`}
//                     className='block px-4 py-2 text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-secondary'
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     Profile
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className='block w-full px-4 py-2 text-left text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-secondary'
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         <div className='flex items-center'>
//           <button
//             onClick={toggleDarkMode}
//             className='mx-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>
//           <button
//             onClick={toggleMenu}
//             className='text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent md:hidden'
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className='md:hidden'>
//           <Link
//             to='/'
//             className='block px-4 py-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//           >
//             Home
//           </Link>
//           <Link
//             to='/about'
//             className='block px-4 py-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//           >
//             About
//           </Link>
//           <Link
//             to='/blogs'
//             className='block px-4 py-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//           >
//             Blogs
//           </Link>
//           {!isAuthenticated && (
//             <Link
//               to='/log-in'
//               className='block px-4 py-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//             >
//               Login
//             </Link>
//           )}
//           {isAuthenticated && user && (
//             <>
//               <Link
//                 to={`/@${user?.name}`}
//                 className='block px-4 py-2 text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//               >
//                 Profile
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className='block w-full px-4 py-2 text-left text-gray-300 hover:text-white dark:text-dark-text dark:hover:text-dark-accent'
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
