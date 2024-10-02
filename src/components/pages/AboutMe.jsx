import React from "react";
import Layout from "../UI/Layout/Layout";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
      <Layout>
        <motion.div
          className="container page"
          
        >
          <div className="page-header">
            <h1>About Me</h1>
          </div>
        </motion.div>
      </Layout>
  );
};

export default AboutMe;
