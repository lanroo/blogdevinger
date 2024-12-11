import { Link } from 'react-router-dom';
import { FaTools, FaSmileWink } from 'react-icons/fa';
import SEO from '../components/SEO';

const Maintenance = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center px-4">
      <SEO 
        title="Página em Manutenção" 
        description="Ops! Esta página está em manutenção. Volte mais tarde para mais conteúdo incrível."
        keywords="manutenção, indisponível, devinger"
      />

      <div className="max-w-md text-center space-y-6">
        <FaTools className="text-primary text-6xl mx-auto mb-4" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
          Ops! Página em Manutenção
        </h1>
        <p className="text-lg text-muted">
          Estamos trabalhando duro para trazer algo incrível para você. Enquanto isso, aproveite outras seções do nosso site. 
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            to="/"
            className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-light transition"
          >
            Voltar para Início
          </Link>
          <Link
            to="/categories"
            className="bg-white text-primary py-2 px-6 rounded-lg font-medium hover:bg-primary-light hover:text-background transition"
          >
            Explorar Categorias
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <FaSmileWink className="text-primary text-4xl mb-2 animate-bounce" />
        <p className="text-muted text-sm">Prometemos que será rápido! ⏳</p>
      </div>
    </div>
  );
};

export default Maintenance;
