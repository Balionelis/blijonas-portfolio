import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p className="reveal fade-left">
          I'm a 17-year-old high school student from Lithuania with a passion for coding and technology. 
          I've been programming since 2020, constantly learning and building projects to improve my skills.
        </p>
        <p className="reveal fade-left" style={{ transitionDelay: '100ms' }}>
          My journey in programming started with Python, and I've since expanded my knowledge to include 
          JavaScript, React, TypeScript, C++, HTML, and CSS. I enjoy building web applications and command-line tools.
        </p>
      </div>
    </section>
  );
};

export default About;