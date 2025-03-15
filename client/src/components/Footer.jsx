import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='py-8 text-base-content bg-base-300'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap justify-between'>
          {/* About Section */}
          <div className='w-full mb-6 md:w-1/3 md:mb-0'>
            <h2 className='text-2xl font-bold'>Kano Programmers Forum</h2>
            <p className='text-sm text-gray-500'>
              Join our community of programmers and enhance your skills.
            </p>
          </div>

          {/* Quick Links */}
          <div className='w-full mb-6 md:w-1/3 md:mb-0'>
            <h3 className='text-xl font-bold'>Quick Links</h3>
            <ul className='mt-2 space-y-2'>
              <li>
                <Link to='/' className='link link-hover'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/register' className='link link-hover'>
                  Register
                </Link>
              </li>
              <li>
                <Link to='/about' className='link link-hover'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='link link-hover'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-bold'>Follow Us</h3>
            <div className='flex mt-2 space-x-4'>
              <a
                href='https://facebook.com'
                className='text-gray-500 hover:text-primary'
              >
                <Facebook size={20} />
              </a>
              <a
                href='https://twitter.com'
                className='text-gray-500 hover:text-primary'
              >
                <Twitter size={20} />
              </a>
              <a
                href='https://linkedin.com'
                className='text-gray-500 hover:text-primary'
              >
                <Linkedin size={20} />
              </a>
              <a
                href='https://github.com'
                className='text-gray-500 hover:text-primary'
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 text-sm text-center text-gray-500'>
          <p>
            &copy; {new Date().getFullYear()} Kano Programmers Forum. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
