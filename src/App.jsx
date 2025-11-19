import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

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
import BackgroundCanvas from './components/3d/BackgroundCanvas';
import CustomCursor from './components/3d/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen text-white selection:bg-accent-cyan selection:text-bg-main">
      <CustomCursor />
      <BackgroundCanvas />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10"
      >
        <Navigation />
        <main>
          <Hero />
          <About />
          <DevEnvironment />
          <Skills />
          <Experience />
          <Portfolio />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </div>
  );
}