import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../Types/index';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {project.github && (
          <a 
            href={project.github}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
          >
            <Github size={18} />
            Code
          </a>
        )}
        {project.live && (
          <a 
            href={project.live}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);
export default ProjectCard;