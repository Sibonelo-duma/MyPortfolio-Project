import React from 'react';
import type { Certification } from '../types';
import { ExternalLinkIcon } from './Icons';

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
  const hasUrl = certification.url && certification.url !== '#';

  return (
    <div
      className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10 hover:-translate-y-1 group"
    >
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-white flex-grow">
          {certification.title}
          <span className="block text-base font-normal text-slate-400">{certification.subtitle}</span>
        </h3>
        <p className="text-sm text-slate-400 mt-2 pt-3 border-t border-slate-700">
          <span className="font-semibold text-slate-300">{certification.issuer}</span> &bull; {certification.date}
        </p>
      </div>
      
      {hasUrl && (
        <div className="bg-slate-800 p-4 mt-auto flex justify-end border-t border-slate-700">
            <a 
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 group-hover:text-indigo-400 transition-colors font-medium text-sm">
                <ExternalLinkIcon className="w-4 h-4"/> View Certificate
            </a>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;