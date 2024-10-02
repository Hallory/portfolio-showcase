import React from "react";
import Layout from "../UI/Layout/Layout";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <div className="container page">
        <motion.div className="page-header">
          <motion.div className="h-[80vh] flex flex-row justify-between bg-slate-200">
            <motion.div className="w-full h-full flex flex-wrap">

                Portfolio Site - Example
                <br />
                Based on Framer Motion / React / Tailwind CSS
            </motion.div>


          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
