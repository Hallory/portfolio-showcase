import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");

    if (visitedBefore) {
      setIsLoading(false);
    } else {
      localStorage.setItem("visitedBefore", "true"); 
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); 
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen bg-black"
    >
      {isLoading && (
        <div className="spinner">
        </div>
      )}
    </motion.div>
  );
};

export default Preloader;