import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import { BookIcon } from './Icons';
import Modal from './Modal';

interface AddProjectModalProps {
  onClose: () => void;
  onSave: (project: Project) => void;
}

const FormInput: React.FC<{id: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, required?: boolean, isTextArea?: boolean}> = 
  ({ id, label, value, onChange, required, isTextArea }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
    {isTextArea ? (
      <textarea id={id} value={value} onChange={onChange} required={required} rows={3} className="w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
    ) : (
      <input type="text" id={id} value={value} onChange={onChange} required={required} className="w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
    )}
  </div>
);


const AddProjectModal: React.FC<AddProjectModalProps> = ({ onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [aiUsed, setAiUsed] = useState('');
    const [techStack, setTechStack] = useState('');
    const [demoUrl, setDemoUrl] = useState('');
    const [codeUrl, setCodeUrl] = useState('');
    const [result, setResult] = useState('');
    
    const [isFormValid, setIsFormValid] = useState(false);
    
    useEffect(() => {
        setIsFormValid(title.trim() !== '' && description.trim() !== '' && result.trim() !== '');
    }, [title, description, result]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        const newProject: Project = {
          title,
          description,
          result,
          demoUrl: demoUrl || '#',
          codeUrl: codeUrl || '#',
          aiUsed: aiUsed.split(',').map(s => s.trim()).filter(Boolean),
          techStack: techStack.split(',').map(s => s.trim()).filter(Boolean),
          icon: <BookIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
          media: []
        };
        onSave(newProject);
    };

    return (
        <Modal title="Add New Project" onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput id="title" label="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <FormInput id="description" label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required isTextArea/>
              <FormInput id="result" label="Result" value={result} onChange={(e) => setResult(e.target.value)} required isTextArea/>
              <FormInput id="aiUsed" label="AI Used (comma-separated)" value={aiUsed} onChange={(e) => setAiUsed(e.target.value)} />
              <FormInput id="techStack" label="Tech Stack (comma-separated)" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
              <FormInput id="demoUrl" label="Demo URL" value={demoUrl} onChange={(e) => setDemoUrl(e.target.value)} />
              <FormInput id="codeUrl" label="Code URL" value={codeUrl} onChange={(e) => setCodeUrl(e.target.value)} />

              <footer className="flex justify-end gap-4 pt-4">
                  <button type="button" onClick={onClose} className="bg-slate-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-slate-600 transition-all duration-300">
                      Cancel
                  </button>
                  <button type="submit" disabled={!isFormValid} className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 disabled:bg-indigo-800 disabled:text-slate-400 disabled:cursor-not-allowed">
                      Save Project
                  </button>
              </footer>
            </form>
        </Modal>
    );
};

export default AddProjectModal;
