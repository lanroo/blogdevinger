import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { tableCourses, Course } from '../data/coursesData'; 

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
          {tableCourses.slice(0, 3).map((course: Course, index: number) => (
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
              <p className="text-muted text-base leading-relaxed">{course.lessons}</p>

              {/* Tag com o professor */}
              <div
                className={`mt-4 inline-block px-3 py-1 rounded-full text-sm text-foreground border ${course.tagColor}`}
              >
                {course.professor}
              </div>
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
