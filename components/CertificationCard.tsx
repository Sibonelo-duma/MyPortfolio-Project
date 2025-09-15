import React, { useState, useEffect } from 'react';
import type { Certification } from '../types';
import { ExternalLinkIcon } from './Icons';

// --- CertificationModal Component ---
interface CertificationModalProps {
  certification: Certification;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ certification, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certification-modal-title"
    >
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
      `}</style>
      
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-lg shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <h2 id="certification-modal-title" className="text-xl font-bold text-white">{certification.title}</h2>
          <div className="flex items-center gap-4">
            {certification.url && certification.url !== '#' && (
              <a 
                href={certification.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 text-sm"
              >
                <ExternalLinkIcon className="w-5 h-5" />
                View
              </a>
            )}
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors" aria-label="Close certificate viewer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <div className="flex-grow flex items-center justify-center p-4 overflow-auto">
          <img src={certification.imageUrl} alt={`Certificate for ${certification.title}`} className="max-w-full max-h-full object-contain rounded-md" />
        </div>
      </div>
    </div>
  );
};
// --- End of CertificationModal Component ---


const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isClickable = certification.url && certification.url !== '#';

  const handleCardClick = () => {
    if (isClickable) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10 hover:-translate-y-1 group ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={handleCardClick}
        onKeyDown={(e) => { if (isClickable && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); handleCardClick(); } }}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : -1}
        aria-label={isClickable ? `View certificate for ${certification.title}` : undefined}
      >
        <div className="relative aspect-video bg-slate-900 overflow-hidden">
           <img src={certification.imageUrl} alt={`Certificate for ${certification.title}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
           <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold bg-indigo-600/80 px-4 py-2 rounded-md flex items-center gap-2">
                <ExternalLinkIcon className="w-5 h-5" />
                 {isClickable ? 'View Certificate' : 'Details Coming Soon'}
              </span>
           </div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-white flex-grow">
            {certification.title}
            <span className="block text-base font-normal text-slate-400">{certification.subtitle}</span>
          </h3>
          <p className="text-sm text-slate-400 mt-2 pt-3 border-t border-slate-700">
            <span className="font-semibold text-slate-300">{certification.issuer}</span> &bull; {certification.date}
          </p>
        </div>
      </div>
      
      {isModalOpen && isClickable && (
        <CertificationModal 
          certification={certification} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default CertificationCard;