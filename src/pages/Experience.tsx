import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { experiences, skills, certifications } from '../data';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience & Skills
        </motion.h1>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600/30" />
          {experiences.map((experience, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={experience.id}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-8 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div
                  className={`bg-gray-800 p-6 rounded-lg ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="absolute top-6 -mt-1.5 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    {experience.type === 'work' ? (
                      <Briefcase size={24} />
                    ) : (
                      <GraduationCap size={24} />
                    )}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <p className="text-blue-400">{experience.company}</p>
                    <p className="text-gray-400 text-sm mt-1">
                      {experience.period}
                    </p>
                    <p className="mt-4 text-gray-300">{experience.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {skills.map((category) => (
            <div key={category.category} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-gray-800 p-6 rounded-lg">
                <Award className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-blue-400">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;