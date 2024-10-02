import React, {useState} from "react";
import Layout from "../UI/Layout/Layout";
import {
  m as motion,
  LazyMotion,
  domAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Angebot from "./angebot/Angebot";
import emailjs from '@emailjs/browser';
const Work = () => {

  const words = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ]

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValidForm, setIsEmailValidForm] = useState(true);
  const [isMessageValidForm, setIsMessageValidForm] = useState(true);

  const isEmailValid = (email) => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
  };
  const isMessageValid = (message) => {
    return message.trim() !== '';
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValidForm(isEmailValid(newEmail)); 
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setIsMessageValidForm(isMessageValid(newMessage)); 
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = document.getElementById('myForm');

    const isEmail = isEmailValidForm && isEmailValid(email);
    const isMsg = isMessageValidForm && isMessageValid(message);

    if (!isEmail || !isMsg) {
      setIsEmailValidForm(isEmail);
      setIsMessageValidForm(isMsg);
      return;
    }
    try {
      await emailjs.sendForm('service_fimgioq', 'template_hzh4c19', form, 'm4P_tIwk80TDBMn_w');
      alert('Email sent successfully');
      setEmail('');
      setMessage('');
      form.reset();
    } catch (error) {
      alert('Error sending email:', error);
    }
  };

  return (
    <Layout>
      <div className="container page">
        <div className="page-header">
          <LazyMotion features={domAnimation}>
            <motion.div className="h-[80vh] w-full shadow-2xl flex flex-col justify-center items-center">
              <motion.form id="myForm"  onSubmit={sendEmail} className="w-full h-[80%] flex">
                <motion.div className="lg:w-1/2 lg:h-full lg:block hidden overflow-auto">
                  {words.map((word, index) => (
                    <Angebot key={index} word={word}/>
                  ))}
                </motion.div>
                <motion.div className="lg:w-1/2 h-full xs:w-full  flex flex-col justify-center items-center gap-[100px]">
                  <motion.div className="relative">
                    <motion.input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      initial={{ borderBottomWidth: 0 }}
                      animate={{
                        borderBottomWidth: "3px",
                        borderBottomColor: "gray",
                      }}
                      exit={{ borderBottomWidth: 0 }}
                      whileFocus={{
                        borderBottomWidth: "3px",
                        borderBottomColor: "white",
                      }}
                      className="contact-input"
                      placeholder="Your email"
                    ></motion.input>
                  </motion.div>

                  <motion.textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                    initial={{ borderBottomWidth: 0}}
                    animate={{
                      borderBottomWidth: "3px",
                      borderBottomColor: "gray",
                      
                    }}
                    exit={{ borderBottomWidth: 0 }}
                    whileFocus={{
                      borderBottomWidth: "3px",
                      borderBottomColor: "white",
                    }}
                    className="contact-input min-h-[40px] h-full overflow-auto"
                    placeholder="Text"
                  ></motion.textarea>
                  <motion.button
                  className="shadow-2xl hover:border-b-2 border-black text-black rounded-sm px-8 py-4"
                  type="submit"
                  >Send</motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </LazyMotion>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
