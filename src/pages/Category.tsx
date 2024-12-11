import { FaBrain, FaLaptopCode, FaCode, FaServer, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [
    {
      name: 'Inteligência Artificial',
      description: 'Explore o mundo da IA e suas aplicações.',
      icon: <FaBrain />,
      link: '/inteligencia-artificial',
    },
    {
      name: 'Desenvolvimento Web',
      description: 'Dicas, tutoriais e tendências do frontend e backend.',
      icon: <FaLaptopCode />,
      link: '/desenvolvimento-web',
    },
    {
      name: 'Programação',
      description: 'Linguagens, algoritmos e boas práticas.',
      icon: <FaCode />,
      link: '/programacao',
    },
    {
      name: 'DevOps',
      description: 'Automatize processos e conheça as melhores ferramentas.',
      icon: <FaServer />,
      link: '/devops',
    },
    {
      name: 'Carreira Tech',
      description: 'Dicas para crescer na carreira de tecnologia.',
      icon: <FaUserTie />,
      link: '/carreira-tech',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
        Escolha uma Categoria
      </h1>
      <p className="text-lg text-center text-muted mb-12">
        Escolha uma categoria para explorar conteúdos incríveis no DEVinger Blog. Descubra tudo sobre
        tecnologia, programação e inovação!
      </p>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="block"
          >
            <div className="flex items-center bg-[#1e1e30] border border-gray-700 rounded-lg p-6 shadow-glow hover:shadow-md transition-shadow hover:bg-primary/10">
              <div className="text-primary text-3xl mr-4">{category.icon}</div>
              <div>
                <h2 className="text-2xl font-bold mb-1 text-foreground">{category.name}</h2>
                <p className="text-muted">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
