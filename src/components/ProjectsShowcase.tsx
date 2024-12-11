import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsShowcase = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Projetos em Destaque</h2>
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-light hover:text-primary transition-colors"
          >
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="relative bg-[#1e1e30] rounded-lg shadow-glow overflow-hidden group transition-transform transform hover:scale-105"
            >
              {/* Efeito neon nas bordas */}
              <div
                className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[rgba(142,68,173,0.6)] group-hover:shadow-[0_0_15px_rgba(142,68,173,0.6)] transition-all"
                aria-hidden="true"
              ></div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-light/20 text-primary text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary-light hover:text-primary transition-colors"
                >
                  Ver projeto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
