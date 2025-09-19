import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
  { page: 'home', label: 'Home', href: '#home' },
  { page: 'projects', label: 'Projects', href: '#projects' },
  { page: 'skills', label: 'Skills', href: '#skills' },
  { page: 'about', label: 'About', href: '#about' },
  { page: 'certifications', label: 'Certifications', href: '#certifications' },
  { page: 'contact', label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef<IntersectionObserver | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (observer.current) {
        observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, { 
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });

    const sections = navLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => {
        if (section) {
            observer.current?.observe(section);
        }
    });
    
    return () => {
        observer.current?.disconnect();
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
            Sibonelo
          </a>
          <nav>
            <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <a 
                    href={link.href}
                    className={`text-xs sm:text-sm md:text-base font-medium transition-colors ${activeSection === link.page ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;