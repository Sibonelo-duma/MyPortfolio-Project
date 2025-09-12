import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const handleNavClick = (page: string) => {
      onNavigate(page);
      setIsMenuOpen(false);
  };

  const navLinks = [
    { page: 'home', label: 'Home' },
    { page: 'projects', label: 'Projects' },
    { page: 'skills', label: 'Skills' },
    { page: 'about', label: 'About' },
    { page: 'certifications', label: 'Certifications' },
    { page: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex justify-between items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
              Sibonelo
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none z-50 relative" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {isMenuOpen && (
          <div className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center">
              <style>{`
                  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                  .animate-fade-in { animation: fade-in 0.3s ease-out; }
                  @keyframes slide-in-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                  .animate-slide-in-up { animation: slide-in-up 0.5s ease-out forwards; }
              `}</style>
              <nav className="animate-fade-in">
                  <ul className="flex flex-col items-center space-y-8">
                  {navLinks.map((link, index) => (
                      <li 
                        key={link.page} 
                        className="opacity-0 animate-slide-in-up" 
                        style={{ animationDelay: `${100 + index * 100}ms`}}
                      >
                      <a 
                          href="#"
                          onClick={(e) => { e.preventDefault(); handleNavClick(link.page); }}
                          className={`text-3xl font-bold transition-colors ${currentPage === link.page ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'}`}
                      >
                          {link.label}
                      </a>
                      </li>
                  ))}
                  </ul>
              </nav>
          </div>
      )}
    </>
  );
};

export default Header;