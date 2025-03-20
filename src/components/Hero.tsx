import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      textAlign: 'center',
      marginBottom: '2rem'
    }}>
      <div className="reveal fade-bottom">
        <h1 style={{ marginBottom: '1.5rem' }}>Hi, I'm a Developer</h1>
        <p style={{ maxWidth: '600px', marginBottom: '2rem', fontSize: '1.2rem' }}>
          I'm a 17-year-old high school student from Lithuania who loves coding and building cool stuff with technology.
        </p>
        <div>
          <a href="#projects" className="btn">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;