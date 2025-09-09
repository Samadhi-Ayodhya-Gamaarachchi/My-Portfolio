import React from "react";
import { ChevronDown } from "lucide-react";
import homeImage from "../assets/homeImage.png";
import resume from "../assets/CV/resume.pdf"

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-0 pt-0 pb-10 text-center -mt-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <div className="mt-40">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span className="text-indigo-600">Samadhi Gamaarachchi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-center gap-4 mb-12">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src={homeImage}
              alt="Samadhi Gamaarachchi - Portfolio Profile"
              className="w-4/5 h-4/5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <ChevronDown className="w-8 h-8 mx-auto text-indigo-400 animate-bounce mt-12" />
      </div>
    </section>
  );
};

export default Hero;