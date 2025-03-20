import { Project, Experience } from './types';

// You can comment/uncomment either the external URL approach or the local file approach
// based on your preference

export const projects: Project[] = [
  {
    id: 1,
    title: "Spectorn",
    description: "A smart wearable device for visually impaired individuals using LiDAR sensors, AI-based object detection, and haptic feedback.",
    // Option 1: External URL approach
    image: "src/assets/pfp.png",
    // Option 2: Local file approach
    // image: require('../assets/projects/spectorn.jpg'),
    technologies: ["LiDAR", "AI", "Haptic Feedback", "Embedded Systems"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Developed a smart wearable device to assist visually impaired individuals with navigation and object detection using advanced sensor technology and AI."
  },
  {
    id: 2,
    title: "Hasthavani",
    description: "A sign language-to-speech conversion system using flex sensors, MPU6050 accelerometer, machine learning, and embedded systems.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/hasthavani.jpg'),
    technologies: ["Flex Sensors", "MPU6050", "Machine Learning", "Embedded Systems"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com/project/hasthavani",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/trishanu_roy/",
    websiteUrl: "",
    details: "Created an innovative sign language translation system that converts hand gestures into speech and text in real-time."
  }, 
  {
    id: 3,
    title: "Auto Focus",
    description: "An AI-powered browser designed for productivity by blocking distractions. Won 2nd place at a National-Level Hackathon.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/auto-focus.jpg'),
    technologies: ["AI", "Browser Extension", "JavaScript"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Award-winning browser extension that uses AI to identify and block distracting content, enhancing user productivity."
  },
  {
    id: 4,
    title: "RC Aeroplane",
    description: "A high-speed RC aeroplane (100 km/h), developed with precision aerodynamics and lightweight materials.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/rc-aeroplane.jpg'),
    technologies: ["Aerodynamics", "Electronics", "Lightweight Materials"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Engineered a high-performance RC aircraft achieving speeds of 100 km/h through advanced aerodynamic design."
  },
  {
    id: 5,
    title: "LED Matrix",
    description: "A programmable LED display system for animations, real-time text, and interactive visuals.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1563642421748-5047b6585a4a?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/led-matrix.jpg'),
    technologies: ["LED Programming", "Microcontrollers", "Animation"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Created a versatile LED matrix display system capable of showing dynamic content and animations."
  },
  {
    id: 6,
    title: "Distance Gauge Meter",
    description: "A portable ultrasonic sensor-based tool for precise distance measurement.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1597424216809-3ba9864aef26?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/distance-gauge.jpg'),
    technologies: ["Ultrasonic Sensors", "Arduino", "Electronics"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Developed a precise distance measurement tool using ultrasonic technology."
  },
  {
    id: 7,
    title: "Fully Autonomous RC Car",
    description: "An AI-powered self-driving RC car with obstacle detection and path planning.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1603816245457-9512e3facce9?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/autonomous-rc-car.jpg'),
    technologies: ["AI", "Computer Vision", "Robotics"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Built a self-driving RC car incorporating AI for autonomous navigation and obstacle avoidance."
  },
  {
    id: 8,
    title: "Anti-Theft System",
    description: "A home security system with door alarms and real-time cloud notifications using ESP32.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/anti-theft.jpg'),
    technologies: ["ESP32", "IoT", "Cloud Computing"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Implemented a comprehensive security system with real-time monitoring and alerts."
  },
  {
    id: 9,
    title: "Home Automation System",
    description: "IoT-based smart home system for remote appliance control via MQTT and ESP32.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1558002038-34cfedcd5066?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/home-automation.jpg'),
    technologies: ["IoT", "MQTT", "ESP32"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Created a complete home automation solution with remote control capabilities."
  },
  {
    id: 10,
    title: "UAV Radar System",
    description: "A drone-based radar for terrain mapping, object detection, and reconnaissance.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/uav-radar.jpg'),
    technologies: ["Radar", "UAV", "Signal Processing"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
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
    githubUrl: "https://github.com",
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
    image: "https://images.unsplash.com/photo-1584954810005-373c16c5aad0?w=800&auto=format&fit=crop&q=60",
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
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/fpv-drone.jpg'),
    technologies: ["FPV Systems", "Drone Technology", "Electronics"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    websiteUrl: "",
    details: "Collaborated with Ritesh to build a high-performance FPV racing drone."
  },
  {
    id: 14,
    title: "Bench Power Supply",
    description: "A custom variable power supply unit for electronics prototyping.",
    // Option 1: External URL approach
    image: "https://images.unsplash.com/photo-1544991178-5a3531dd6a7c?w=800&auto=format&fit=crop&q=60",
    // Option 2: Local file approach
    // image: require('../assets/projects/power-supply.jpg'),
    technologies: ["Electronics", "Power Systems", "PCB Design"],
    githubUrl: "https://github.com",
    linkedinUrl: "",
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