
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import AdBanner from '../components/AdBanner';
import { projects } from '../data/projects';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
        <Link to="/projects" className="text-blue-600 hover:text-blue-800">
          Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title={project.title}
        description={project.description}
        keywords={project.technologies.join(', ')}
      />
      
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para projetos
      </Link>

      <AdBanner position="top" />
      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4 mb-8">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Github className="mr-2 h-4 w-4" />
          Ver no GitHub
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Demo
          </a>
        )}
      </div>
      
      <ShareButtons
        url={window.location.href}
        title={`Confira o projeto ${project.title}`}
      />
      
      <AdBanner position="bottom" />
    </div>
  );
};

export default ProjectPage;