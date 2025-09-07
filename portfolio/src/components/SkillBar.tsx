import React from 'react';
import type { Skill } from '../Types/index';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-gray-700 font-medium">{skill.name}</span>
      <span className="text-gray-600">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div 
        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);
export default SkillBar;
