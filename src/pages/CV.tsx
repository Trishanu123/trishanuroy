import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Briefcase, GraduationCap, Code, Cpu, Wrench, Users, Star, Youtube, MessageSquare } from 'lucide-react';
import { experiences, skills, certifications, projects } from '../data';
// Import the PDF file
import resumePDF from '../assets/resume.pdf';

const CV = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'trishanu-roy-resume.pdf'; // Name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900/30 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/40 rounded-lg p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Trishanu Roy</h1>
            <button 
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400">Delhi Public School, Miyapur</h3>
                <p className="text-gray-300">10th Class (CBSE)</p>
                <p className="text-gray-400">Achieved excellent academic results with a strong focus on science and technology.</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400">Gatik Junior College, Bhanur</h3>
                <p className="text-gray-300">11th & 12th Class (TBSE)</p>
                <p className="text-gray-400">Pursued advanced courses in mathematics, physics, and computer science, excelling in competitive examinations.</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400">Caltech</h3>
                <p className="text-gray-300">Post-Graduation in AI & ML (96% at age 16)</p>
                <p className="text-gray-400">Specialized in machine learning, deep learning, and artificial intelligence, working on multiple research projects.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2" /> Certifications
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400">Robotics Expert Level (NXT & EV3)</h3>
                <p className="text-gray-400">Developed and programmed advanced autonomous robotics systems at the age of 10.</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400">WhiteHat Jr. Game Development</h3>
                <p className="text-gray-400">Created multiple interactive games using programming and animation tools at the age of 12.</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400">Certified Python Developer – IBM</h3>
                <p className="text-gray-400">Mastered Python programming, data structures, and AI applications at the age of 16.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-2" /> Work Experience
            </h2>
            <div className="space-y-4">
              {[
                {
                  company: "T-Works: India's largest prototyping center",
                  role: "Product Development Intern",
                  description: "Worked on embedded systems, IoT solutions, AI, Product Development, Hasthavani"
                },
                {
                  company: "IIIT Hyderabad",
                  role: "Research Intern",
                  description: "Research in AI and ML, 3D printing, focusing on gesture recognition"
                },
                {
                  company: "Abjayon",
                  role: "AI Intern",
                  description: "Internship in AI, SQL, Power Automate, Power BI"
                },
                {
                  company: "Codiangle",
                  role: "Marketing Agent",
                  description: "Marketing agent for Hakathon. Acquired over 10,000 leads"
                },
                {
                  company: "Mindler",
                  role: "AI Intern",
                  description: "AI and data analysis internship"
                }
              ].map((exp, index) => (
                <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-400">{exp.company}</h3>
                  <p className="text-gray-300">{exp.role}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-2 border-blue-500 pl-4"
                >
                  <h3 className="text-xl font-semibold text-blue-400">
                    {project.title}
                    {project.title === "Auto Focus" && (
                      <span className="ml-2 text-sm text-yellow-500">
                        Won 2nd place at a National-Level Hackathon
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-300 mt-1">{project.description}</p>
                  {project.title === "Emotion Detection AI Model" && (
                    <a
                      href="https://github.com/Trishanu123/emotion_detection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block"
                    >
                      GitHub Link →
                    </a>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Youtube className="mr-2" /> Featured In
            </h2>
            <div className="space-y-4">
              {[
                "Gatik Pulse – Featured article on Hasthavani",
                "Simply Learn YouTube Channel – AI and ML journey showcase",
                "Gatik YouTube Channel – Interview for Abjayon's employee",
                "Gatik Insta - Hasthavani"
              ].map((feature, index) => (
                <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <MessageSquare className="mr-2" /> Leadership & Public Speaking
            </h2>
            <div className="space-y-4">
              {[
                "High School Hackathon Leadership – Tech Lead (2023 & 2024)",
                "IBM Public Speaking – Delivered a seminar to 400+ IBM employees on AI & ML",
                "Pitch to CEO of Linear Momentum – Presented Hasthavani project",
                "Speaker at Xplorer Hackathon on IoT",
                "Student Mentor at Gatik Junior College"
              ].map((item, index) => (
                <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Wrench className="mr-2" /> Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Programming</h3>
                <p className="text-gray-300">Python, C++, JavaScript, Embedded C++, MicroPython</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">AI & ML</h3>
                <p className="text-gray-300">TensorFlow, PyTorch, OpenCV, NLP, LLMs</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Embedded Systems</h3>
                <p className="text-gray-300">ESP32, Arduino, Raspberry Pi, FPGA Design</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Product Development</h3>
                <p className="text-gray-300">EV3, NXT, 3D printing, CAD, EDA, Sensor Integration</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;