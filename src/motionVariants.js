export const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  };
  
  export const containerVariant = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  export const heroStagger = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };  