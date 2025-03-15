import { useSelector } from 'react-redux';
import { ThumbUp, MoreHoriz } from '@mui/icons-material';

const BlogsByEachUser = ({ user }) => {
  const blogs = useSelector((state) => state.blogs.blogs);
  // Filter the blogs by the user's id

  const blogsPersonal = blogs.filter((blog) => blog.author.id === user.id);
  console.log(blogsPersonal);

  return (
    <div>
      {blogsPersonal.map((blog) => {
        return (
          <div key={blog.id}>
            <h1 className='text-3xl font-bold mb-2'>{blog.title}</h1>
            <p>{blog.content}</p>
            <div>
              <span>Dec 28</span>
              <ThumbUp />
              <MoreHoriz />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsByEachUser;
