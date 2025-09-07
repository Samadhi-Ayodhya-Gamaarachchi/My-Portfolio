import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../Types';
import spendsmartImg from '../assets/spendsmart.png';
import HPImage from '../assets/HardwareProjectIamage.jpg'
import PortfolioImage from '../assets/portfolio.png';
import LassanaLanka from '../assets/lassnalanka.png';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Spend Smart',
      description: 'SpendSmart is a financial management platform designed to help users track expenses, analyze spending patterns, and generate insightful reports. Built with React (TypeScript) and ASP.NET Core, it features interactive dashboards, charts, and export options (CSV/PDF) for better financial decision-making.',
      tech: ['React', 'asp.net core', 'MSSQL'],
      image: spendsmartImg,
      github: '#',
      live: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS. Showcases projects, skills, and experience with a clean and modern design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: PortfolioImage,
      github: '#',
      live: '#'
    },
    {
      title: 'Potato Sorting and Measuring Machine',
      description: 'A machine learning project that automates the sorting and measuring of potatoes based on size and weight.',
      tech: ['Arduino Mega 2560', 'ultrasonic sensor', 'wiper motor','load cell','stepper motor ',' TB6600 driver'],
      image: HPImage,
      github: '#',
      live: '#'
    },
    {
      title: 'Lassana Lanka',
      description: 'Lassna Lanka is an IoT-powered Smart Garbage Management System that streamlines waste collection and provides real-time insights for cleaner, sustainable cities in Sri Lanka..',
      tech: ['Figma'],
      image: LassanaLanka,
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-200 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Projects;