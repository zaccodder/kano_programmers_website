import { useSelector } from 'react-redux';
import { ThumbsUp, MessageCircle } from 'lucide-react';

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs.blogs);

  return blogs.msg === 'No blogs found' ? (
    <div className='flex flex-col items-center justify-center min-h-screen py-8 bg-base-200 dark:bg-dark-background'>
      <p className='text-3xl font-bold text-neutral dark:text-dark-text'>
        No blogs found
      </p>
    </div>
  ) : (
    <div className='flex flex-col items-center min-h-screen py-8 bg-base-200 dark:bg-dark-background'>
      <div className='w-full max-w-2xl'>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className='p-6 mb-8 shadow-md card bg-base-100 dark:bg-dark-primary'
          >
            <div className='card-body'>
              {/* Author */}
              <h2 className='text-lg font-semibold text-primary dark:text-dark-accent'>
                {blog.author}
              </h2>

              {/* Blog Title */}
              <h3 className='text-2xl font-bold text-neutral dark:text-dark-text'>
                {blog.title}
              </h3>

              {/* Content */}
              <p className='text-gray-700 dark:text-dark-text'>
                {blog.content}
              </p>

              {/* Blog Footer */}
              <div className='flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-dark-text'>
                <span>📅 Dec 28</span>

                <div className='flex gap-4'>
                  <button className='flex items-center gap-1 btn btn-ghost btn-sm'>
                    <ThumbsUp size={18} />
                    Like
                  </button>
                  <button className='flex items-center gap-1 btn btn-ghost btn-sm'>
                    <MessageCircle size={18} />
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
