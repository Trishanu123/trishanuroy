import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Youtube, Linkedin, Instagram } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
  // Helper function to handle both string and imported image sources
  const getImageSrc = (image: string | { default: string } | undefined) => {
    if (!image) return '';
    if (typeof image === 'string') return image;
    return image.default;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-64 flex justify-center items-center bg-black">
                <img
                  src={getImageSrc(project.image)}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                        title="GitHub"
                      >
                        <Github size={24} />
                      </a>
                    )}
                    {project.linkedinUrl && (
                      <a
                        href={project.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={24} />
                      </a>
                    )}
                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                        title="YouTube"
                      >
                        <Youtube size={24} />
                      </a>
                    )}
                    {project.instagramUrl && (
                      <a
                        href={project.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                        title="Instagram"
                      >
                        <Instagram size={24} />
                      </a>
                    )}
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                        title="Website"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-400 mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
