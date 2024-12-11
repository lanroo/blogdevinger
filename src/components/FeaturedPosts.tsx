import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'O Impacto da IA no Desenvolvimento de Software',
    excerpt: 'Como a Inteligência Artificial está revolucionando a forma como desenvolvemos software...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Inteligência Artificial',
  },
  {
    id: 2,
    title: 'Web 3.0: O Futuro da Internet',
    excerpt: 'Explorando as possibilidades e desafios da próxima geração da web...',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Clean Code: Boas Práticas em JavaScript',
    excerpt: 'Guia prático para escrever código mais limpo e manutenível em JavaScript...',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Desenvolvimento',
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Posts em Destaque</h2>
          <a
            href="/posts"
            className="inline-flex items-center text-primary-light hover:text-primary transition-colors"
          >
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="relative bg-[#1e1e30] rounded-lg overflow-hidden border border-gray-700 shadow-glow transition-transform group hover:scale-105"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Neon Border Effect */}
              <div
                className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[rgba(142,68,173,0.6)] group-hover:shadow-[0_0_15px_rgba(142,68,173,0.6)] transition-all"
                aria-hidden="true"
              ></div>

              {/* Imagem */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Conteúdo */}
              <div className="p-6 relative z-10">
                <span className="text-sm text-primary-light font-medium">
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-muted">{post.excerpt}</p>
                <button className="mt-4 inline-flex items-center text-foreground hover:text-primary">
                  Leia mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
