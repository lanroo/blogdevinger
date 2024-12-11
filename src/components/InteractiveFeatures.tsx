
import InteractiveQuiz from './InteractiveQuiz';
import NewsWidget from './NewsWidget';
import LearningCourses from './LearningCourses';

const InteractiveFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <InteractiveQuiz />
      </div>
      <div className="space-y-8">
        <NewsWidget />
        <LearningCourses />
      </div>
    </div>
  );
};

export default InteractiveFeatures;
