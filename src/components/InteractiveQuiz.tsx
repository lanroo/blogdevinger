import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  relatedPostId: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Qual linguagem de programação domina o mercado web?',
    options: ['Python', 'JavaScript', 'Java', 'PHP'],
    correctAnswer: 1,
    relatedPostId: 1
  }
];

const InteractiveQuiz = () => {
  const [currentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
  };

  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

  return (
    <div className="bg-background text-foreground rounded-lg shadow-glow p-6 my-8 transition-transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-xl font-bold mb-4">Quiz Tech</h3>
      <div className="mb-6">
        <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full p-3 text-left rounded-md border transition-colors ${
              selectedAnswer === index
                ? isCorrect
                  ? 'border-green-500 bg-green-900 text-foreground'
                  : 'border-red-500 bg-red-900 text-foreground'
                : 'border-gray-700 bg-background text-muted hover:border-primary hover:bg-primary/10'
            }`}
            onClick={() => handleAnswer(index)}
            disabled={showFeedback}
          >
            {option}
          </motion.button>
          
          ))}
        </div>
      </div>

      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-md ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          <div className="flex items-center mb-2">
            {isCorrect ? (
              <CheckCircle2 className="h-5 w-5 mr-2" />
            ) : (
              <XCircle className="h-5 w-5 mr-2" />
            )}
            <span className="font-medium">
              {isCorrect ? 'Correto!' : 'Ops! Tente novamente.'}
            </span>
          </div>
          <Link
            to={`/post/${questions[currentQuestion].relatedPostId}`}
            className="text-blue-600 hover:text-blue-800 inline-block mt-2"
          >
            Saiba mais sobre este tema →
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveQuiz;