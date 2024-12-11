import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // topo
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isAtTop ? 'bg-black border-transparent' : 'bg-black/70 border-gray-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">DEVinger</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
            >
              Início
            </Link>
            <Link
              to="/projects"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
            >
              Códigos
            </Link>
            <Link
              to="/curiosities"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
            >
              Curiosidades
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
            >
              Sobre Mim
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
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
