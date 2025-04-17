import React from "react";
import "../Styles/Boday.css";
import myImage from "../Assets/Profile.jpeg";
import { motion } from "framer-motion";

const Body: React.FC = () => {

  const handleWhatsAppRedirect = () => {
    window.open("https://api.whatsapp.com/send/?phone=918576045056&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <div className="MainContainer">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={require("../Assets/VIDO.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left Side - Information */}
      <motion.div
        className="InfoContainer"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="fadeIn" whileHover={{ scale: 1.1 }}>
          Hello, I'm Ratnakar Singh
        </motion.h1>
        <motion.h2 className="slideIn" whileHover={{ scale: 1.05 }}>
          MERN STACK DEVELOPER
        </motion.h2>
        <motion.p className="fadeIn" whileHover={{ scale: 1.05 }}>
          Passionate about building mobile applications with smooth UI and great performance.
        </motion.p>
        <motion.button
          className="cta-button slideIn"
          whileHover={{ scale: 1.1, backgroundColor: "#ff9800" }}
          onClick={handleWhatsAppRedirect}
        >
          Hire Me
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="ImageContainer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={myImage}
          alt="Ratnakar Singh"
          className="profileImage fadeIn"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
      </motion.div>
    </div>
  );
};

export default Body;
