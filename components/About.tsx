import React from 'react';
import SectionWrapper from './SectionWrapper';
import { AcademicCapIcon, BriefcaseIcon, AchievementIcon } from './Icons';


const About: React.FC = () => {
  return (
    <SectionWrapper title="About Me">
      <div className="flex flex-col md:flex-row items-start gap-12 bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <div className="md:w-1/3 flex-shrink-0 mx-auto md:mx-0">
          <img
            src="https://picsum.photos/seed/sibonelo/400/400"
            alt="Sibonelo"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover border-4 border-slate-700 shadow-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-8">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <AcademicCapIcon className="w-7 h-7 text-indigo-400 flex-shrink-0" />
              Education
            </h3>
            <ul className="list-disc list-inside text-slate-400 pl-4 space-y-2">
              <li>Mangosuthu University of Technology</li>
              <li>Sidelille High School</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <BriefcaseIcon className="w-7 h-7 text-indigo-400 flex-shrink-0" />
              Work Experience
            </h3>
            <ul className="list-disc list-inside text-slate-400 pl-4">
              <li>Capaciti Uvu Africa (IT Learnership Demand)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <AchievementIcon className="w-7 h-7 text-indigo-400 flex-shrink-0" />
              Achievements & Certifications
            </h3>
             <ul className="list-disc list-inside text-slate-400 pl-4 space-y-2">
                <li>Diploma in Information Technology (Communication Networks)</li>
                <li>Artificial Intelligence (AI) Bootcamp</li>
                <li>Artificial Intelligence Essentials v2</li>
                <li>Python for Data Science and AI</li>
                <li>Professional Development</li>
            </ul>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;