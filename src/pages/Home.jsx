import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { focusAreas, posts, projectsData } from '../data/homeData'
import { fadeUpVariant, heroStagger } from '../motionVariants'

const WaveDivider = ({ flipped = false, heightClass = "h-20" }) => (
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-10">
    <svg className={`block w-full ${heightClass} ${flipped ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,321.39,56.6Z" className="fill-current text-[#0e1622]"/>
    </svg>
  </div>
)

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'AI', 'Robotics', 'Software', 'Personal']
  const filteredProjects = activeCategory === 'All' ? projectsData : projectsData.filter(p => p.category === activeCategory)
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden text-white" data-scroll-section>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0e1622] to-[#1b2735] animate-gradientBackground bg-[length:200%]" />
        <motion.div variants={heroStagger} initial="hidden" animate="show" className="relative z-10 text-center py-10 px-4 md:px-8">
          <motion.h1 variants={fadeUpVariant} transition={{ duration: 0.5, ease: "easeOut" }} className="text-5xl md:text-7xl font-extrabold drop-shadow-xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500 transition-colors cursor-pointer">Mark Sere</span>
          </motion.h1>
          <motion.p variants={fadeUpVariant} transition={{ duration: 0.5, ease: "easeOut" }} className="mt-4 text-xl md:text-3xl font-semibold text-gray-200">
            AI Engineer · Robotics Enthusiast · Full-Stack Dev
          </motion.p>
          <motion.p variants={fadeUpVariant} transition={{ duration: 0.6, ease: "easeOut" }} className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
            Creating intelligent software solutions that fuse cutting-edge research with real-world applications. Let’s reshape the future with AI & robotics.
          </motion.p>
        </motion.div>
        <motion.div variants={fadeUpVariant} initial="hidden" animate="show" transition={{ duration: 1.5, delay: 1, ease: "easeOut" }} className="pointer-events-none absolute bottom-24 w-full flex justify-center z-20">
          <div className="flex flex-col items-center text-accent animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
            </svg>
            <span className="text-sm">Scroll Down</span>
          </div>
        </motion.div>
        <WaveDivider />
      </section>
      <section className="relative w-full overflow-hidden text-gray-100 py-20" data-scroll-section>
        <div className="absolute inset-0 z-0 bg-[#0e1622]"/>
        <WaveDivider/>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant} className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold text-accent mb-8">About Me</h2>
          <div className="bg-[#1b2735] rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img src="assets/profile.jpg" alt="Profile" loading="lazy" className="w-36 h-36 rounded-full border-4 border-accent object-cover mb-4 md:mb-0 md:mr-6"/>
              <div>
                <p className="mb-4 text-gray-200 leading-relaxed">
                  I&apos;m <strong>Mark Sere</strong>, a Computer Science student specializing in Software Engineering, currently on an exchange semester at JKU Linz focused on machine learning, robotics, and AI systems.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  My passion lies at the intersection of AI and robotics, driving innovation in transformative fields like healthcare and autonomous systems. When not coding, I stay active or work on my chess AI project.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Quick Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div><h4 className="text-4xl font-extrabold text-accent">3</h4><p className="text-sm mt-2 text-gray-300">Years Experience</p></div>
                <div><h4 className="text-4xl font-extrabold text-accent">5</h4><p className="text-sm mt-2 text-gray-300">Projects</p></div>
                <div><h4 className="text-4xl font-extrabold text-accent">6</h4><p className="text-sm mt-2 text-gray-300">Languages</p></div>
                <div><h4 className="text-4xl font-extrabold text-accent">5</h4><p className="text-sm mt-2 text-gray-300">Countries</p></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="portfolio-section" className="relative w-full overflow-hidden text-gray-100 py-20" data-scroll-section>
        <div className="absolute inset-0 z-0 bg-[#0e1622]"/>
        <WaveDivider/>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold text-accent mb-8 text-center">Portfolio</h2>
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map(cat =>
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full font-semibold transition ${cat === activeCategory ? 'bg-accent text-white shadow-md' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`} aria-label={`Show ${cat} projects`}>{cat}</button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project =>
              <motion.div key={project.id} variants={fadeUpVariant} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[#1b2735] rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                <img src="assets/placeholder.png" alt={project.title} loading="lazy" className="w-full h-48 object-cover"/>
                <div className="p-4 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm flex-grow text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
        <WaveDivider/>
      </section>
      <section className="relative w-full overflow-hidden text-gray-100 py-20" data-scroll-section>
        <div className="absolute inset-0 z-0 bg-[#0e1622]"/>
        <WaveDivider/>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold text-accent mb-8 text-center">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) =>
              <motion.div key={post.id} variants={fadeUpVariant} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-[#1b2735] rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                <img src="assets/placeholder.png" alt={post.title} loading="lazy" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">Category: {post.category}</p>
                  <button className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition" aria-label={`Read more about ${post.title}`}>Read More</button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
        <WaveDivider/>
      </section>
      <footer className="relative bg-[#0e1622] text-gray-300 py-10 min-h-[200px]" data-scroll-section>
        <WaveDivider flipped heightClass="h-16" />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-extrabold text-white">Mark Sere</h2>
              <p className="text-gray-400 text-sm">AI Engineer · Robotics · Full-Stack</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="mailto:seremark056@gmail.com" className="hover:text-accent transition" aria-label="Email">Email</a>
              <a href="https://github.com/SereMark" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="GitHub">GitHub</a>
              <a href="https://www.linkedin.com/in/seremark/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-6 flex justify-center space-x-6">
            <a href="mailto:seremark056@gmail.com" className="hover:text-accent transition text-2xl" aria-label="Email"><FaEnvelope /></a>
            <a href="https://github.com/SereMark" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition text-2xl" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/seremark/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition text-2xl" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} Mark Sere. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}

export default Home