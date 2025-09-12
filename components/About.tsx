import React from 'react';
import SectionWrapper from './SectionWrapper';

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-2.072a1.125 1.125 0 0 1 0-1.59l.31-.31a1.125 1.125 0 0 1 1.59 0l2.072 2.072m15.482 0l2.072-2.072a1.125 1.125 0 0 0 0-1.59l-.31-.31a1.125 1.125 0 0 0-1.59 0l-2.072 2.072m-15.482 0A12.016 12.016 0 0 1 12 6.342a12.016 12.016 0 0 1 6.928 3.805" />
    </svg>
);

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25v-4.07M20.25 14.15v-4.88a2.25 2.25 0 0 0-2.25-2.25h-12a2.25 2.25 0 0 0-2.25 2.25v4.88m16.5 0v-4.88a2.25 2.25 0 0 0-2.25-2.25h-12a2.25 2.25 0 0 0-2.25 2.25v4.88m16.5 0h-16.5m16.5 0a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25h-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 2.25 2.25h1.5m-16.5 0h16.5" />
    </svg>
);

const AchievementIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.31h5.418a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-3.35a.563.563 0 0 0-.586 0L6.982 21.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988H8.88a.563.563 0 0 0 .475-.31L11.48 3.5Z" />
    </svg>
);


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