import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../Types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, shopping cart, and secure payment processing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool built with Next.js and PostgreSQL. Includes real-time updates, team collaboration, and progress tracking.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts using modern APIs.',
      tech: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
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