import React from 'react';
import { SKILLS_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';

const Skills: React.FC = () => {
  return (
    <SectionWrapper title="Skills" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.name} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="bg-indigo-500/20 text-indigo-300 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
