import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gerenciamento de Tarefas',
    description: 'Um aplicativo web completo para gerenciamento de tarefas com React e TypeScript.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxwcm9ncmFtbWluZyUyMHRhc2tzfGVufDB8fHx8MTY4MTAzMTQ4Nw&ixlib=rb-4.0.3&q=80&w=400',
    githubUrl: 'https://github.com/example/task-manager',
    demoUrl: 'https://task-manager-demo.netlify.app',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 2,
    title: 'API de E-commerce',
    description: 'Uma API RESTful completa para e-commerce com Node.js e Express.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9ncmFtbWluZyUyMGFwaXxlbnwwfHx8fDE2ODEwMzE0ODc&ixlib=rb-4.0.3&q=80&w=400',
    githubUrl: 'https://github.com/example/ecommerce-api',
    demoUrl: '',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    id: 3,
    title: 'Chat em Tempo Real',
    description: 'Aplicação de chat em tempo real usando WebSocket.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxwcm9ncmFtbWluZyUyMGNoYXR8ZW58MHx8fHwxNjgxMDMxNDg3&ixlib=rb-4.0.3&q=80&w=400',
    githubUrl: 'https://github.com/example/real-time-chat',
    demoUrl: 'https://real-time-chat-demo.netlify.app',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
  },
  {
    id: 4,
    title: 'Plataforma de Aprendizado Online',
    description: 'Um sistema de aprendizado online com gamificação e personalização.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDUwfHxwcm9ncmFtbWluZyUyMGRhc2hib2FyZHxlbnwwfHx8fDE2ODEwMzE0ODc&ixlib=rb-4.0.3&q=80&w=400',
    githubUrl: 'https://github.com/example/learning-platform',
    demoUrl: 'https://learning-platform-demo.netlify.app',
    technologies: ['Vue.js', 'Firebase', 'Node.js', 'Bootstrap'],
  },
  {
    id: 5,
    title: 'Dashboard Financeiro',
    description: 'Painel de controle para gerenciamento financeiro com análises interativas.',
    image: 'https://images.unsplash.com/photo-1564865877533-4c6b22ee9a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDY2fHxkYXNoYm9hcmR8ZW58MHx8fHwxNjgxMDMxNDg3&ixlib=rb-4.0.3&q=80&w=400',
    githubUrl: 'https://github.com/example/finance-dashboard',
    demoUrl: '',
    technologies: ['Angular', 'Highcharts', 'Node.js', 'PostgreSQL'],
  },
];
