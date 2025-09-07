import React from 'react';
import SkillBar from './SkillBar';
import type { Skill } from '../Types/index.ts';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{title}</h3>
    {skills.map((skill, index) => (
      <SkillBar key={index} skill={skill} />
    ))}
  </div>
);
export default SkillCategory;