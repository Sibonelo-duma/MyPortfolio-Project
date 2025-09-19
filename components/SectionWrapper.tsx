import React from 'react';

interface SectionWrapperProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, action }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-x-4 md:gap-x-6">
          <h2 className="text-4xl font-bold text-white relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-indigo-600 rounded-full"></span>
          </h2>
          {action}
        </div>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
