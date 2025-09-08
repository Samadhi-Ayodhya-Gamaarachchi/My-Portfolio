import React from 'react';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../Types';
import spendsmartImg from '../assets/SpendSmart.png';
import HPImage from '../assets/HardwareProjectIamage.jpg'
import PortfolioImage from '../assets/portfolio.png';
import LassanaLanka from '../assets/lassnalanka.png'
import Entremate from '../assets/Entremate.png'

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Spend Smart',
      description: 'SpendSmart is a financial management platform designed to help users track expenses, analyze spending patterns, and generate insightful reports. Built with React (TypeScript) and ASP.NET Core, it features interactive dashboards, charts, and export options (CSV/PDF) for better financial decision-making.',
      tech: ['React', 'asp.net core', 'MSSQL'],
      image: spendsmartImg,
      github: 'https://github.com/behan02/Spend-Smart-frontend.git',
      live: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS. Showcases projects, skills, and experience with a clean and modern design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: PortfolioImage,
      github: 'https://github.com/Samadhi-Ayodhya-Gamaarachchi/My-Portfolio.git',
      live: '#'
    },
    {
      title: 'Potato Sorting and Measuring Machine',
      description: 'A machine learning project that automates the sorting and measuring of potatoes based on size and weight.',
      tech: ['Arduino Mega 2560', 'ultrasonic sensor', 'wiper motor','load cell','stepper motor ',' TB6600 driver'],
      image: HPImage,
      live: '#'
    },
    {
      title: 'Lassana Lanka',
      description: 'Lassna Lanka is an IoT-powered Smart Garbage Management System that streamlines waste collection and provides real-time insights for cleaner, sustainable cities in Sri Lanka..',
      tech: ['Figma'],
      image: LassanaLanka,
      live: 'https://www.behance.net/gallery/231517079/Lassana-Lanka'
    },
     {
      title: 'Entremate',
      description: 'EntreMate Lanka is a web platform that empowers social entrepreneurs with profiles, fundraising tools, and campaigns. I contributed to UX/UI design and feature development.',
      tech: ['Figma'],
      image: Entremate,
      
      live: 'https://www.figma.com/proto/BCIJ2U196Ep3jcHRhn6Rny/Entremate-lanka?page-id=0%3A1&node-id=166-480&p=f&viewport=-912%2C-928%2C0.23&t=jOFk39vmVjawXylW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4%3A2'
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
        
       
      </div>
    </section>
  );
}
export default Projects;