import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  initial: { y: '-100%', height: '100vh' },
  animate: { y: 0, height: '100vh', transition: { duration: 1 } },
  exit: { y: "-100%", height: "0vh",zIndex: -100, transition: { duration: 1 } }
};

const AnimatedPage = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="black-screen"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          background: 'grey',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPage;
