import React from 'react';
import SectionWrapper from './SectionWrapper';

const GeminiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.065 3.322L5.86 5.861a.999.999 0 00-.86.999v10.278c0 .412.253.784.64.934l8.204 2.539a1 1 0 001.11-.934V4.32a1 1 0 00-.889-.998z" fill="url(#gemini-gradient-1)"/>
    <path d="M14.065 3.322L5.86 5.861a.999.999 0 00-.86.999v10.278c0 .412.253.784.64.934l8.204 2.539a1 1 0 001.11-.934V4.32a1 1 0 00-.889-.998z" fill="url(#gemini-gradient-2)" fillOpacity=".2"/>
    <path d="M15.065 3.322l8.204 2.539a1 1 0 01.64.934v10.278a.999.999 0 01-.86.999l-8.204-2.539a1 1 0 01-.64-.934V4.32a1 1 0 01.889-.998z" fill="url(#gemini-gradient-3)"/>
    <path d="M15.065 3.322l8.204 2.539a1 1 0 01.64.934v10.278a.999.999 0 01-.86.999l-8.204-2.539a1 1 0 01-.64-.934V4.32a1 1 0 01.889-.998z" fill="url(#gemini-gradient-4)" fillOpacity=".2"/>
    <defs>
      <linearGradient id="gemini-gradient-1" x1="5" y1="3" x2="15" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4"/>
        <stop offset="1" stopColor="#9B72CB"/>
      </linearGradient>
      <radialGradient id="gemini-gradient-2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14 4) rotate(90) scale(18)">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="gemini-gradient-3" x1="24" y1="3" x2="14" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4"/>
        <stop offset="1" stopColor="#9B72CB"/>
      </linearGradient>
      <radialGradient id="gemini-gradient-4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 4) rotate(90) scale(18)">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);

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