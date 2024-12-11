export type Course = {
    title: string;
    lessons: string;
    level: string;
    bonuses: string;
    certified: string;
    price: string;
    professor: string;
    link: string;
    color: string;
    tagColor: string;
  };
  
  // Lista de cursos
  export const tableCourses: Course[] = [
    {
      title: 'CURSO EM VIDEO (Gustavo Guanabara)',
      lessons: '+2.500 aulas',
      level: 'Básico ao avançado',
      bonuses: '8 bônus',
      certified: 'Sim',
      price: 'Grátis',
      professor: 'Prof. Gustavo Guanabara',
      link: 'https://www.cursoemvideo.com/',
      color: 'text-yellow-400',
      tagColor: 'bg-yellow-500/20 border-yellow-400',
    },
    {
      title: 'Python para Análise de Dados (HASHTAG Treinamentos)',
      lessons: '+900 aulas',
      level: 'Básico ao avançado',
      bonuses: '2 bônus',
      certified: 'Sim',
      price: '12x de R$29,64 ou R$297 à vista',
      professor: 'Hashtag Treinamentos',
      link: 'https://www.hashtagtreinamentos.com/curso-python',
      color: 'text-blue-500',
      tagColor: 'bg-blue-500/20 border-blue-400',
    },
    {
      title: 'Curso de React do zero ao avançado na prática (UDEMY)',
      lessons: '+150 aulas',
      level: 'Básico ao avançado',
      bonuses: '4 bônus',
      certified: 'Sim',
      price: '12x de R$24,06 ou R$247 à vista',
      professor: 'Matheus Fraga',
      link: 'https://www.udemy.com/course/curso-reactjs/?couponCode=KEEPLEARNINGBR',
      color: 'text-purple-500',
      tagColor: 'bg-purple-500/20 border-purple-400',
    },
    {
      title: 'TypeScript para Iniciantes (ORIGAMID)',
      lessons: '+100 aulas',
      level: 'Básico ao intermediário',
      bonuses: '3 bônus',
      certified: 'Sim',
      price: '12x de R$22,90 ou R$229 à vista',
      professor: 'Prof. Marina Silva',
      link: 'https://www.origamid.com/curso/typescript-para-iniciantes/',
      color: 'text-green-500',
      tagColor: 'bg-green-500/20 border-green-400',
    },
    {
      title: 'Desenvolvimento com Node.js (EBAC)',
      lessons: '+120 aulas',
      level: 'Intermediário ao avançado',
      bonuses: '5 bônus',
      certified: 'Sim',
      price: '12x de R$32,90 ou R$329 à vista',
      professor: 'EBAC',
      link: 'https://ebaconline.com.br/node-js',
      color: 'text-red-500',
      tagColor: 'bg-red-500/20 border-red-400',
    },
  ];
  