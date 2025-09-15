
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import AddProjectModal from './AddProjectModal';
import { PlusIcon } from './Icons';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProject = (newProject: Project) => {
    setProjects([newProject, ...projects]);
    setIsModalOpen(false);
  };

  return (
    <>
      <SectionWrapper 
        title="Featured Projects"
        action={
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center gap-2 text-sm"
            aria-label="Add new project"
          >
            <PlusIcon className="w-5 h-5" />
            Add Project
          </button>
        }
      >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
              ))}
          </div>
      </SectionWrapper>
      {isModalOpen && (
        <AddProjectModal 
          onSave={handleAddProject}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Projects;