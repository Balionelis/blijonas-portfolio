import React from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "QuickNews Web",
      description: "React-powered AI news aggregator leveraging Google Gemini to intelligently curate and rank news articles across diverse topics.",
      technologies: ["React", "TypeScript", "Express"],
      githubLink: "https://github.com/Balionelis/quicknews-web",
      liveLink: "https://quicknews-web.vercel.app/"
    },
    {
      id: 2,
      title: "QuickNews CLI",
      description: "A command-line interface for reading news articles, built with Python.",
      technologies: ["Python"],
      githubLink: "https://github.com/Balionelis/quicknews-cli"
    },
    {
      id: 3,
      title: "Notivo",
      description: "A note sharing platform allowing users to create and share notes with others.",
      technologies: ["React", "JavaScript", "Firebase"],
      githubLink: "https://github.com/Balionelis/Notivo"
    },
    {
      id: 4,
      title: "MovieFinder",
      description: "A website for searching and discovering movies, built with JavaScript, HTML, and CSS.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Balionelis/moviefinder",
      liveLink: "https://moviefinder-lovat.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card reveal fade-right" 
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="skill-item"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;