import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      if (cursor && e.target.tagName.toLowerCase() === 'a') {
        cursor.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e) => {
      if (cursor && e.target.tagName.toLowerCase() === 'a') {
        cursor.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
};

export default CustomCursor;