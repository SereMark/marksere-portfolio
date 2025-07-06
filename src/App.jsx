import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaExternalLinkAlt, FaCalendar, FaBars, FaTimes } from 'react-icons/fa';
import { SiPython, SiJavascript, SiPytorch, SiDotnet, SiReact, SiMysql, SiGit, SiArchlinux, SiNeovim, SiDocker } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const PROJECTS = [
  {
    id: 1,
    title: "Hybrid Chess AI",
    subtitle: "Deep Learning Meets Strategy",
    category: "AI",
    description: "An end-to-end framework combining neural networks with Monte Carlo Tree Search for strategic gameplay.",
    features: ["Neural Network Evaluation", "MCTS Integration", "Self-Play Training", "ELO 2400+ Performance"],
    tech: ["Python", "PyTorch", "Optuna", "Chess.py"],
    github: "https://github.com/SereMark/Hibrid-Chess-AI",
  },
  {
    id: 2,
    title: "RoboVision Suite",
    subtitle: "Computer Vision for Robotics",
    category: "AI",
    description: "Real-time object detection and tracking system for autonomous robot navigation.",
    features: ["YOLO Integration", "3D Pose Estimation", "Multi-Object Tracking", "ROS2 Compatible"],
    tech: ["Python", "PyTorch", "OpenCV", "ROS2"],
    github: "https://github.com/SereMark/robovision",
    isComingSoon: true,
  },
  {
    id: 3,
    title: "MedAnalytics Platform",
    subtitle: "Healthcare Data Intelligence",
    category: "Software",
    description: "Full-stack medical data analysis platform with predictive modeling capabilities.",
    features: ["Patient Risk Prediction", "Real-time Dashboards", "HIPAA Compliant", "RESTful API"],
    tech: ["C#", ".NET Core", "React", "SQL Server"],
    github: "https://github.com/SereMark/medanalytics",
    isComingSoon: true,
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a Chess AI: From Minimax to Neural Networks",
    excerpt: "Exploring the evolution of chess engines and implementing a hybrid approach combining classical algorithms with deep learning.",
    category: "AI",
    date: "Coming Soon",
    readTime: "8 min read",
    isComingSoon: true,
  },
  {
    id: 2,
    title: "Real-time Computer Vision in ROS2",
    excerpt: "A practical guide to implementing vision systems for autonomous robots using ROS2 and modern CV techniques.",
    category: "Robotics",
    date: "Coming Soon",
    readTime: "12 min read",
    isComingSoon: true,
  },
  {
    id: 3,
    title: "My Erasmus Experience at JKU Linz",
    excerpt: "Reflections on studying abroad, cultural experiences, and academic growth during my exchange semester in Austria.",
    category: "Personal",
    date: "Coming Soon",
    readTime: "5 min read",
    isComingSoon: true,
  }
];

const EXPERIENCES = [
  {
    year: "2023 - 2024",
    title: "Junior Full-Stack Developer",
    company: "Új algoritmus Kft",
    description: "Worked part-time (6 hours/day) on enterprise web applications using C#, .NET, and SQL Server. Gained experience in full software development lifecycle.",
    tech: ["C#", ".NET Core", "MSSQL Server"]
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Developer Intern",
    company: "Új algoritmus Kft",
    description: "Developed and maintained web applications, learned software architecture patterns and best practices.",
    tech: ["C#", ".NET Core", "MSSQL Server"]
  }
];

const SKILLS = [
  { name: "Python", icon: SiPython, level: 90 },
  { name: "C#", icon: SiDotnet, level: 85 },
  { name: "JavaScript", icon: SiJavascript, level: 80 },
  { name: "PyTorch", icon: SiPytorch, level: 88 },
  { name: ".NET", icon: SiDotnet, level: 82 },
  { name: "React", icon: SiReact, level: 78 },
  { name: "SQL Server", icon: SiMysql, level: 75 },
  { name: "Git", icon: SiGit, level: 85 }
];

const DEV_ENVIRONMENT = [
  { 
    name: "Arch Linux", 
    icon: SiArchlinux, 
    description: "I use Arch, BTW 😉",
    category: "OS"
  },
  { 
    name: "Neovim", 
    icon: SiNeovim, 
    description: "Terminal-based editing",
    category: "Editor"
  },
  { 
    name: "VS Code", 
    icon: VscCode, 
    description: "For larger projects",
    category: "Editor"
  },
  { 
    name: "Docker", 
    icon: SiDocker, 
    description: "Containerization",
    category: "Tools"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1 
    } 
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'environment', 'skills', 'experience', 'portfolio', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Environment', 'Skills', 'Experience', 'Portfolio', 'Blog', 'Contact'];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(targetId);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900"
          >
            Mark Sere
          </motion.div>

          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-200 font-medium relative ${
                  activeSection === item.toLowerCase() 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`block py-2 transition-colors duration-200 font-medium ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide">
            Portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
        >
          Mark Sere
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 space-y-2"
        >
          <p className="font-semibold text-gray-900">Computer Science Student • AI & Full-Stack Developer</p>
          <p className="text-base sm:text-lg">Building practical solutions with modern technologies</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg text-center"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "8+", label: "Technologies" },
    { value: "100%", label: "Passion" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl opacity-30 group-hover:opacity-50 transition duration-300" />
              <img
                src="https://avatars.githubusercontent.com/u/126908754"
                alt="Mark Sere"
                loading="lazy"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed">
              Hi! I'm Mark, a Computer Science student at SZTE TTIK in Szeged. I had an amazing Erasmus semester at JKU Linz, which broadened my perspective on technology and problem-solving.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed">
              I work with machine learning, full-stack development, and enjoy building practical solutions. Currently focused on AI projects and expanding my skills in modern development practices.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <a
                href="https://github.com/SereMark"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <FaGithub size={24} className="text-gray-700" />
              </a>
              <a
                href="https://linkedin.com/in/seremark"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <FaLinkedin size={24} className="text-gray-700" />
              </a>
              <a
                href="mailto:seremark056@gmail.com"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <FaEnvelope size={24} className="text-gray-700" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <skill.icon className="text-4xl text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">{skill.level}%</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-blue-600 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-600 rounded-full" />
              <div className="ml-8 bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-gray-600 font-medium">{exp.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">{exp.company}</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevEnvironmentSection() {
  return (
    <section id="environment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Development Environment
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            My carefully curated development setup for maximum productivity and minimal distractions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {DEV_ENVIRONMENT.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-center group"
            >
              <div className="mb-4 flex justify-center">
                <item.icon className="text-5xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium uppercase tracking-wide">
                {item.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
            <SiArchlinux className="text-xl" />
            <span className="font-mono text-sm">fastfetch</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI", "Software"];
  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-8" />
          
          <div className="flex justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={filter}
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 relative ${
                  project.isComingSoon ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                {project.isComingSoon && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-blue-600 text-sm font-medium mb-1">Coming Soon</div>
                      <div className="w-8 h-0.5 bg-blue-600 mx-auto opacity-60" />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {!project.isComingSoon && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          title="View on GitHub"
                        >
                          <FaGithub className="text-gray-700" />
                        </a>
                      )}
                      {!project.isComingSoon && project.demo && project.demo !== project.github && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          title="View Live Demo"
                        >
                          <FaExternalLinkAlt className="text-gray-700" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 font-medium">{project.subtitle}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2">Key Features</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 relative ${
                post.isComingSoon ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              {post.isComingSoon && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-blue-600 text-sm font-medium mb-1">Coming Soon</div>
                    <div className="w-8 h-0.5 bg-blue-600 mx-auto opacity-60" />
                  </div>
                </div>
              )}
              
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaCalendar /> {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const subject = encodeURIComponent('Portfolio Contact Form');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:seremark056@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoUrl, '_blank');
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Let's Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:seremark056@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md"
              >
                <FaEnvelope className="text-xl" />
                seremark056@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/seremark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md"
              >
                <FaLinkedin className="text-xl" />
                linkedin.com/in/seremark
              </a>
              <a
                href="https://github.com/SereMark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md"
              >
                <FaGithub className="text-xl" />
                github.com/SereMark
              </a>
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-8 rounded-xl shadow-md border border-gray-200"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none text-gray-900"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-600">
          © 2025 Mark Sere. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-semibold text-gray-900"
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-gray-900 min-h-screen"
    >
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <DevEnvironmentSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 z-40"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}