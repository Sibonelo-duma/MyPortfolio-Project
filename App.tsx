import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Meta from './components/Meta';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0A101F] flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="container mx-auto px-6 md:px-12 flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <Meta />
          </>
        )}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'skills' && <Skills />}
        {currentPage === 'about' && <About />}
        {currentPage === 'certifications' && <Certifications />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;