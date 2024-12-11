import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface NewsItem {
  title: string;
  url: string;
  source: string;
}

const mockNews: NewsItem[] = [
  {
    title: 'Nova versão do React traz melhorias significativas de performance',
    url: '#',
    source: 'React Blog',
  },
  {
    title: 'TypeScript 5.0: O que há de novo?',
    url: '#',
    source: 'TypeScript Blog',
  },
  {
    title: 'O impacto da IA no desenvolvimento de software',
    url: '#',
    source: 'Tech News',
  },
];

const NewsWidget = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Em uma aplicação real, você buscaria notícias de uma API
    setNews(mockNews);
  }, []);

  return (
    <div className="bg-background relative p-6 rounded-lg border border-gray-700 w-full h-auto max-w-md">
      <div className="relative bg-[#1a1a2e] p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-foreground">Últimas da Tecnologia</h3>
        <div className="space-y-4">
          {news.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-md bg-[#1e1e30] border border-gray-700 shadow-glow hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4 className="font-medium mb-2 text-primary flex items-center">
                {item.title}
              </h4>
              <div className="flex items-center text-sm text-muted">
                <span>{item.source}</span>
                <ExternalLink className="h-4 w-4 ml-2 text-muted hover:text-primary-light transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsWidget;
