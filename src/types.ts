export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }