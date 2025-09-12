import React from 'react';
import SectionWrapper from './SectionWrapper';

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25-2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);

const Contact: React.FC = () => {
  return (
    <SectionWrapper title="Get In Touch">
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