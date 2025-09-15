import React from 'react';
import SectionWrapper from './SectionWrapper';
import { GeminiIcon } from './Icons';

const Meta: React.FC = () => {
  return (
    <SectionWrapper title="About This Portfolio">
      <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
            <GeminiIcon />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Crafted with AI Assistance</h3>
          {/* FIX: Updated "Gemini Pro" to "Google Gemini" to align with guidelines. */}
          <p className="text-slate-400 leading-relaxed mb-4">
            This entire portfolio was built with the help of Google's Gemini. I provided the prompts, requirements, and guidance, and Gemini generated the React components, TypeScript types, and Tailwind CSS styles. This project demonstrates my ability to effectively use AI as a development partner to accelerate the creation of clean, modern, and responsive user interfaces.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">React</span>
            <span className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">TypeScript</span>
            <span className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">Tailwind CSS</span>
            {/* FIX: Updated "Gemini Pro" to "Google Gemini" to align with guidelines. */}
            <span className="bg-purple-500/20 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">Google Gemini</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Meta;