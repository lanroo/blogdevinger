import { Github, Mail, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-background min-h-screen text-foreground py-12 px-4">
      <SEO 
        title="Sobre Mim" 
        description="Conheça mais sobre minha jornada no mundo da tecnologia e programação."
        keywords="sobre, desenvolvedor, programador, tecnologia"
      />

      <div className="max-w-4xl mx-auto">
        {/* Perfil */}
        <div className="text-center mb-12">
        <img
          src="https://res.cloudinary.com/dgmhjjizh/image/upload/v1733874841/mfafmshl6kl3kp1rqilb.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary object-cover pointer-events-none select-none"
        />

          <h1 className="text-4xl font-bold mb-2">Lanna Almeida</h1>
          <p className="text-muted">Desenvolvedora Full Stack & Tech Writer</p>
        </div>

        {/* Sobre Mim */}
        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Sobre Mim</h2>
          <p className="leading-relaxed mb-6 text-muted">
            Sou uma desenvolvedora apaixonada por tecnologia e inovação, com mais de 3 anos
            de experiência em desenvolvimento web. Meu objetivo é compartilhar conhecimento
            e ajudar outros desenvolvedores a crescerem em suas carreiras.
          </p>

          {/* Experiência */}
          <h2 className="text-2xl font-bold text-primary mb-4">Experiência</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>Desenvolvimento Full Stack com React e Node.js</li>
            <li>Arquitetura de Software e Boas Práticas</li>
            <li>DevOps e Cloud Computing</li>
            <li>Technical Writing e Mentoria</li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://github.com/lanroo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded-lg bg-[#1e1e30] hover:bg-primary hover:text-background transition-colors border border-gray-700"
          >
            <Github className="h-6 w-6 mr-2" />
            GitHub
          </a>
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded-lg bg-[#1e1e30] hover:bg-primary hover:text-background transition-colors border border-gray-700"
          >
            <Linkedin className="h-6 w-6 mr-2" />
            LinkedIn
          </a> */}
          <a
            href="mailto:contact@example.com"
            className="flex items-center px-6 py-3 rounded-lg bg-[#1e1e30] hover:bg-primary hover:text-background transition-colors border border-gray-700"
          >
            <Mail className="h-6 w-6 mr-2" />
            E-mail
          </a>
          <a
            href="https://portfoliolanna.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded-lg bg-[#1e1e30] hover:bg-primary hover:text-background transition-colors border border-gray-700"
          >
            <Briefcase className="h-6 w-6 mr-2" />
            Portfólio
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
