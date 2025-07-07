import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import DevEnvironment from './components/DevEnvironment';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-gray-900 min-h-screen"
    >
      <Navigation />
      <Hero />
      <About />
      <DevEnvironment />
      <Skills />
      <Experience />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}