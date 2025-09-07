import React from 'react';
import SkillCategory from '../components/SkillCategory';
import type { Skill } from '../Types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React/Next.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    { name: 'Node.js', level: 82, category: 'backend' },
    { name: 'Python', level: 78, category: 'backend' },
    { name: 'PostgreSQL', level: 75, category: 'backend' },
    { name: 'Git/GitHub', level: 92, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 73, category: 'tools' }
  ];

  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={skillCategories.frontend} />
          <SkillCategory title="Backend" skills={skillCategories.backend} />
          <SkillCategory title="Tools & Others" skills={skillCategories.tools} />
        </div>
      </div>
    </section>
  );
}
export default Skills;