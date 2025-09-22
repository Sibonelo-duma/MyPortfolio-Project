import React from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon, CheckCircleIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10 hover:-translate-y-1"
      role="region"
      aria-label={`Project: ${project.title}`}
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          {project.icon}
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-slate-400 mb-4 text-sm flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-slate-200 text-sm mb-2">AI Used:</h4>
          <ul className="text-slate-400 text-sm list-disc list-inside space-y-1">
            {project.aiUsed.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-slate-200 text-sm mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="bg-sky-500/20 text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-3 mt-4 text-sm bg-green-900/30 p-3 rounded-md">
           <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
           <p className="text-green-300"><span className="font-bold">Result:</span> {project.result}</p>
        </div>

      </div>

      <div className="bg-slate-800 p-4 mt-auto flex justify-end space-x-4 border-t border-slate-700">
        <a 
          href={project.demoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors font-medium text-sm"
          aria-label={`View demo for ${project.title}`}
        >
          <ExternalLinkIcon className="w-4 h-4"/> Demo
        </a>
        <a 
          href={project.codeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors font-medium text-sm"
          aria-label={`View source code for ${project.title}`}
        >
          <GithubIcon className="w-4 h-4"/> Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
