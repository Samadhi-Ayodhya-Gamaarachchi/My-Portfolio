import React from "react";
import { ChevronDown } from "lucide-react";
import homeImage from "../assets/homeImage.png";
import resume from "../assets/CV/resume.pdf"

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center h-full">
          {/* Left Text Section */}
          <div className="order-2 md:order-1 flex flex-col justify-center space-y-3 md:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-indigo-600">Samadhi Gamaarachchi</span>
            </h1>
                       
            <p className="text-base sm:text-lg md:text-2xl text-gray-200">
              Full Stack Developer & UI/UX Designer
            </p>
                       
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium text-sm md:text-base"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-600 text-indigo-600 px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 font-medium text-sm md:text-base"
              >
                Get In Touch
              </a>
            </div>
          </div>
                   
          {/* Right Image Section */}
          <div className="order-1 md:order-2 flex justify-center mt-10 md:mt-0">
            <img
              src={homeImage}
              alt="Samadhi Gamaarachchi - Portfolio Profile"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-4/5 md:h-4/5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Only show on larger screens */}
      <div className="hidden md:block pb-8">
        <ChevronDown className="w-8 h-8 mx-auto text-indigo-400 animate-bounce" />
      </div>
      
      {/* Mobile scroll indicator - smaller and positioned better */}
      <div className="md:hidden pb-4">
        <ChevronDown className="w-6 h-6 mx-auto text-indigo-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;