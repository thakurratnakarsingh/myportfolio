import React from "react";
import { motion } from "framer-motion";
import Nevbar from "./Layout/Nevbar.js";

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-blue-500 opacity-30 blur-[120px]"></div>

      {/* Navbar */}
      <Nevbar />

      {/* About Section */}
      
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center">
        {/* Profile Image */}
        <motion.div 
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="https://via.placeholder.com/250" 
            alt="Profile" 
            className="rounded-full shadow-2xl border-4 border-blue-500 transform transition-transform hover:scale-105 hover:rotate-3"
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-12 p-8 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I'm <span className="text-blue-400 font-semibold">Ratnakar Singh</span>, 
            a passionate **React Native Developer** with expertise in **scalable and high-performance mobile apps**.  
            I specialize in **React, Next.js, and Node.js**, delivering **seamless user experiences** across platforms.
          </p>

          <motion.button 
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all hover:shadow-blue-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
