import { Post } from '../types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'O Impacto da IA no Desenvolvimento de Software',
    excerpt: 'Como a Inteligência Artificial está revolucionando a forma como desenvolvemos software...',
    content: `A Inteligência Artificial está transformando rapidamente o cenário do desenvolvimento de software. 
    Desde assistentes de código até testes automatizados, a IA está se tornando uma ferramenta indispensável 
    para desenvolvedores modernos...`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Inteligência Artificial',
    date: '2024-03-15',
    author: 'João Silva'
  },
  {
    id: 2,
    title: 'Web 3.0: O Futuro da Internet',
    excerpt: 'Explorando as possibilidades e desafios da próxima geração da web...',
    content: `A Web 3.0 promete revolucionar a maneira como interagimos com a internet. 
    Com foco em descentralização, privacidade e poder ao usuário, esta nova era traz 
    consigo tecnologias como blockchain e tokens não fungíveis (NFTs)...`,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
    category: 'Web Development',
    date: '2024-03-14',
    author: 'Maria Santos'
  },
  {
    id: 3,
    title: 'Clean Code: Boas Práticas em JavaScript',
    excerpt: 'Guia prático para escrever código mais limpo e manutenível em JavaScript...',
    content: `Escrever código limpo é uma habilidade essencial para qualquer desenvolvedor. 
    Neste artigo, exploraremos as melhores práticas para manter seu código JavaScript 
    organizado, legível e fácil de manter...`,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Desenvolvimento',
    date: '2024-03-13',
    author: 'Pedro Oliveira'
  }
];