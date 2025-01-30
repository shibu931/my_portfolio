'use client'; 

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(typeof window !== 'undefined');
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: 'blue', 
        transformOrigin: '0%', 
        zIndex: 1000, 
      }}
    />
  );
};

export default ScrollIndicator;