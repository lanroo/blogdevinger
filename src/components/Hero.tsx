import { Link } from 'react-router-dom';
import FeaturedPosts from '../components/FeaturedPosts';

const Hero = () => {
  const backgroundImage =
    'https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg';

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div
        className="relative bg-fixed bg-cover bg-center text-white py-24 md:py-32"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div> 

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bem-vindo ao DEVinger Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Descubra insights sobre tecnologia, programação e inovação em um só lugar. Explore, aprenda e inspire-se.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/categories"
              className="bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-light hover:text-background transition"
            >
              Explorar Categorias
            </Link>
            <Link
              to="/subscribe"
              className="bg-white text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary-light hover:text-background transition"
            >
              Assinar Newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedPosts />
      </div>
    </div>
  );
};

export default Hero;