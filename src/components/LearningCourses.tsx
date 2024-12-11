import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'Fundamentos de JavaScript',
    description: 'Aprenda os conceitos básicos de JavaScript.',
    color: 'text-yellow-400',
    tagColor: 'bg-yellow-500/20 border-yellow-400',
    professor: 'Prof. Gustavo Guanabara',
    link: 'https://www.cursoemvideo.com/curso/javascript/',
  },
  {
    title: 'Python para Análise de Dados',
    description: 'Explore como usar Python para analisar dados.',
    color: 'text-blue-500',
    tagColor: 'bg-blue-500/20 border-blue-400',
    professor: 'Profª Ana Costa',
    link: '/courses/python',
  },
  {
    title: 'Curso de React',
    description: 'Domine o desenvolvimento com React.js.',
    color: 'text-purple-500',
    tagColor: 'bg-purple-500/20 border-purple-400',
    professor: 'Prof. Carlos Mendes',
    link: '/courses/react',
  },
];

const LearningCourses = () => {
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link);
    }
  };

  return (
    <div className="bg-background relative p-6 rounded-lg border border-gray-700">
      <div className="relative">
        <h3 className="text-xl font-bold mb-4 text-foreground">Cursos Recomendados</h3>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative p-5 rounded-lg bg-[#1e1e30] border border-gray-700 shadow-glow cursor-pointer hover:shadow-lg transition-shadow group min-h-[160px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavigation(course.link)}
            >
              {/* Título e Descrição */}
              <h4 className={`font-medium mb-2 ${course.color} flex items-center text-lg`}> 
                <BookOpen className="h-6 w-6 mr-2" /> 
                {course.title}
              </h4>
              <p className="text-muted text-base leading-relaxed">
                {course.description}
              </p>

              <motion.div
                className={`absolute bottom-4 left-7 px-3 py-1 rounded-md text-sm text-foreground border ${course.tagColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                {course.professor}
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Botão Ver Todos os Cursos */}
        <motion.button
          className="mt-6 block w-full text-center text-foreground border border-gray-700 py-2 rounded-lg hover:bg-primary hover:text-background transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/courses')}
        >
          Ver todos os cursos
        </motion.button>

      </div>
    </div>
  );
};

export default LearningCourses;
