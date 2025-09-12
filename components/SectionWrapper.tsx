import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <section className="py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-indigo-600 rounded-full"></span>
        </h2>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;