import React, { useState, useEffect, useCallback } from 'react';
import type { Project } from '../types';

// --- MediaModal Component ---
interface MediaModalProps {
  media: NonNullable<Project['media']>;
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({ media, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  }, [media.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  }, [media.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      else if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'Escape') onClose();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext, onClose]);

  const currentMedia = media[currentIndex];

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project media viewer"
    >
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
      `}</style>
      
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-lg shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-grow flex items-center justify-center p-4">
          {currentMedia.type === 'image' && (
            <img src={currentMedia.url} alt={currentMedia.alt} className="max-w-full max-h-[75vh] object-contain rounded-md" />
          )}
          {currentMedia.type === 'video' && (
            <video src={currentMedia.url} controls autoPlay className="max-w-full max-h-[75vh] object-contain rounded-md">
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="flex-shrink-0 p-3 text-center text-sm text-slate-300 bg-black/30 border-t border-slate-700">
          <p>{currentMedia.alt}</p>
          <p className="font-semibold mt-1 text-slate-400">{currentIndex + 1} / {media.length}</p>
        </div>
      </div>
      
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-indigo-400 transition-colors z-10" aria-label="Close media viewer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {media.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-indigo-500/50 transition-all" aria-label="Previous media">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={goToNext} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-indigo-500/50 transition-all" aria-label="Next media">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
// --- End of MediaModal Component ---


interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const ImageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm16.5-1.5-5.159-5.159a2.25 2.25 0 0 0-3.182 0L6.75 15.75m11.25-11.25h.008v.008h-.008V4.5Z" />
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasMedia = project.media && project.media.length > 0;

  return (
    <>
      <div 
        className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10 hover:-translate-y-1"
        role="region"
        aria-label={`Project: ${project.title}`}
      >
        <div className="relative group aspect-video bg-slate-900 overflow-hidden">
          {hasMedia ? (
            <>
              <img src={project.media[0].url} alt={project.media[0].alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <button 
                onClick={() => setIsModalOpen(true)}
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                aria-label={`View media for ${project.title}`}
              >
                <span className="text-white font-bold bg-indigo-600/80 px-4 py-2 rounded-md">View Gallery</span>
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-600">
              <ImageIcon className="w-12 h-12 mb-2" />
              <span className="text-sm">No Media Available</span>
            </div>
          )}
        </div>
        
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
      
      {isModalOpen && hasMedia && (
        <MediaModal 
          media={project.media} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default ProjectCard;