import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { features, mentorship } from '../components/index';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen bg-base-200'>
      <main className='grow'>
        {/* 🌟 Hero Section */}
        <section className='flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-primary'>
          <motion.h1
            className='mb-6 text-4xl font-bold text-center md:text-5xl'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Kano Programmers Forum
          </motion.h1>
          <motion.p
            className='mb-8 text-xl text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover amazing resources and connect with fellow programmers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to='/register' className='btn btn-accent'>
              Join Now
            </Link>
          </motion.div>
        </section>

        {/* 🎯 Goals Section */}
        <section className='flex flex-col items-center justify-center w-full max-w-5xl min-h-screen px-8 py-12 mx-auto'>
          <h2 className='mb-6 text-3xl font-bold text-center text-primary'>
            Our Goals
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {features.map((goal, index) => (
              <motion.div
                key={goal.title}
                className='p-6 text-center rounded-lg shadow-lg bg-base-100'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10'>
                  <goal.icon size={32} className='text-primary' />
                </div>
                <h3 className='mb-4 text-xl font-bold'>{goal.title}</h3>
                <p className='text-base-content'>{goal.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🎓 Mentorship Section */}
        <section className='flex flex-col items-center justify-center w-full max-w-5xl min-h-screen px-8 py-12 mx-auto'>
          <h2 className='mb-6 text-3xl font-bold text-center text-primary'>
            Mentorship Program
          </h2>
          <p className='mb-8 text-lg text-center text-gray-700 dark:text-base-content'>
            Our mentorship program is designed to help you grow your technical
            skills, get career advice, and connect with experienced
            professionals.
          </p>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {mentorship.map((item, index) => (
              <motion.div
                key={item.title}
                className='p-6 text-center rounded-lg shadow-lg bg-base-100'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10'>
                  <item.icon size={32} className='text-secondary' />
                </div>
                <h3 className='mb-4 text-xl font-bold'>{item.title}</h3>
                <p className='text-base-content'>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
