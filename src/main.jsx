import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const Root = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme) {
      setTheme(userTheme);
      document.documentElement.classList.toggle('dark', userTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);