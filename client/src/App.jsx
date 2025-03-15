import { useState, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initializeBlogs } from './api/blogsSlice';
import {
  Home,
  About,
  Navbar,
  Blogs,
  Register,
  Login,
  Profile,
  Footer,
  BlogsByEachUser,
  AboutEachUser,
  CreateBlog,
  UpdateBlog,
  EditProfile,
} from './components/index';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // Assume this state stores the token

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user);
      setToken(user.token);
    }
  }, [token]);

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-dark-background'>
      <Navbar user={user} setUser={setUser} />
      <Outlet />
      <div className='grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/log-in' element={<Login setToken={setToken} />} />
          <Route path='/blogs' element={<Blogs />} />
          {user && (
            <Route path={`/@${user.name}`} element={<Profile user={user} />}>
              <Route index element={<BlogsByEachUser user={user} />} />
              <Route path='about' element={<AboutEachUser />} />
              <Route path='create-blog' element={<CreateBlog />} />
              <Route path='update-blog/:id' element={<UpdateBlog />} />
              <Route
                path='edit-profile'
                element={<EditProfile user={user} />}
              />
            </Route>
          )}

          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
