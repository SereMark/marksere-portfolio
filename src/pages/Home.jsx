import React,{useState} from "react"
import {motion} from "framer-motion"
import {FaGithub,FaLinkedin,FaEnvelope} from "react-icons/fa"
import {posts,projectsData} from "../data/homeData"
const fadeUp={hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:0.6,ease:"easeInOut"}}},container={hidden:{},show:{transition:{staggerChildren:0.2}}},Wave=({flip,h="h-20"})=><div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-10"><svg className={`block w-full ${h} ${flip?"rotate-180":""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,321.39,56.6Z" className="fill-current text-[#0e1622]"/></svg></div>
export default ()=>{const [cat,setCat]=useState("All"),cats=["All","AI","Robotics","Software","Personal"],filtered=cat==="All"?projectsData:projectsData.filter(p=>p.category===cat);return(<>
  <section className="relative min-h-screen flex flex-col justify-center overflow-hidden text-white" data-scroll-section>
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-secondary animate-gradientBackground bg-200"/>
    <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 text-center py-10 px-4 md:px-8">
      <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold drop-shadow-xl">
        Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500 transition-colors cursor-pointer">Mark Sere</span>
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-4 text-xl md:text-3xl font-semibold text-gray-200">
        AI Engineer · Robotics Enthusiast · Full-Stack Dev
      </motion.p>
      <motion.p variants={fadeUp} className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
        Crafting intelligent software that fuses research with real-world impact. Let's shape the future with AI & robotics.
      </motion.p>
    </motion.div>
    <motion.div variants={fadeUp} transition={{delay:1,duration:1.5}} className="absolute bottom-24 w-full flex justify-center z-20">
      <div className="flex flex-col items-center text-accent animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7"/>
        </svg>
        <span className="text-sm">Scroll Down</span>
      </div>
    </motion.div>
    <Wave/>
  </section>
  <section className="relative py-20 text-gray-100" data-scroll-section>
    <div className="absolute inset-0 z-0 bg-primary"/>
    <Wave/>
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-accent mb-8 text-center">About Me</h2>
      <div className="bg-secondary rounded-xl shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img src="assets/profile.jpg" alt="Profile" loading="lazy" className="w-36 h-36 rounded-full border-4 border-accent object-cover mb-4 md:mb-0 md:mr-6"/>
          <div>
            <p className="mb-4 text-gray-200 leading-relaxed">
              I'm <strong>Mark Sere</strong>, a Computer Science student specializing in Software Engineering, on an exchange semester at JKU Linz focused on machine learning, robotics, and AI systems.
            </p>
            <p className="text-gray-200 leading-relaxed">
              My passion drives innovation in healthcare and autonomous systems. When not coding, I stay active or tinker with my chess AI.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-accent">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><h4 className="text-4xl font-extrabold text-accent">3</h4><p className="text-sm mt-2 text-gray-300">Years</p></div>
            <div><h4 className="text-4xl font-extrabold text-accent">5</h4><p className="text-sm mt-2 text-gray-300">Projects</p></div>
            <div><h4 className="text-4xl font-extrabold text-accent">6</h4><p className="text-sm mt-2 text-gray-300">Langs</p></div>
            <div><h4 className="text-4xl font-extrabold text-accent">5</h4><p className="text-sm mt-2 text-gray-300">Countries</p></div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
  <section id="portfolio" className="relative py-20 text-gray-100" data-scroll-section>
    <div className="absolute inset-0 z-0 bg-primary"/>
    <Wave/>
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-accent mb-8 text-center">Portfolio</h2>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {cats.map(c=><button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-full font-semibold transition ${c===cat?"bg-accent text-white shadow-md":"bg-secondary text-gray-200 hover:bg-accent hover:text-white"}`} aria-label={`Show ${c} projects`}>{c}</button>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p=><motion.div key={p.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="bg-secondary rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
          <img src="assets/placeholder.png" alt={p.title} loading="lazy" className="w-full h-48 object-cover"/>
          <div className="p-4 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm flex-grow text-gray-300">{p.description}</p>
          </div>
        </motion.div>)}
      </div>
    </motion.div>
    <Wave/>
  </section>
  <section className="relative py-20 text-gray-100" data-scroll-section>
    <div className="absolute inset-0 z-0 bg-primary"/>
    <Wave/>
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-accent mb-8 text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post,i)=><motion.div key={post.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*0.1}} className="bg-secondary rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
          <img src="assets/placeholder.png" alt={post.title} loading="lazy" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-300 mb-2">Category: {post.category}</p>
            <button className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition" aria-label={`Read more about ${post.title}`}>Read More</button>
          </div>
        </motion.div>)}
      </div>
    </motion.div>
    <Wave/>
  </section>
  <footer className="relative bg-primary text-gray-300 py-10" data-scroll-section>
    <div className="absolute top-0 left-0 right-0 -mt-1 pointer-events-none z-10"><Wave flip h="h-16"/></div>
    <div className="relative z-20 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-extrabold text-white">Mark Sere</h2>
          <p className="text-gray-400 text-sm">AI Engineer · Robotics · Full-Stack</p>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:seremark056@gmail.com" className="hover:text-accent transition" aria-label="Email">Email</a>
          <a href="https://github.com/SereMark" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/seremark/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex justify-center space-x-6 mb-4 md:mb-0">
          <a href="mailto:seremark056@gmail.com" className="hover:text-accent transition text-2xl" aria-label="Email"><FaEnvelope/></a>
          <a href="https://github.com/SereMark" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition text-2xl" aria-label="GitHub"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/seremark/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition text-2xl" aria-label="LinkedIn"><FaLinkedin/></a>
        </div>
        <div className="text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} Mark Sere. All rights reserved.</div>
      </div>
    </div>
  </footer>
</>)}