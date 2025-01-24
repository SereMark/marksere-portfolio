import React from 'react';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <CustomCursor />
      <Home />
      <Footer data-scroll-section />
    </>
  );
}

export default App;