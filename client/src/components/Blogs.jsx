import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MessageCircle, Pencil, ThumbsUp } from 'lucide-react';
import {
  createCommentAction,
  updateCommentAction,
  likeBlogAction, // New action for liking a blog
} from '../reducers/blogsSlice';

const Blogs = ({ user, token }) => {
  const [commentText, setCommentText] = useState({});
  const [editingComment, setEditingComment] = useState({});
  const [showComments, setShowComments] = useState({});
  const blogs = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Handle adding a comment
  const handleAddComment = async (blogId) => {
    if (!user) {
      navigate('/log-in');
      return;
    }
    if (!commentText[blogId]?.trim()) return;

    dispatch(createCommentAction(blogId, commentText[blogId], token));

    setCommentText((prev) => ({ ...prev, [blogId]: '' })); // Clear input
  };

  // ✅ Handle updating a comment
  const handleUpdateComment = async (commentId) => {
    if (!editingComment[commentId]?.trim()) return;

    dispatch(updateCommentAction(commentId, editingComment[commentId], token));

    // ✅ Remove `commentId` from state to close textarea
    setEditingComment((prev) => {
      const newState = { ...prev };
      delete newState[commentId];
      return newState;
    });
  };

  // ✅ Handle liking a blog
  const handleLike = async (blogId) => {
    if (!user) {
      navigate('/log-in');
      return;
    }

    dispatch(likeBlogAction(blogId, token));
  };

  return blogs.length === 0 ? (
    <div className='flex flex-col items-center justify-center min-h-screen py-8 bg-base-200'>
      <p className='text-3xl font-bold text-neutral'>No blogs found</p>
    </div>
  ) : (
    <div className='flex flex-col items-center min-h-screen py-8 bg-base-200'>
      <div className='w-full max-w-2xl p-2 mb-8'>
        {blogs.map((blog) => (
          <div key={blog.id} className='p-6 mb-8 shadow-md card bg-base-100'>
            <div className='card-body'>
              <h2 className='text-2xl font-bold text-neutral'>{blog.title}</h2>
              <h3 className='text-lg font-semibold text-primary'>
                Written by: {blog.name}
              </h3>
              <p className='text-gray-700'>{blog.content}</p>

              {/* Blog Footer */}
              <div className='flex items-center justify-between mt-4 text-sm text-gray-500 flex-wrap'>
                <span>📅 {new Date(blog.createdAt).toDateString()}</span>
                <div className='flex gap-4'>
                  {/* Like Button */}
                  <button
                    className={`flex items-center gap-1 btn btn-ghost btn-sm ${
                      blog.likes?.includes(user?.id) ? 'text-blue-500' : ''
                    }`}
                    onClick={() => handleLike(blog.id)}
                  >
                    <ThumbsUp size={18} />
                    {blog.likes?.length || 0}
                  </button>

                  {/* Show/Hide Comments */}
                  <button
                    className='flex items-center gap-1 btn btn-ghost btn-sm'
                    onClick={() =>
                      setShowComments((prev) => ({
                        ...prev,
                        [blog.id]: !prev[blog.id],
                      }))
                    }
                  >
                    <MessageCircle size={18} className='hidden md:block' />
                    {showComments[blog.id] ? 'Hide Comments' : 'Show Comments'}
                  </button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            {showComments[blog.id] && (
              <ul className='p-4 mt-2 border-t border-gray-300 space-y-2'>
                {blog.comments.map((comment) => (
                  <li key={comment.id} className='p-2 bg-gray-100 rounded-md'>
                    {editingComment[comment.id] !== undefined ? (
                      <div>
                        <textarea
                          className='w-full p-2 border rounded-md'
                          value={editingComment[comment.id]}
                          onChange={(e) =>
                            setEditingComment((prev) => ({
                              ...prev,
                              [comment.id]: e.target.value,
                            }))
                          }
                        ></textarea>
                        <button
                          className='btn btn-primary btn-sm mt-2'
                          onClick={() => handleUpdateComment(comment.id)}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className='flex items-center justify-between'>
                        <span>{comment.comment}</span>
                        <button
                          className='btn btn-sm btn-ghost'
                          onClick={() =>
                            setEditingComment((prev) => ({
                              ...prev,
                              [comment.id]: comment.comment,
                            }))
                          }
                        >
                          <Pencil size={16} />
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Comment Input Box */}
            <div className='mt-4'>
              <textarea
                className='w-full p-2 border rounded-md textarea textarea-bordered'
                value={commentText[blog.id] || ''}
                onChange={(e) =>
                  setCommentText((prev) => ({
                    ...prev,
                    [blog.id]: e.target.value,
                  }))
                }
                placeholder='Write a comment...'
              ></textarea>
              <div className='flex justify-between'>
                <button
                  className='mt-2 btn btn-primary btn-sm'
                  onClick={() => handleAddComment(blog.id)}
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
