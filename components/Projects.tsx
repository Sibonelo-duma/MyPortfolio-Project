
import React, { useState } from 'react';
import { PROJECTS as initialProjects } from '../constants';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import AddProjectModal from './AddProjectModal';
import { PlusIcon } from './Icons';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveProject = (newProject: Project) => {
    setProjects(prevProjects => [newProject, ...prevProjects]);
    setIsModalOpen(false);
  };

  const AddProjectButton = (
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg"
      aria-label="Add new project"
    >
      <PlusIcon className="w-5 h-5" />
    </button>
  );

  return (
    <>
      <SectionWrapper title="Featured Projects" id="projects" action={AddProjectButton}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
              ))}
          </div>
      </SectionWrapper>
      {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} onSave={handleSaveProject} />}
    </>
  );
};

export default Projects;
