import { Project, Experience } from './types';

// You can comment/uncomment either the external URL approach or the local file approach
// based on your preference

export const projects: Project[] = [
  {
    id: 1,
    title: "Hasthavani",
    description: "A sign language to speech conversion system using machine learning and embedded systems.",
    // Option 1: External URL approach
    image: "src/assets/hasthavani.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/hasthavani.jpg'),
    technologies: ["Flex Sensors", "MPU6050", "Machine Learning", "Embedded Systems", "3D printing", "EDA", "C++", "Microcontrollers", "Micropython", "Python", "Aurduino IDE"],
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/posts/trishanu-roy_signlanguage-ai-machinelearning-activity-7244001187249676291-N7Lm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/reel/DAqZhY5ARQd/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    websiteUrl: "",
    details: "Created an innovative sign language translation system that converts hand gestures into speech and text in real-time."
    
  },
  {
  
    id: 2,
    title: "Spectorn",
    description: " smart wearable device for visually impaired individuals using LiDAR sensors, AI-based object detection, and haptic feedback.",
    // Option 1: External URL approach
    image: "src/assets/spectron.jpeg",
    // Option 2: Local file approach
    // image: require('../assets/projects/spectorn.jpg'),
    technologies: ["LiDAR", "AI", "Haptic Feedback", "Embedded Systems"],
    githubUrl: "",
    linkedinUrl: "",
    youtubeUrl: "https://youtu.be/jjByRV6fOdw?si=3Dz1xLv6vbnao3HL",
    instagramUrl: "",
    websiteUrl: "",
    details: "Developed a smart wearable device to assist visually impaired individuals with navigation and object detection using advanced sensor technology and AI."
  }, 
  {
    id: 3,
    title: "Auto Focus",
    description: "An AI-powered browser designed for productivity by blocking distractions. Won 2nd place at a National-Level Hackathon.",
    // Option 1: External URL approach
    image: "src/assets/auto focus.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/auto-focus.jpg'),
    technologies: ["AI", "Browser Extension", "JavaScript"],
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/posts/trishanu-roy_signlanguage-accessibility-innovation-activity-7179008294055763968-LYGH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA",
    youtubeUrl: "https://www.linkedin.com/posts/hemeshch_excited-to-share-a-cheesy-video-i-made-during-activity-7214123192141897729-mAU7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA",
    instagramUrl: "https://www.instagram.com/p/DHdr0chh4xm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    websiteUrl: "",
    details: "Award-winning browser extension that uses AI to identify and block distracting content, enhancing user productivity."
  },
  {
    id: 4,
    title: "RC Aeroplane",
    description: "A high-speed RC aeroplane (100 km/h), developed with precision aerodynamics and lightweight materials.",
    // Option 1: External URL approach
    image: "src/assets/rc.jpeg",
    // Option 2: Local file approach
    // image: require('../assets/projects/rc-aeroplane.jpg'),
    technologies: ["Aerodynamics", "Electronics", "Lightweight Materials"],
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/posts/trishanu-roy_rcplane-innovation-nevergiveup-activity-7183900549270941697-gwOK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA",
    youtubeUrl: "https://youtu.be/2DlqR4RBCMk?si=kG77GGwjHgBPJlOu",
    instagramUrl: "https://www.instagram.com/p/DHdtOJJhPw7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    websiteUrl: "",
    details: "Engineered a high-performance RC aircraft achieving speeds of 100 km/h through advanced aerodynamic design."
  },
  {
    id: 5,
    title: "LED Matrix",
    description: "A programmable LED display system for animations, real-time text, and interactive visuals.",
    // Option 1: External URL approach
    image: "src/assets/matrix.jpeg",
    // Option 2: Local file approach
    // image: require('../assets/projects/led-matrix.jpg'),
    technologies: ["LED Programming", "Microcontrollers", "Animation"],
    githubUrl: "",
    linkedinUrl: "",
    youtubeUrl: "https://youtube.com/shorts/Ys3QdQZBkl0?si=J4mtr4D21-iHakQk",
    instagramUrl: "",
    websiteUrl: "",
    details: "Created a versatile LED matrix display system capable of showing dynamic content and animations."
  },
  {
    id: 6,
    title: "Distance Gauge Meter",
    description: "A portable ultrasonic sensor-based tool for precise distance measurement.",
    // Option 1: External URL approach
    image: "src/assets/dist.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/distance-gauge.jpg'),
    technologies: ["Ultrasonic Sensors", "Arduino", "Electronics"],
    githubUrl: "",
    linkedinUrl: "",
    youtubeUrl: "https://youtube.com/shorts/35upHgOVk1Q?si=uLmLM0SixH1z3JuM",
    instagramUrl: "",
    websiteUrl: "",
    details: "Developed a precise distance measurement tool using ultrasonic technology."
  },
  {
    id: 7,
    title: "Fully Autonomous RC Car",
    description: "An AI-powered self-driving RC car with obstacle detection and path planning.",
    // Option 1: External URL approach
    image: "src/assets/autonomous.jpeg",
    // Option 2: Local file approach
    // image: require('../assets/projects/autonomous-rc-car.jpg'),
    technologies: ["AI", "Computer Vision", "Robotics"],
    githubUrl: "",
    linkedinUrl: "",
    youtubeUrl: "https://youtube.com/shorts/t31rZ-Ven0E?si=dSzAxca8j85qhITg",
    instagramUrl: "",
    websiteUrl: "",
    details: "Built a self-driving RC car incorporating AI for autonomous navigation and obstacle avoidance."
  },
  {
    id: 8,
    title: "Anti-Theft System",
    description: "A home security system with door alarms and real-time cloud notifications using ESP32.",
    // Option 1: External URL approach
    image: "src/assets/theft.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/anti-theft.jpg'),
    technologies: ["ESP32", "IoT", "Cloud Computing"],
    githubUrl: "",
    linkedinUrl: "",
    youtubeUrl: "https://youtu.be/H6rxvJQm-04?si=8V22Xq-PUs6h7hx4",
    instagramUrl: "",
    websiteUrl: "",
    details: "Implemented a comprehensive security system with real-time monitoring and alerts."
  },
  {
    id: 9,
    title: "Home Automation System",
    description: "IoT-based smart home system for remote appliance control via MQTT and ESP32.",
    // Option 1: External URL approach
    image: "src/assets/automation.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/home-automation.jpg'),
    technologies: ["IoT", "MQTT", "ESP32"],
    githubUrl: "",
    linkedinUrl: "",
    youtubeUrl: "https://youtube.com/shorts/9mFIWWWCCvQ?si=JlmNN3vOH6w5bMrY",
    instagramUrl: "",
    websiteUrl: "",
    details: "Created a complete home automation solution with remote control capabilities."
  },
  {
    id: 10,
    title: "UAV Radar System",
    description: "A drone-based radar for terrain mapping, object detection, and reconnaissance.",
    // Option 1: External URL approach
    image: "src/assets/radar.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/uav-radar.jpg'),
    technologies: ["Radar", "UAV", "Signal Processing"],
    githubUrl: "",
    linkedinUrl: "",
    youtubeUrl: "https://youtube.com/shorts/EQodltE3qTI?si=wmVN2yHMGo2KnxFg",
    instagramUrl: "",
    websiteUrl: "",
    details: "Developed an advanced radar system integrated with UAV for mapping and detection."
  },
  {
    id: 11,
    title: "Study Buddy LLM",
    description: "A custom AI model for personalized academic assistance using NLP.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/study-buddy.jpg'),
    technologies: ["NLP", "Machine Learning", "Education Tech"],
    githubUrl: "https://github.com/Trishanu123/llm",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Created an AI-powered study assistant using advanced natural language processing."
  },
  {
    id: 12,
    title: "Emotion Detection AI Model",
    description: "An AI model detecting facial emotions using deep learning techniques.",
    // Option 1: External URL approach
    image: "src/assets/Emotion Detection Fig 2.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/emotion-detection.jpg'),
    technologies: ["Deep Learning", "Computer Vision", "Python"],
    githubUrl: "https://github.com/Trishanu123/emotion_detection",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Implemented a deep learning model for real-time emotion detection from facial expressions."
  },
  {
    id: 13,
    title: "FPV Drone",
    description: "A first-person-view drone for high-speed racing and aerial exploration.",
    // Option 1: External URL approach
    image: "src/assets/fpv.jpeg",
    // Option 2: Local file approach
    // image: require('../assets/projects/fpv-drone.jpg'),
    technologies: ["FPV Systems", "Drone Technology", "Electronics"],
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/posts/trishanu-roy_dronebuilding-techjourney-fpvdrone-activity-7249848385229185024-xklG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/p/DHdsperh19D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    websiteUrl: "",
    details: "Collaborated with Ritesh to build a high-performance FPV racing drone."
  },
  {
    id: 14,
    title: "Bench Power Supply",
    description: "A custom variable power supply unit for electronics prototyping.",
    // Option 1: External URL approach
    image: "src/assets/bench power supply.jpeg",
    // Option 2: Local file approach
    // image: require('../assets/projects/power-supply.jpg'),
    technologies: ["Electronics", "Power Systems", "PCB Design"],
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/posts/trishanu-roy_at-just-17-years-old-ive-built-my-very-activity-7180478615132729344-vl2s?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Designed and built a versatile power supply unit for electronics development."
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Product Development & Research Intern",
    company: "T-Works",
    period: "2023 - Present",
    description: "Working at India's largest prototyping center on cutting-edge projects including embedded systems, IoT solutions, and the Hasthavani project. Leading product development initiatives and research in assistive technology.",
    type: "work",
    highlights: [
      "Led development of Hasthavani sign language translation system",
      "Worked on embedded systems and IoT solutions",
      "Developed AI-integrated products",
      "Hands-on experience with 3D printing and prototyping"
    ]
  },
  {
    id: 2,
    title: "Research Intern",
    company: "IIIT Hyderabad",
    period: "2023",
    description: "Conducted research in AI, ML, and gesture recognition systems. Focused on innovative applications of 3D printing technology and computer vision.",
    type: "work",
    highlights: [
      "Research in gesture recognition systems",
      "AI and ML algorithm development",
      "3D printing applications research",
      "Computer vision projects"
    ]
  },
  {
    id: 3,
    title: "AI/ML Intern",
    company: "Abjayon Technologies",
    period: "2024",
    description: "Comprehensive internship focusing on AI, SQL, Power Automate, and Power BI. Developed efficient solutions for real-world business problems.",
    type: "work",
    highlights: [
      "Developed AI and ML solutions",
      "Created Power BI dashboards",
      "Implemented SQL database solutions",
      "Automated business processes using Power Automate"
    ]
  },
  {
    id: 4,
    title: "Marketing Lead",
    company: "Codiangle",
    period: "2023",
    description: "Led marketing initiatives for hackathon events, successfully acquiring over 10,000 leads through strategic campaigns and outreach.",
    type: "work",
    highlights: [
      "Acquired 10,000+ leads",
      "Developed marketing strategies",
      "Managed social media campaigns",
      "Event promotion and coordination"
    ]
  },
  {
    id: 5,
    title: "AI Developer Intern",
    company: "Mindler",
    period: "2023",
    description: "Focused on AI and data analysis for EdTech applications. Built AI tools for career guidance and personal development optimization.",
    type: "work",
    highlights: [
      "Developed AI-based career guidance tools",
      "Implemented data analysis solutions",
      "Created machine learning models",
      "Contributed to EdTech platform development"
    ]
  },
  {
    id: 6,
    title: "Tech Lead",
    company: "Telangana's First High School Hackathon",
    period: "2023",
    description: "Led technical aspects of the hackathon, mentoring participants and organizing innovative events to foster creativity and technical skills.",
    type: "work",
    highlights: [
      "Mentored student teams",
      "Organized technical workshops",
      "Managed event logistics",
      "Evaluated project submissions"
    ]
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C++", "JavaScript", "Embedded C++", "MicroPython"]
  },
  {
    category: "Tools & Platforms",
    items: ["GitHub", "VS Code", "Arduino IDE", "Docker", "Anaconda", "PlatformIO", "Bash", "Raspberry Pi"]
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "LLMs"]
  },
  {
    category: "Embedded Systems",
    items: ["ESP32", "Arduino", "Raspberry Pi", "FPGA Design"]
  },
  {
    category: "Product Development",
    items: ["EV3", "NXT", "3D printing", "CAD (Fusion 360 & Solid works)", "EDA (Easy EDA)", "Sensor Integration", "Aeronautics"]
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Flask", "Node.js"]
  }
];

export const certifications = [
  {
    title: "Robotics Expert Level (NXT & EV3)",
    issuer: "LEGO Education",
    year: "2017",
    description: "Developed and programmed advanced autonomous robotics systems at the age of 10"
  },
  {
    title: "WhiteHat Jr. Game Development",
    issuer: "WhiteHat Jr.",
    year: "2019",
    description: "Created multiple interactive games using programming and animation tools at the age of 12"
  },
  {
    title: "Certified Python Developer",
    issuer: "IBM",
    year: "2023",
    description: "Mastered Python programming, data structures, and AI applications at the age of 16"
  }
];