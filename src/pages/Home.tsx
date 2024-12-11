import SEO from '../components/SEO';
import Hero from '../components/Hero';
// import FeaturedPosts from '../components/FeaturedPosts';
import ProjectsShowcase from '../components/ProjectsShowcase';
import InteractiveFeatures from '../components/InteractiveFeatures';
import AdBanner from '../components/AdBanner';

const Home = () => {
  return (
    <div className="bg-background text-foreground">
      <SEO 
        title="Início"
        description="Blog de tecnologia e programação com tutoriais, dicas e novidades do mundo tech"
        keywords="tecnologia, programação, desenvolvimento web, javascript, react, node.js"
      />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner position="top" />
        <InteractiveFeatures />
        <AdBanner position="middle" />
        {/* <FeaturedPosts /> */}
        <AdBanner position="middle" />
        <ProjectsShowcase />
        <AdBanner position="bottom" />
      </div>
    </div>
  );
};

export default Home;
