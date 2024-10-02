import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Nav = ({ isOpen }) => {

  const telegrmLink = 'https://t.me/khalpeep';
  const instaLink = 'https://www.instagram.com/slivaysya/';
  const githubLink = 'https://github.com/Hallory';
  const linkedinLink = 'https://www.linkedin.com/in/dmytro-shevchenko-3006b7230/';

  
  return (
    <AnimatePresence >
      
      {isOpen && (
        <>
        <motion.div 
          initial = {{scaleY:0, opacity:0}}
          animate={{scaleY:1, opacity:1}}
          exit={{scaleY:1, opacity:1}}
          transition={{duration:0.5, ease:[0.22,1,0.36,1]}}
        />
    <motion.nav
      initial={{ y: 0, height: 0, zIndex: -1000 }}
      animate={{ y: 0, height: "100vh", zIndex: 1000 }}
        
      transition={{ duration: 0.5 }}
      className="h-screen w-screen fixed flex flex-col justify-center items-center bg-slate-300"
    >
      <div className="w-full h-full lg:pl-[150px] xs:pl-[50px] pt-[55px] pr-[80px] pb-[65px]">
        <div className="flex  items-center relative w-full h-[30px] mb-[40px] mt-[40px]">
          <motion.div
            initial={{ opacity: 0, x: 350, width: 0, height: 0 }}
            animate={{
              opacity: 1,
              x: 0, 
              width: "250px",
              height: "3px",
              backgroundColor: "white",
              type: "spring",
            }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -100, width: 0, height: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              width: "200px",
            }}
            className="flex justify-center items-center gap-[20px] text-3xl"
          >
            <AiFillGithub className="hover:cursor-pointer hover:text-[#0088cc]" onClick={() => window.open(githubLink, '_blank')}/>
            <AiFillInstagram className="hover:cursor-pointer hover:text-[#0088cc]" onClick={() => window.open(instaLink, '_blank')}/>
            <AiFillLinkedin className="hover:cursor-pointer hover:text-[#0088cc]" onClick={() => window.open(linkedinLink, '_blank')}/>
            <FaTelegramPlane className="hover:cursor-pointer hover:text-[#0088cc]" onClick={() => window.open(telegrmLink, '_blank')}/>
          </motion.div>
        </div>
        <div className="flex w-full h-[60%] flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
            className="flex items-center justify-between max-w-[70%]"
          >
            <motion.span className="nav-span">
              <Link className="text-with-outline" to="/">Home</Link>
            </motion.span>
              <div className=" w-1/3 lg:block hidden">
            <p>Back to home page</p>

              </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 1 }}
            className="flex items-center justify-between max-w-[70%]"
            
          >
            <motion.span className="nav-span">
              <Link to="/aboutme"
              className="text-with-outline">
                About Me
              </Link>
            </motion.span>
            <div className=" w-1/3 lg:block hidden">
              <p>Just a little bit about me</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 1 }}
            className="flex items-center justify-between max-w-[70%]"
          >
            <motion.span className="nav-span">
              <Link className="text-with-outline" to="/work">Work</Link>
            </motion.span>
            <div className=" w-1/3 lg:block hidden">
            <p>Some of my work</p>
              </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex items-center justify-between max-w-[70%]"
          >
            <motion.span className="nav-span">
              <Link className="text-with-outline" to="/writeme">Write Me</Link>
            </motion.span>
            <div className="lg:block hidden w-1/3">
            <p>Contact me in a touch</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav></>
      )}
    </AnimatePresence>
  );
};
export default Nav;
