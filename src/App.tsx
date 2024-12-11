import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import PostPage from './pages/PostPage';
import ProjectPage from './pages/ProjectPage';
import Courses from './pages/Courses';
import Category from './pages/Category';
import Maintenance from './pages/Maintenance';


function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/categories" element={<Category />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="*" element={<Maintenance />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </Router>
    </HelmetProvider>
  );
}

export default App;