import React, { useState, useEffect } from 'react';
import logoNav from '../assets/logoNav.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logoNav} 
            alt="Samadhi Gamaarachchi Logo" 
            className="h-15 w-100 object-contain hover:scale-110 transition-transform duration-300" 
          />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleLinkClick(item.href)}
                  className={`relative py-2 px-1 font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-indigo-400' 
                      : 'text-gray-200 hover:text-indigo-400'
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-200 hover:text-indigo-400 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="space-y-1.5">
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className={`w-full text-left px-6 py-3 font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-indigo-400 bg-indigo-400/10 border-r-2 border-indigo-400'
                        : 'text-gray-200 hover:text-indigo-400 hover:bg-gray-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;