import { Link } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // topo
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isAtTop ? 'bg-black border-transparent' : 'bg-black/70 border-gray-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">DEVinger</span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded text-foreground hover:bg-gray-700 transition"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 bg-black/80 p-4 rounded-lg">
            <Link
              to="/"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link
              to="/projects"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
              onClick={toggleMenu}
            >
              Códigos
            </Link>
            <Link
              to="/curiosities"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
              onClick={toggleMenu}
            >
              Curiosidades
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
              onClick={toggleMenu}
            >
              Sobre Mim
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-[rgb(142_68_173_/_0.9)] transition-colors"
              onClick={toggleMenu}
            >
              Contato
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
