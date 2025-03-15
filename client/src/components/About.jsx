import { Users, Code, Lightbulb, Handshake } from 'lucide-react';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-base-200'>
      <h1 className='mb-6 text-4xl font-bold text-center text-primary md:text-5xl'>
        About Kano Programmers Forum
      </h1>
      <p className='max-w-2xl mb-8 text-lg text-center text-base-content'>
        Kano Programmers Forum is a community of passionate programmers
        dedicated to sharing knowledge, collaborating on projects, and enhancing
        skills. Our mission is to create a vibrant community where programmers
        can connect, learn, and grow together.
      </p>

      {/* Features Section */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {[
          {
            icon: Users,
            title: 'Community',
            desc: 'Join a network of like-minded programmers and grow together.',
          },
          {
            icon: Code,
            title: 'Projects',
            desc: 'Work on exciting projects and improve your coding skills.',
          },
          {
            icon: Lightbulb,
            title: 'Innovation',
            desc: 'Stay updated with the latest trends in technology.',
          },
          {
            icon: Handshake,
            title: 'Collaboration',
            desc: 'Team up with others to achieve common goals.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className='p-6 text-center rounded-lg shadow-lg bg-base-100'
          >
            <item.icon className='mx-auto mb-4 text-4xl text-primary' />
            <h3 className='mb-2 text-xl font-bold'>{item.title}</h3>
            <p className='text-base-content'>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Founders Section */}
      <h2 className='mt-16 mb-6 text-3xl font-bold text-center text-primary md:text-4xl'>
        Meet Our Founders
      </h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className='p-6 text-center rounded-lg shadow-lg bg-base-100'
          >
            <img
              src={`/path-to-founder${num}-photo.jpg`}
              alt={`Founder ${num}`}
              className='w-32 h-32 mx-auto mb-4 rounded-full'
            />
            <h3 className='mb-2 text-xl font-bold text-base-content'>
              Founder {num}
            </h3>
            <p className='text-base-content'>
              Founder {num} is a skilled developer with a passion for
              innovation.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
