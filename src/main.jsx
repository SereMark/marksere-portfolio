import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './styles/index.css';
import App from './App';

const Root = () => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.07,
      });

      const handleResize = () => {
        locoScroll.current.update();
      };
      window.addEventListener('resize', handleResize);

      const images = scrollRef.current.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        locoScroll.current.update();
      });

      return () => {
        window.removeEventListener('resize', handleResize);
        if (locoScroll.current) locoScroll.current.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (locoScroll.current) {
      locoScroll.current.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
      locoScroll.current.update();
    }
  }, [currentPage]);

  return (
    <div id="main-container" data-scroll-container ref={scrollRef}>
      <App currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);