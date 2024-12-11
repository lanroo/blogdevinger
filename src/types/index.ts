export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}