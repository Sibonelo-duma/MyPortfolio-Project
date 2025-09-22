import React, { useState } from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon, CheckCircleIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const hasMedia = project.media && project.media.length > 0;
  const hasMultipleMedia = hasMedia && project.media.length > 1;
  const currentMedia = hasMedia ? project.media[currentMediaIndex] : null;

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % project.media!.length);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + project.media!.length) % project.media!.length);
  };

  return (
    <div 
      className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10 hover:-translate-y-1"
      role="region"
      aria-label={`Project: ${project.title}`}
    >
      {currentMedia && (
        <div className="relative aspect-video bg-slate-900 group/media">
          {currentMedia.type === 'image' ? (
            <img src={currentMedia.url} alt={currentMedia.alt} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <video src={currentMedia.url} controls muted loop className="w-full h-full object-cover">
              Your browser does not support the video tag.
            </video>
          )}

          {hasMultipleMedia && (
            <>
              {/* Previous Button */}
              <button 
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Previous media"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Next Button */}
              <button 
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Next media"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {project.media!.map((_, index) => (
                  <button 
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentMediaIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-colors ${currentMediaIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                    aria-label={`Go to media ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

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