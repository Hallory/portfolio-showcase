import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import example1 from '../../images/projects/protfolio_example.png'
import Anime2 from "../../images/anime2.jpg";
import Anime3 from "../../images/anime3.jpg";

const AnimatedImage = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div className="container w-full h-full pt-[100px]">
      <motion.div
        ref={ref1}
        className="works_container gap-[100px] h-[30vh] flex  align-bottom w-full bg-slate-200"
      >
        <motion.div
          className="dotted relative"
          initial={{ opacity: 1, height: "100%", y: "30vh", width: "50%" }}
          animate={{ opacity: 1, height: "100%", y: 0, width: "50%" }}
        >
          {inView1 && (
            <motion.div
              className="relative"
              initial={{
                opacity: 0,
                height: 0,
                y: "30vh",
                width: "100%",
                backgroundColor: "white",
              }}
              animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.img
                initial={{ opacity: 0, height: 0, y: "30vh", width: "100%" }}
                animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
                transition={{ delay: 1.25, duration: 1 }}
                src={example1}
                className="max-h-[100%] object-cover relative"
                alt="Anime"
              />
            </motion.div>
          )}
        </motion.div>
        <p>Example green portfolio</p>
      </motion.div>

      <motion.div
        ref={ref2}
        className="h-[30vh] gap-[100px] flex align-bottom justify-end w-full bg-slate-200"
      >
        <motion.div
          className="dotted relative"
          initial={{ opacity: 1, height: "100%", y: "30vh", width: "50%" }}
          animate={{ opacity: 1, height: "100%", y: 0, width: "50%" }}
        >
          {inView2 && (
            <motion.div
              className="relative"
              initial={{
                opacity: 0,
                height: 0,
                y: "30vh",
                width: "100%",
                backgroundColor: "white",
              }}
              animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.img
                initial={{ opacity: 0, height: 0, y: "30vh", width: "100%" }}
                animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
                transition={{ delay: 1.25, duration: 1 }}
                src={Anime2}
                className="max-h-[100%] object-cover"
                alt="Anime"
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref3}
        className="h-[30vh] gap-[100px] flex align-bottom w-full bg-slate-200"
      >
        <motion.div
          className="dotted relative"
          initial={{ opacity: 1, height: "100%", y: "30vh", width: "50%" }}
          animate={{ opacity: 1, height: "100%", y: 0, width: "50%" }}
        >
          {inView3 && (
            <motion.div
              className="relative"
              initial={{
                opacity: 0,
                height: 0,
                y: "30vh",
                width: "100%",
                backgroundColor: "white",
              }}
              animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.img
                initial={{ opacity: 0, height: 0, y: "30vh", width: "100%" }}
                animate={{ opacity: 1, height: "100%", y: 0, width: "100%" }}
                transition={{ delay: 1.25, duration: 1 }}
                src={Anime3}
                className="max-h-[100%] object-cover"
                alt="Anime"
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
