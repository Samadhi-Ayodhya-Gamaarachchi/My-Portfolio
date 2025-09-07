import React from 'react';
import Navbar from '../components/NavBar';
import Hero from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer';
import GalaxyBackground from '../components/GalaxyBackground';
import Achivements from './Achivements';


const Portfolio: React.FC = () => {
  return (
    <div className="portfolio relative">
    <GalaxyBackground/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achivements/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
