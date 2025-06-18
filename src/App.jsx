import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaExternalLinkAlt, FaCalendar, FaBars, FaTimes } from 'react-icons/fa';
import { SiPython, SiJavascript, SiTensorflow, SiPytorch, SiDotnet, SiReact, SiPostgresql } from 'react-icons/si';

// Enhanced Data
const PROJECTS = [
  {
    id: 1,
    title: "Hybrid Chess AI",
    subtitle: "Deep Learning Meets Strategy",
    category: "AI",
    description: "An end-to-end framework combining neural networks with Monte Carlo Tree Search for strategic gameplay.",
    features: ["Neural Network Evaluation", "MCTS Integration", "Self-Play Training", "ELO 2400+ Performance"],
    tech: ["Python", "PyTorch", "Optuna", "Chess.py"],
    github: "https://github.com/SereMark/hybrid-chess-ai",
    demo: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "RoboVision Suite",
    subtitle: "Computer Vision for Robotics",
    category: "AI",
    description: "Real-time object detection and tracking system for autonomous robot navigation.",
    features: ["YOLO Integration", "3D Pose Estimation", "Multi-Object Tracking", "ROS2 Compatible"],
    tech: ["Python", "TensorFlow", "OpenCV", "ROS2"],
    github: "https://github.com/SereMark/robovision",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "MedAnalytics Platform",
    subtitle: "Healthcare Data Intelligence",
    category: "Software",
    description: "Full-stack medical data analysis platform with predictive modeling capabilities.",
    features: ["Patient Risk Prediction", "Real-time Dashboards", "HIPAA Compliant", "RESTful API"],
    tech: ["C#", ".NET Core", "React", "PostgreSQL"],
    github: "https://github.com/SereMark/medanalytics",
    demo: "#",
    gradient: "from-green-500 to-teal-500"
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a Chess AI: From Minimax to Neural Networks",
    excerpt: "Exploring the evolution of chess engines and implementing a hybrid approach combining classical algorithms with deep learning.",
    category: "AI",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    id: 2,
    title: "Real-time Computer Vision in ROS2",
    excerpt: "A practical guide to implementing vision systems for autonomous robots using ROS2 and modern CV techniques.",
    category: "Robotics",
    date: "Jan 10, 2025",
    readTime: "12 min read",
    gradient: "from-orange-600 to-red-600"
  },
  {
    id: 3,
    title: "My Exchange Experience at JKU Linz",
    excerpt: "Reflections on studying abroad, cultural experiences, and academic growth during my semester in Austria.",
    category: "Personal",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    gradient: "from-green-600 to-teal-600"
  }
];

const EXPERIENCES = [
  {
    year: "2021 - 2022",
    title: "Junior Full-Stack Developer",
    company: "Új algoritmus Kft",
    description: "Worked on enterprise web applications using C#, .NET, JavaScript, and SQL.",
    tech: ["C#", ".NET Core", "MSSQL Server"]
  },
  {
    year: "2020 - 2021",
    title: "Full-Stack Developer Intern",
    company: "Új algoritmus Kft",
    description: "Developed and maintained full-stack apps, gaining experience in software architecture.",
    tech: ["C#", ".NET Core", "MSSQL Server"]
  }
];

const SKILLS = [
  { name: "Python", icon: SiPython, level: 90, color: "text-yellow-400" },
  { name: "C#", icon: SiDotnet, level: 85, color: "text-purple-400" },
  { name: "JavaScript", icon: SiJavascript, level: 80, color: "text-yellow-300" },
  { name: "TensorFlow", icon: SiTensorflow, level: 85, color: "text-orange-400" },
  { name: "PyTorch", icon: SiPytorch, level: 88, color: "text-red-400" },
  { name: ".NET", icon: SiDotnet, level: 82, color: "text-purple-500" },
  { name: "React", icon: SiReact, level: 78, color: "text-cyan-400" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 75, color: "text-blue-400" }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Components
function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Blog', 'Contact'];

  // Custom scroll animation handler using Framer Motion's animate
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    // Close the menu immediately
    setIsOpen(false);

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Calculate the target position
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.scrollY;

    // Animate scroll position
    animate(startPosition, targetPosition, {
      type: "spring",
      damping: 30,
      stiffness: 200,
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Mark Sere
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
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
  const particlesRef = useRef(null);

  useEffect(() => {
    const particles = particlesRef.current;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-cyan-400 rounded-full opacity-50';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `float ${10 + Math.random() * 20}s linear infinite`;
      particles.appendChild(particle);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        <div ref={particlesRef} className="absolute inset-0" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6"
        >
          <span className="text-cyan-400 text-lg font-semibold">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Mark Sere</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          <span className="block mb-2">AI Engineer · Robotics Enthusiast · Full-Stack Developer</span>
          <span className="text-lg text-gray-400">Building intelligent systems that shape tomorrow</span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300"
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300" />
              <img
                src="https://avatars.githubusercontent.com/u/126908754"
                alt="Mark Sere"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-6">
              Hi! I'm Mark, a Computer Science student at JKU Linz with a passion for creating intelligent systems that make a real difference. My journey spans from building enterprise software to developing cutting-edge AI solutions.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8">
              I specialize in machine learning, robotics, and full-stack development. When I'm not coding, you'll find me training my chess AI, hitting the gym, or exploring new places.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <a
                href="https://github.com/SereMark"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/seremark"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:seremark056@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <FaEnvelope size={24} />
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
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
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
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <skill.icon className={`text-4xl ${skill.color}`} />
                <span className="text-2xl font-bold text-gray-300">{skill.level}%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
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
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              <div className="ml-8 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                  <span className="text-gray-400">{exp.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">{exp.company}</h4>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-400">
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

function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI", "Software"];
  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
          
          <div className="flex justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 font-semibold">{project.category}</span>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <FaGithub />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
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
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
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
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaCalendar /> {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300">{post.excerpt}</p>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:seremark056@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaEnvelope className="text-xl" />
                seremark056@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/seremark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
                linkedin.com/in/seremark
              </a>
              <a
                href="https://github.com/SereMark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors"
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
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
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
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © 2025 Mark Sere. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 z-40"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}