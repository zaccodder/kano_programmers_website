const SingleProfile = ({ icon, text }) => {
  return (
    <div className='flex items-center space-x-2'>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SingleProfile;
