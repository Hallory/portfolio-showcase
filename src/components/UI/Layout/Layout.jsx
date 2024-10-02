import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <Header />

      <AnimatePresence mode="wait">
        
        <motion.div
          initial={{ height: "100vh", scaleY: 100, top: -30, opacity: 1 }}
          animate={{ height: 0, opacity: 1, scaleY: 0 }}
          exit={{ height: 0, opacity: 1, scaleY: 0, zIndex: 0 }}
          transition={{ duration: 1.25 }}
          className={`h-screen w-screen fixed z-[20000] flex flex-col justify-center items-center bg-slate-300`}
        />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={`${location.pathname === "/writeme" ? "pt-0" :"pt-[100px]" } bg-slate-200`}
          
        >
          {children}
        </motion.main>
    
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Layout;
