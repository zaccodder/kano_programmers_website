import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThumbsUp, MoreHorizontal, Pencil, Trash } from 'lucide-react';
import { deleteBlogAction } from '../reducers/blogsSlice';

const BlogsByEachUser = ({ user, token }) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const blogsPersonal = blogs.filter((blog) => blog.user.id === user.id);

  const handleDelete = (id) => {
    const toast = document.getElementById('delete-toast');
    toast.showModal(); // Show the confirmation modal

    // Attach event listeners for confirmation
    const confirmBtn = document.getElementById('confirm-delete');
    const cancelBtn = document.getElementById('cancel-delete');

    confirmBtn.onclick = async () => {
      dispatch(deleteBlogAction(id, token));
      toast.close();

      // Show success toast
      document.getElementById('success-toast').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('success-toast').classList.add('hidden');
      }, 3000);
    };

    cancelBtn.onclick = () => {
      toast.close();
    };
  };

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
                <div className='flex items-center justify-between mt-4 text-sm text-gray-500 flex-wrap'>
                  <span>📅 {new Date(blog.createdAt).toDateString()}</span>

                  <div className='flex items-center gap-3 '>
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

                    {/* Delete Blog Button */}
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className='flex items-center gap-1 btn btn-error btn-sm'
                    >
                      <Trash size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <dialog id='delete-toast' className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Confirm Delete</h3>
          <p className='py-4'>Are you sure you want to delete this blog?</p>
          <div className='modal-action'>
            <button id='confirm-delete' className='btn btn-error'>
              Yes, Delete
            </button>
            <button id='cancel-delete' className='btn'>
              Cancel
            </button>
          </div>
        </div>
      </dialog>

      {/* Success Toast */}
      <div
        id='success-toast'
        className='hidden fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg'
      >
        ✅ Blog deleted successfully!
      </div>
    </div>
  );
};

export default BlogsByEachUser;
