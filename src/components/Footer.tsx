import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors">DEVinger</h3>
            <p className="text-gray-400 text-sm">
              Explorando e compartilhando conhecimento sobre tecnologia e programação.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors">Soluções</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Analytics</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">E-commerce</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Service Desk</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">CRM</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Chatbot</a></li>
            </ul>
          </div>

          {/* Segmentos */}
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors">Segmentos</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Educação</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Recursos Humanos</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Tech Shops</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Mundo Gamer</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Engenharia</a></li>
            </ul>
          </div>

          {/* Links Populares */}
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors">Links Populares</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-primary">Blog</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary">Sobre</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary">Contato</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-primary">Eventos</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-primary">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} DEVinger. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
