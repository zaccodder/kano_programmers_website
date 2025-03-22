import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThumbsUp, MoreHorizontal, Pencil } from 'lucide-react';

const BlogsByEachUser = ({ user }) => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const blogsPersonal = blogs.filter((blog) => blog.user.id === user.id);

  return (
    <div className='min-h-screen py-10 bg-base-200'>
      <div className='container max-w-3xl p-4 mx-auto'>
        <h1 className='mb-6 text-4xl font-bold text-center text-primary'>
          {user.name}'s Blogs ✍️
        </h1>

        {blogsPersonal.length === 0 ? (
          <p className='text-lg text-center text-neutral'>
            {user.name} hasn’t written any blogs yet.
          </p>
        ) : (
          blogsPersonal.map((blog) => (
            <div
              key={blog.id}
              className='p-6 mb-6 shadow-lg card bg-base-100 transition-transform hover:scale-[1.02]'
            >
              <div className='card-body'>
                {/* Blog Title */}
                <h2 className='text-2xl font-bold text-neutral'>
                  {blog.title}
                </h2>

                {/* Blog Content (truncated) */}
                <p className='mt-2 text-gray-600 line-clamp-3'>
                  {blog.content.length > 150
                    ? `${blog.content.substring(0, 150)}...`
                    : blog.content}
                </p>

                {/* Blog Footer */}
                <div className='flex items-center justify-between mt-4 text-sm text-gray-500'>
                  <span>📅 {new Date(blog.createdAt).toDateString()}</span>

                  <div className='flex items-center gap-3'>
                    {/* Like Button */}
                    <button className='flex items-center gap-1 btn btn-ghost btn-sm text-primary'>
                      <ThumbsUp size={18} />
                    </button>

                    {/* Edit Blog Button */}
                    <Link
                      to={`/@${user.name}/update-blog/${blog.id}`}
                      className='flex items-center gap-1 btn btn-outline btn-primary btn-sm'
                    >
                      <Pencil size={16} />
                      Edit
                    </Link>

                    {/* More Options */}
                    <button className='btn btn-ghost btn-sm'>
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogsByEachUser;
