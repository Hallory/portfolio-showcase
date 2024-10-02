import React from 'react';
import { motion } from 'framer-motion';
const Angebot = ({word}) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className='h-full w-full flex justify-center align-center'>
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            whileInView={{opacity:1}}
            className='text-center flex justify-center'
            >{word}</motion.p>
        </motion.div>
    );
};

export default Angebot;