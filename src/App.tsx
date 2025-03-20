import React, { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const scrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const sections = document.querySelectorAll('.section');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementHeight = reveals[i].getBoundingClientRect().height;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible || 
            elementTop + elementHeight < windowHeight + elementVisible) {
          reveals[i].classList.add('active');
        }
      }
      
      for (let i = 0; i < sections.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = sections[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          sections[i].classList.add('visible');
        }
      }
    };
    
    window.addEventListener('scroll', scrollReveal);
    scrollReveal();
    
    setTimeout(scrollReveal, 300);
    
    return () => {
      window.removeEventListener('scroll', scrollReveal);
    };
  }, []);
  
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <Analytics/>
    </div>
  );
};

export default App;