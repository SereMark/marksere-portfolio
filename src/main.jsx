import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './styles/index.css';
import App from './App';

const Root = () => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.07,
      });

      // Update LocomotiveScroll on window resize
      const handleResize = () => {
        locoScroll.current.update();
      };

      window.addEventListener('resize', handleResize);

      // Refresh LocomotiveScroll after images load
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

  return (
    <div id="main-container" data-scroll-container ref={scrollRef}>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);