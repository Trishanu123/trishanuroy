import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import pfpImage from '../assets/pfp.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Trishanu Roy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I'm a tech geek, AI enthusiast, and hardcore builder who loves turning crazy ideas into reality. 
              At 16, I completed a post-grad in AI & ML from Caltech, bringing innovative solutions to 
              real-world challenges through AI, robotics, embedded systems, and aeronautics.
            </p>
            <div className="prose prose-invert mb-8">
              <p className="text-gray-300">
                My journey includes building Hasthavani (a sign language-to-speech glove), 
                developing autonomous RC planes, FPV drones, and AI-powered gadgets. I've won 
                national hackathons and collaborated with prestigious institutions like T-Works 
                and IIIT Hyderabad.
              </p>
              <p className="text-gray-300 mt-4">
                My expertise spans Python, C++, TensorFlow, OpenCV, ESP32, Raspberry Pi, and 
                hardware prototyping. When not coding or designing PCBs, you'll find me flying 
                RC planes, working on FPGA projects, or speaking at tech events.
              </p>
              <p className="text-gray-300 mt-4">
                My mission? Create game-changing tech that blends AI, automation, and robotics 
                to build a smarter future. Let's innovate, build, and break limits together!
              </p>
            </div>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://github.com/Trishanu123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/trishanu-roy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@trishanustech281"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.instagram.com/trishanu_roy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src={pfpImage}
              alt="Trishanu Roy"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
