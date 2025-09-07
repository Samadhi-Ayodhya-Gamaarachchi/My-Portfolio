import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    {href:'#achivements',label:'Achivements'},
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },

  ];

  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
          Samadhi Gamaarachchi
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="hover:text-indigo-600 transition-colors duration-200 text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;