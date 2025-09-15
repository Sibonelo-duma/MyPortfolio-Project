import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12 py-8 text-center text-slate-500">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <GithubIcon className="w-6 h-6"/>
                    </a>
                    <a href="https://linkedin.com/in/sibonelo-duma-355b56236" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <LinkedinIcon className="w-6 h-6"/>
                    </a>
                </div>
                <p className="text-sm">
                &copy; {new Date().getFullYear()} Sibonelo. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;