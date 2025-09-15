import React from 'react';
import { DownloadIcon } from './Icons';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="text-center max-w-4xl">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-20"></div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight relative">
            Hi, I’m Sibonelo Duma
          </h1>
        </div>
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
          Dedicated and motivated Information Technology candidate seeking an internship or permanent opportunity to apply theoretical knowledge and gain practical experience in software development, networking, or Artificial Intelligence and Machine Learning development. Eager to contribute to a dynamic team and learn valuable skills in a professional setting.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate('projects')}
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/20">
            View My Work
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-700 text-white font-semibold px-8 py-3 rounded-md hover:bg-slate-600 transition-all duration-300"
          >
            Get In Touch
          </button>
           <a
            href="https://capeitinitiative-my.sharepoint.com/:b:/g/personal/sibonelo_duma_capaciti_org_za/ET3wv4wVpPdLhidbN-R-W5gBsF91eCdmKyVnOdBUCFtvUw?e=kf4omR"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-600 text-slate-300 font-semibold px-8 py-3 rounded-md hover:bg-slate-700 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <DownloadIcon className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;