import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Blog Titles
const posts = [
  {
    id: 1,
    title: 'How I Designed a Chess AI with CNN + MCTS',
    category: 'AI',
    image: 'https://via.placeholder.com/400x250?text=Chess+AI',
  },
  {
    id: 2,
    title: 'The Challenges of Learning Robotics as an AI Engineer',
    category: 'Robotics',
    image: 'https://via.placeholder.com/400x250?text=Robotics+Challenges',
  },
  {
    id: 3,
    title: 'My Goals for an Exchange Semester at JKU Linz',
    category: 'Personal Growth',
    image: 'https://via.placeholder.com/400x250?text=JKU+Linz+Goals',
  },
  {
    id: 4,
    title: 'Balancing Studies and Fitness: A Student’s Perspective',
    category: 'Personal Growth',
    image: 'https://via.placeholder.com/400x250?text=Balance+Studies+Fitness',
  },
];

// Projects
const projectsData = [
  {
    id: 1,
    title: 'Hybrid Chess AI',
    category: 'AI',
    description: 'Developed a hybrid chess AI for my thesis using CNN and MCTS, focusing on generalization and strategic gameplay. Opening book support added for human play.',
    image: 'https://via.placeholder.com/400x250?text=Chess+AI',
    github: 'https://github.com/SereMark/hybrid-chess-ai',
  },
  {
    id: 2,
    title: 'Full-Stack Developer Projects',
    category: 'Software',
    description:
      'Contributed to multiple front-end and back-end solutions, including designing web apps with C#, .NET, and JavaScript during my two years as a full-stack developer.',
    image: 'https://via.placeholder.com/400x250?text=FullStack+Projects',
    github: 'https://github.com/SereMark',
  },
  {
    id: 3,
    title: 'AI Experimentation and Coursework',
    category: 'AI',
    description: 'Designed smaller AI/ML projects during coursework, including image classifiers, sentiment analysis models, and data-driven web apps.',
    image: 'https://via.placeholder.com/400x250?text=AI+Experimentation',
    github: 'https://github.com/SereMark/ai-experimentation',
  },
];

// Focus Areas
const focusAreas = [
  {
    title: 'AI Solutions',
    icon: '💡',
    text: 'Designing intelligent software solutions leveraging deep learning techniques, including CNNs and reinforcement learning for decision-making systems.',
  },
  {
    title: 'Robotics Integration',
    icon: '🤖',
    text: 'Integrating AI algorithms with robotics to enable dynamic, real-world applications, currently exploring robotics foundations during coursework.',
  },
  {
    title: 'Full-Stack Development',
    icon: '🌐',
    text: 'Building modern, scalable applications using .NET, JavaScript, and cloud technologies, with two years of professional experience.',
  },
  {
    title: 'Research and Learning',
    icon: '🚀',
    text: 'Exploring advanced machine learning topics, including unsupervised learning, transformers, and Monte Carlo Tree Search for real-world applications.',
  },
];

// ================== FRAMER MOTION VARIANTS ================== //
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const heroStagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// ================== MAIN COMPONENT ================== //
const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI', 'Robotics', 'Software', 'Personal'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ================== HERO SECTION ================== */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden text-white"
        data-scroll-section
      >
        {/* Subtle dark animated gradient background */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r 
          from-[#0e1622] to-[#1b2735] animate-gradientBackground bg-[200%]"
        />

        {/* Hero Content */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="relative z-10 flex flex-col items-center text-center py-10 px-4 md:px-8"
        >
          <motion.h1
            variants={fadeUpVariant}
            className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl"
          >
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Mark Sere
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="mt-4 text-xl md:text-3xl font-semibold text-gray-200"
          >
            AI Engineer · Robotics Enthusiast · Full-Stack Dev
          </motion.p>

          <motion.p
            variants={fadeUpVariant}
            className="mt-4 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed mx-auto"
          >
            Creating intelligent software solutions that fuse cutting-edge research
            with real-world applications. Let’s reshape the future with AI & robotics.
          </motion.p>
        </motion.div>

        {/* Scroll Down Marker */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-none absolute bottom-24 w-full flex justify-center z-20"
        >
          <div className="flex flex-col items-center text-accent animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
            </svg>
            <span className="text-sm">Scroll Down</span>
          </div>
        </motion.div>

        {/* Shape Divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
                995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
                321.39,56.6Z"
              className="fill-current text-[#0e1622]"
            />
          </svg>
        </div>
      </section>

      {/* ================= SERVICES SECTION (Focus) ================= */}
      <section
        id="services-section"
        className="relative w-full bg-[#0e1622] text-gray-100 py-20"
        data-scroll-section
      >
        {/* Rotated divider at top */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 
          overflow-hidden leading-[0] z-10 rotate-180"
        >
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
                995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
                321.39,56.6Z"
              className="fill-current text-[#0e1622]"
            />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="relative max-w-7xl mx-auto px-4 md:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-4 text-center">
            My Focus
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-300 mb-10 leading-relaxed">
            Merging deep learning, robotics know-how, and a full-stack mindset to
            craft solutions that inspire and transform industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#1b2735] rounded-lg p-6 shadow-lg flex flex-col items-center 
                  text-center transform transition hover:-translate-y-1 hover:shadow-2xl hover:scale-105"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-accent mb-2">{area.title}</h3>
                <p className="text-gray-200 leading-relaxed">{area.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
                995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
                321.39,56.6Z"
              className="fill-current text-[#0e1622]"
            />
          </svg>
        </div>
      </section>

      {/* ================== ABOUT SECTION ================== */}
      <section
        className="relative w-full overflow-hidden text-gray-100 py-20"
        data-scroll-section
      >
        <div className="absolute inset-0 z-0 bg-[#0e1622] opacity-95" />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 
          overflow-hidden leading-[0] z-10"
        >
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
                995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
                321.39,56.6Z"
              className="fill-current text-[#0e1622]"
            />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="relative z-10 max-w-4xl mx-auto px-4 md:px-8"
        >
          <h2 className="text-4xl font-extrabold text-accent mb-8">About Me</h2>

          <div className="bg-[#1b2735] rounded-xl shadow-md p-8">
            {/* Profile and Intro */}
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img
                src="assets/profile.jpg"
                alt="profile"
                className="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-6 border-4 border-accent object-cover"
              />
              <div>
                <p className="mb-4 leading-relaxed text-gray-200">
                  I&apos;m <strong>Mark Sere</strong>, a third-year Computer Science student at the University of Szeged TTIK, majoring in Software Engineering. Currently, I&apos;m pursuing an exchange semester at JKU Linz, focusing on machine learning, robotics, and AI-intensive systems.
                </p>
                <p className="leading-relaxed text-gray-200">
                  My interests lie at the intersection of artificial intelligence and robotics, with aspirations to contribute to transformative fields like healthcare and autonomous systems. When I’m not coding, I’m exploring new ways to stay active or refining my chess AI thesis project that blends convolutional neural networks with Monte Carlo Tree Search.
                </p>
              </div>
            </div>

            {/* Stats / Achievements */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Quick Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <h4 className="text-4xl font-extrabold text-accent">3</h4>
                  <p className="text-sm mt-2 text-gray-300">Years of Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-accent">5</h4>
                  <p className="text-sm mt-2 text-gray-300">Academic & Professional Projects</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-accent">6</h4>
                  <p className="text-sm mt-2 text-gray-300">Programming Languages</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-accent">5</h4>
                  <p className="text-sm mt-2 text-gray-300">Countries Visited</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =============== PORTFOLIO SECTION =============== */}
      <section
        id="portfolio-section"
        className="relative w-full overflow-hidden text-gray-100 py-20"
        data-scroll-section
      >
        <div className="absolute inset-0 z-0 bg-[#0e1622] opacity-95" />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 
          overflow-hidden leading-[0] z-10"
        >
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
                995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
                321.39,56.6Z"
              className="fill-current text-[#0e1622]"
            />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-8"
        >
          <h2 className="text-4xl font-extrabold text-accent mb-8">Portfolio</h2>

          {/* Filter Buttons */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition 
                  ${
                    cat === activeCategory
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#1b2735] rounded-lg overflow-hidden shadow-lg 
                  transform transition hover:-translate-y-1 hover:shadow-2xl 
                  hover:scale-105"
              >
                <img
                  src="assets/placeholder.png"
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm flex-grow text-gray-300">
                    {project.description}
                  </p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-accent text-white 
                        rounded-full hover:bg-accent-dark transition self-start"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =============== BLOG SECTION =============== */}
      <section
        className="relative w-full overflow-hidden text-gray-100 py-20"
        data-scroll-section
      >
        <div className="absolute inset-0 z-0 bg-[#0e1622] opacity-95" />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 
          overflow-hidden leading-[0] z-10"
        >
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
                995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
                321.39,56.6Z"
              className="fill-current text-[#0e1622]"
            />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-8"
        >
          <h2 className="text-4xl font-extrabold text-accent mb-8">Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#1b2735] rounded-lg overflow-hidden 
                  shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl 
                  hover:scale-105"
              >
                <img
                  src="assets/placeholder.png"
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    Category: {post.category}
                  </p>
                  <button
                    className="px-4 py-2 bg-accent text-white rounded-full 
                    hover:bg-accent-dark transition"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================== FOOTER SECTION ================== */}
      <footer
        data-scroll-section
        className="relative bg-[#0e1622] text-gray-300 py-10 min-h-[200px]"
      >
        {/* Shape divider at the top */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 
          overflow-hidden leading-[0] z-10 rotate-180"
        >
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
                 995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
                 321.39,56.6Z"
              className="fill-current text-[#0e1622]"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
          {/* Left content */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-white">Mark Sere</h2>
            <p className="text-gray-400 text-sm">AI Engineer · Robotics · Full-Stack</p>
          </div>

          {/* Right content - Social / Links */}
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6">
            <a
              href="mailto:seremark056@gmail.com"
              className="hover:text-accent transition"
            >
              Email
            </a>
            <a
              href="https://github.com/SereMark"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seremark/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="max-w-7xl mx-auto px-4 mt-6 flex justify-center space-x-6">
          <a
            href="mailto:seremark056@gmail.com"
            className="hover:text-accent transition text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/SereMark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/seremark/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mark Sere. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;