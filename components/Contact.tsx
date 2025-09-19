import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EmailIcon, PhoneIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <SectionWrapper title="Get In Touch" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-slate-400 mb-12">
          I'm currently looking for new opportunities. If you have a project in mind or just want to connect, feel free to reach out through any of the channels below. I'm excited to hear from you!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-lg bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <a href="mailto:sibonelod28@gmail.com" className="group flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors">
              <EmailIcon className="w-7 h-7 text-slate-400 group-hover:text-indigo-400 transition-colors"/>
              <span className="font-medium">sibonelod28@gmail.com</span>
          </a>
          <a href="tel:+27614740740" className="group flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors">
              <PhoneIcon className="w-7 h-7 text-slate-400 group-hover:text-indigo-400 transition-colors"/>
              <span className="font-medium">061 474 0740</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
