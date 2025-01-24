import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './styles/index.css';
import App from './App';

const Root = () => {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.07,
      });
    }
    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    };
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