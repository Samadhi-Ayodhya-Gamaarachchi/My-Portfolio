import React from 'react';
import logoNav from '../assets/logoNav.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <img src={logoNav} alt="Logo" className="mx-auto mb-4" />
          <p className="text-gray-400 mb-6">Full Stack Developer & UI/UX Designer</p>
          
         
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              &copy; 2025 Samadhi Gamaarachchi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;