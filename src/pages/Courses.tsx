import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { tableCourses, Course } from '../data/coursesData'; 
const Courses = () => {
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link);
    }
  };

  const ArrowLeft = (props: any) => (
    <button
      {...props}
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-[rgb(142,68,173)] hover:scale-110 transition-transform"
    >
      <ChevronLeft size={30} />
    </button>
  );

  const ArrowRight = (props: any) => (
    <button
      {...props}
      className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-[rgb(142,68,173)] hover:scale-110 transition-transform"
    >
      <ChevronRight size={30} />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Foto de Capa */}
        <div className="mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQFBINzwYw6vXA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1719237893445?e=2147483647&v=beta&t=AHGB8C4hMZ1W0NT3chfBsNZtZGq7_Ivfx_c59jc0D4Y"
            alt="Capa do Blog"
            className="w-full h-[200px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Introdução */}
        <div className="text-gray-700 mb-8 leading-relaxed">
          <p className="mb-4">
            Olá, tudo bem? Eu sou Lanna Almeida, apaixonada por tecnologia e desenvolvimento, e hoje estou aqui para
            te ajudar a dar o próximo passo na sua jornada como programador(a). Selecionei uma lista com os <b>5
            melhores cursos de programação para 2025</b>, todos escolhidos com base nas tendências mais atuais do
            mercado.
          </p>
          <p className="mb-4">
            Vivemos em um mundo onde a tecnologia está em constante evolução, e a programação é uma habilidade
            essencial para quem quer se destacar em um mercado tão competitivo. Seja você iniciante ou já experiente,
            sempre há algo novo para aprender e se aprimorar.
          </p>
        </div>

        {/* Tabela de cursos */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top 5 melhores cursos de programação</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3">#</th>
                <th className="border border-gray-300 p-3">Curso de Programação</th>
                <th className="border border-gray-300 p-3">Quantidade de Aulas</th>
                <th className="border border-gray-300 p-3">Nível</th>
                <th className="border border-gray-300 p-3">Bônus</th>
                <th className="border border-gray-300 p-3">Certificado</th>
                <th className="border border-gray-300 p-3">Preço</th>
              </tr>
            </thead>
            <tbody>
              {tableCourses.map((course, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handleNavigation(course.link)}
                >
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3 font-medium text-[rgb(142,68,173)] hover:underline">
                    {course.title}
                  </td>
                  <td className="border border-gray-300 p-3 text-center">{course.lessons}</td>
                  <td className="border border-gray-300 p-3 text-center">{course.level}</td>
                  <td className="border border-gray-300 p-3 text-center">{course.bonuses}</td>
                  <td className="border border-gray-300 p-3 text-center">{course.certified}</td>
                  <td className="border border-gray-300 p-3 text-center">{course.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Título para os cards */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Veja outros bons cursos:</h2>

        {/* Carrossel de cursos */}
        <Slider {...settings}>
          {tableCourses.slice(3).map((course: Course, index: number) => (
            <motion.div
              key={index}
              className="p-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="relative p-6 rounded-lg bg-gray-100 border border-gray-300 shadow-md cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => handleNavigation(course.link)}
              >
                <h4 className="font-medium mb-2 text-lg text-[rgb(142,68,173)] flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  {course.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.lessons}</p>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Professor:</span> {course.professor}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
