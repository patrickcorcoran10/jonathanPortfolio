import { Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutMe />} />  
        <Route path='/hero' element={<Hero />} />  
        <Route path='/portfolio' element={<Portfolio />} />  
        <Route path='/contact' element={<Contact />} />  
        <Route path='/resume' element={<Resume />} />  
      </Routes>
      <Footer />
    </>
  );
}

/*
Navbar (HERO)
  Jonathan Parker
  NavLink
    About Me (HOMEPAGE) (HERO)
      Photo
      Short Bio
    Portfolio
      Project (x6)
    Contact
      Form with Fields for Name, Email, Message
    Resume
      Downloadable Resume
      List of Proficiencies
Content
Footer
  Text or Icon Links to GitHub, LinkedIn, & Stack Overflow or Twitter
*/