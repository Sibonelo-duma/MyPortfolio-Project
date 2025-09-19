import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Meta from './components/Meta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A101F] flex flex-col">
      <Header />
      <main className="container mx-auto px-6 md:px-12 flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Certifications />
        <Contact />
        <Meta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
