import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

function Home() {
  return (
    <motion.section 
      id="home" 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      variants={pageVariants}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my work and skills in web development.</p>
    </motion.section>
  );
}

export default Home;
