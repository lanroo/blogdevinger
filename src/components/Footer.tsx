import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">DEVinger</h3>
            <p className="text-gray-400">
              Explorando e compartilhando conhecimento sobre tecnologia e programação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-400 hover:text-primary">Códigos</a></li>
              <li><a href="/curiosities" className="text-gray-400 hover:text-primary">Curiosidades</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary">Sobre</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary">Contato</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex justify-center lg:justify-end space-x-4">
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

        {/* Linha de separação e Direitos Autorais */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} DEVinger. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
