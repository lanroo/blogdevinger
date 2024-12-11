import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">DEVinger</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-muted hover:text-[rgb(142_68_173_/_var(--tw-bg-opacity))] transition-colors"
            >
              Início
            </Link>
            <Link 
              to="/projects" 
              className="text-muted hover:text-[rgb(142_68_173_/_var(--tw-bg-opacity))] transition-colors"
            >
              Códigos
            </Link>
            <Link 
              to="/curiosities" 
              className="text-muted hover:text-[rgb(142_68_173_/_var(--tw-bg-opacity))] transition-colors"
            >
              Curiosidades
            </Link>
            <Link 
              to="/about" 
              className="text-muted hover:text-[rgb(142_68_173_/_var(--tw-bg-opacity))] transition-colors"
            >
              Sobre Mim
            </Link>
            <Link 
              to="/contact" 
              className="text-muted hover:text-[rgb(142_68_173_/_var(--tw-bg-opacity))] transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
