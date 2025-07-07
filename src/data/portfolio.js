export const PERSONAL_INFO = {
  name: 'Mark Sere',
  title: 'Computer Science Student',
  subtitle: 'AI & Full-Stack Developer',
  tagline: 'Building practical solutions with modern technologies',
  bio: [
    "Hi! I'm Mark, a Computer Science student at SZTE TTIK in Szeged. I had an amazing Erasmus semester at JKU Linz, which broadened my perspective on technology and problem-solving.",
    "I work with machine learning, full-stack development, and enjoy building practical solutions. Currently focused on AI projects and expanding my skills in modern development practices."
  ],
  image: 'https://avatars.githubusercontent.com/u/126908754',
  contact: {
    email: 'seremark056@gmail.com',
    github: 'https://github.com/SereMark',
    linkedin: 'https://linkedin.com/in/seremark',
  },
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "8+", label: "Technologies" },
    { value: "100%", label: "Passion" }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Hybrid Chess AI",
    subtitle: "Deep Learning Meets Strategy",
    category: "AI",
    description: "An end-to-end framework combining neural networks with Monte Carlo Tree Search for strategic gameplay.",
    features: [
      "Neural Network Evaluation", 
      "MCTS Integration", 
      "Self-Play Training", 
      "ELO 2400+ Performance"
    ],
    tech: ["Python", "PyTorch", "Optuna", "Chess.py"],
    github: "https://github.com/SereMark/Hibrid-Chess-AI",
    status: "completed",
    year: "2024"
  },
  {
    id: 2,
    title: "RoboVision Suite",
    subtitle: "Computer Vision for Robotics",
    category: "AI",
    description: "Real-time object detection and tracking system for autonomous robot navigation.",
    features: [
      "YOLO Integration", 
      "3D Pose Estimation", 
      "Multi-Object Tracking", 
      "ROS2 Compatible"
    ],
    tech: ["Python", "PyTorch", "OpenCV", "ROS2"],
    github: "https://github.com/SereMark/robovision",
    status: "in_development",
    year: "2024",
    isComingSoon: true,
  },
  {
    id: 3,
    title: "MedAnalytics Platform",
    subtitle: "Healthcare Data Intelligence",
    category: "Software",
    description: "Full-stack medical data analysis platform with predictive modeling capabilities.",
    features: [
      "Patient Risk Prediction", 
      "Real-time Dashboards", 
      "HIPAA Compliant", 
      "RESTful API"
    ],
    tech: ["C#", ".NET Core", "React", "SQL Server"],
    github: "https://github.com/SereMark/medanalytics",
    status: "planned",
    year: "2024",
    isComingSoon: true,
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a Chess AI: From Minimax to Neural Networks",
    excerpt: "Exploring the evolution of chess engines and implementing a hybrid approach combining classical algorithms with deep learning.",
    category: "AI",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["AI", "Chess", "Neural Networks", "MCTS"],
    status: "draft",
    isComingSoon: true,
  },
  {
    id: 2,
    title: "Real-time Computer Vision in ROS2",
    excerpt: "A practical guide to implementing vision systems for autonomous robots using ROS2 and modern CV techniques.",
    category: "Robotics",
    date: "Coming Soon",
    readTime: "12 min read",
    tags: ["ROS2", "Computer Vision", "Robotics"],
    status: "draft",
    isComingSoon: true,
  },
  {
    id: 3,
    title: "My Erasmus Experience at JKU Linz",
    excerpt: "Reflections on studying abroad, cultural experiences, and academic growth during my exchange semester in Austria.",
    category: "Personal",
    date: "Coming Soon",
    readTime: "5 min read",
    tags: ["Erasmus", "Austria", "Student Life"],
    status: "draft",
    isComingSoon: true,
  }
];

export const EXPERIENCES = [
  {
    id: 1,
    year: "2023 - 2024",
    title: "Junior Full-Stack Developer",
    company: "Új algoritmus Kft",
    type: "Part-time",
    description: "Worked part-time (6 hours/day) on enterprise web applications using C#, .NET, and SQL Server. Gained experience in full software development lifecycle.",
    achievements: [
      "Developed and maintained enterprise web applications",
      "Collaborated with senior developers on complex projects",
      "Gained hands-on experience with agile development practices"
    ],
    tech: ["C#", ".NET Core", "MSSQL Server"],
    location: "Hungary"
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "Full-Stack Developer Intern",
    company: "Új algoritmus Kft",
    type: "Internship",
    description: "Developed and maintained web applications, learned software architecture patterns and best practices.",
    achievements: [
      "Built responsive web applications from scratch",
      "Learned modern development frameworks and tools",
      "Contributed to team projects and code reviews"
    ],
    tech: ["C#", ".NET Core", "MSSQL Server"],
    location: "Hungary"
  }
];

export const SKILLS = [
  { name: "Python", level: 90 },
  { name: "C#", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "PyTorch", level: 88 },
  { name: ".NET", level: 82 },
  { name: "React", level: 78 },
  { name: "SQL Server", level: 75 },
  { name: "Git", level: 85 }
];

export const DEV_ENVIRONMENT = [
  { 
    name: "Arch Linux", 
    description: "I use Arch, BTW 😉",
    category: "OS"
  },
  { 
    name: "Neovim", 
    description: "Terminal-based editing",
    category: "Editor"
  },
  { 
    name: "VS Code", 
    description: "For larger projects",
    category: "Editor"
  },
  { 
    name: "Docker", 
    description: "Containerization",
    category: "Tools"
  }
];

export const PROJECT_CATEGORIES = ['All', 'AI', 'Software'];

export const getProjectsByCategory = (category) => {
  if (category === 'All') return PROJECTS;
  return PROJECTS.filter(project => project.category === category);
};