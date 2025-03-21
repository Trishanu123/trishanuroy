import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StarsCanvas from './components/StarsCanvas';
import emailjs from '@emailjs/browser';
import Featured from './pages/Featured';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Experience = React.lazy(() => import('./pages/Experience'));
const CV = React.lazy(() => import('./pages/CV'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <Router>
      <div className="relative z-0">
        <StarsCanvas />
        <Navbar />
        <div className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/trishanuroy" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/featured" element={<Featured />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;