import {
  Users,
  Code,
  Lightbulb,
  Handshake,
  GraduationCap,
  Briefcase,
  Calendar,
} from 'lucide-react';
import Home from './Home';
import Register from './Register';
import About from './About';
import Login from './Login';
import Blogs from './Blogs';
import Profile from './Profile';
import Footer from './Footer';
import Navbar from './Navbar';
import BlogsByEachUser from './BlogsByEachUser';
import AboutEachUser from './AboutEachUser';
// import SingleProfile from './SingleProfile';
import CreateBlog from './CreateBlog';
import UpdateBlog from './UpadateBlog';
import EditProfile from './EditProfile';
import NotFound from './NotFound';
export const nav_links = [
  'Programming',
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Blockchain',
  'Crypto Currency',
];

export {
  Home,
  Register,
  About,
  Login,
  Blogs,
  Profile,
  Footer,
  Navbar,
  BlogsByEachUser,
  AboutEachUser,
  CreateBlog,
  UpdateBlog,
  EditProfile,
  NotFound,
};

export const features = [
  {
    title: 'Share Knowledge',
    icon: Users,
    text: 'We aim to create a platform where programmers can share their knowledge and resources.',
  },
  {
    title: 'Collaborate on Projects',
    icon: Code,
    text: 'Our forum encourages collaboration on projects to enhance learning and innovation.',
  },
  {
    title: 'Enhance Skills',
    icon: Lightbulb,
    text: 'We provide workshops and tutorials to help programmers enhance their skills.',
  },
  {
    title: 'Network with Professionals',
    icon: Handshake,
    text: 'Network with industry professionals and stay updated with the latest trends in technology.',
  },
];

export const mentorship = [
  {
    title: 'Guidance from Experts',
    icon: GraduationCap,
    text: 'Get direct mentorship from experienced software engineers and industry leaders.',
  },
  {
    title: 'Career Development',
    icon: Briefcase,
    text: 'Receive career advice, resume reviews, and job interview preparation from professionals.',
  },
  {
    title: 'Scheduled Mentorship Sessions',
    icon: Calendar,
    text: 'Participate in structured mentorship sessions designed to help you grow in tech.',
  },
];
