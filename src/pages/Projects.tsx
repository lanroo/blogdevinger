
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { projects } from '../data/projects';
import AdBanner from '../components/AdBanner';

const Projects = () => {
  return (
    <div className="bg-background min-h-screen text-foreground py-12 px-4">
      <SEO 
        title="Projetos"
        description="Conheça nossos projetos de desenvolvimento e tecnologia"
        keywords="projetos, portfolio, desenvolvimento, tecnologia"
      />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Projetos</h1>
        <AdBanner position="top" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-[#1e1e30] border border-gray-700 rounded-lg shadow-glow cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => {
                if (project.demoUrl) {
                  window.open(project.demoUrl, '_blank');
                } else {
                  window.open(`/projects/${project.id}`, '_self');
                }
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary-light">
                  {project.title}
                </h2>
                <p className="text-muted mb-4 group-hover:text-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary-light text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center text-primary-light group-hover:text-primary">
                    Ver detalhes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                  {project.demoUrl && (
                    <span
                      className="text-muted group-hover:text-primary cursor-pointer"
                    >
                      Demo ao vivo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <AdBanner position="bottom" />
      </div>
    </div>
  );
};

export default Projects;
