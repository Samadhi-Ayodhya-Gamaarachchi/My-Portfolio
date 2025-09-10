export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface ContactFormData {
  name: string;
  email: string;
  title: string;
  message: string;
}