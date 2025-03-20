import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Express", "Node.js"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "NPM", "Firebase", "Vercel", "Figma", "Linux"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-category reveal" 
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h3>{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item, i) => (
                <span 
                  key={i} 
                  className="skill-item"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;