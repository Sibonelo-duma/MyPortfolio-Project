
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const Projects: React.FC = () => {
  return (
    <SectionWrapper title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </SectionWrapper>
  );
};

export default Projects;
