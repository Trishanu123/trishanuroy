import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, MessageSquare, ExternalLink, Link as LinkIcon, Trophy } from 'lucide-react';

const Featured = () => {
  const sections = [
    {
      title: "Featured In",
      icon: <Youtube className="w-8 h-8 text-blue-500" />,
      items: [
        {
          title: "Gatik Pulse",
          description: "Featured article on Hasthavani",
          link: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-innovation-inclusion-activity-7285336337556152320-tCz6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA", 
          viewText: "View Article"
        },
        {
          title: "Simply Learn YouTube Channel",
          description: "AI and ML journey showcase - Completing post-graduation in AI & ML at age 16",
          link: "https://www.linkedin.com/posts/trishanu-roy_caltech-simplilearn-ai-activity-7295349960156291072-0Nd1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA", // Add your link here
          viewText: "Watch Video"
        },
        {
          title: "Gatik YouTube Channel",
          description: "Interview as Abjayon's employee",
          link: "https://youtu.be/02ExjrLWWd4?si=VzXkHDdiqGPbWejM", // Add your link here
          viewText: "Watch Interview"
        },
        {
          title: "Gatik Instagram",
          description: "Feature on Hasthavani project",
          link: "https://www.instagram.com/reel/DAqZhY5ARQd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Add your link here
          viewText: "View Post"
        }
      ]
    },
    {
      title: "Leadership & Public Speaking",
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      items: [
        {
          title: "High School Hackathon Leadership",
          description: "Tech Lead (2023 & 2024)",
          link: "https://www.linkedin.com/posts/gatik-junior-college_hackathon-xplorer2024-innovation-ugcPost-7261701923571937280-oscf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA", // Add your link here
          viewText: "View Details"
        },
        {
          title: "IBM Public Speaking",
          description: "Delivered a seminar to 400+ IBM employees on AI & ML",
          link: "https://www.linkedin.com/posts/trishanu-roy_techtalk-ibm-inspiration-activity-7140249273652101122-oQKI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA", // Add your link here
          viewText: "View Event"
        },
        {
          title: "CEO of Linear Momentum Pitch",
          description: "Presented Hasthavani project to CEO",
          link: "https://www.linkedin.com/posts/trishanu-roy_thrilled-to-share-that-siddharth-pilli-and-activity-7271228922694922240-D7jA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA", // Add your link here
          viewText: "View Presentation"
        },
        
        {
          title: "Xplorer Hackathon",
          description: "Conducted an in-depth session on IoT",
          link: "https://www.linkedin.com/posts/trishanu-roy_xplorer2024-hackathon-computervision-activity-7261816014147866624-KTM1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA", // Add your link here
          viewText: "View Session"
        },
        
      ]
    },
    {
      title: "Awards & Achievements",
      icon: <Trophy className="w-8 h-8 text-blue-500" />,
      items: [
        {
          title: "National-Level Hackathon (Auto Focus)",
          description: "2nd Place Winner - Developed innovative automotive solutions",
          link: "https://www.linkedin.com/posts/trishanu-roy_im-excited-to-share-that-my-team-including-activity-7180149104012931072-jdrq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA", 
          viewText: "View Achievement"
        },
        {
          title: "Ideathon (DPS Miyapur)",
          description: "1st Place Winner - Showcased creative problem-solving skills",
          link: "https://youtu.be/vMmVYoZBul4?si=v0u-m_9pbRhuYSbV", // Add your link here if available
          viewText: "View Achievement"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900/30 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Impact
        </motion.h1>

        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-8 flex items-center">
                {section.icon}
                <span className="ml-3">{section.title}</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (sectionIndex * 0.2) + (index * 0.1) }}
                    className="bg-gray-800/40 rounded-lg p-6 hover:bg-gray-800/60 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg 
                        hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 
                        border border-blue-500/30 group w-full sm:w-auto"
                      >
                        <ExternalLink 
                          size={16} 
                          className="mr-2 group-hover:animate-pulse" 
                        />
                        <span className="font-medium">{item.viewText}</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center px-4 py-2 bg-gray-700/40 text-gray-400 
                        rounded-lg cursor-not-allowed border border-gray-600/30 w-full sm:w-auto">
                        <ExternalLink size={16} className="mr-2 opacity-50" />
                        <span className="font-medium">Coming Soon</span>
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured; 