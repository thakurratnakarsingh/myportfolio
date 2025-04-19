import React from 'react';
import "../Styles/About.css";
import Layout from './Layout/Layout';

const About = ({ isInHome = false }) => {
  const content = (
    <div className="about-container">
      <div className="about-section">
        <h1 className="about-title">About Me</h1>
        <p className="about-intro">
          Hi, I'm Ratnakar Singh — a passionate Full-Stack Developer specializing in React Native, Node.js, and Python automation. I craft intelligent digital solutions with clean code and powerful performance.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-title">My Journey</h2>
        <p className="section-content">
          I started coding out of curiosity — tinkering with simple programs and diving deep into automation. Over time, I turned that passion into real-world applications, from bots and mobile apps to video streaming platforms and AI job scrapers.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-title">What I Do</h2>
        <ul className="skills-list">
          <li>⚛️ React Native apps for Android and iOS</li>
          <li>🐍 Python bots and automation (AI Agents, Selenium, etc.)</li>
          <li>🌐 Backend APIs with Node.js and Express</li>
          <li>🗃️ Databases with MySQL & MongoDB</li>
          <li>🎬 Video processing with FFmpeg & HLS streaming</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="section-title">Fun Facts</h2>
        <p className="section-content">
          When I'm not coding, you'll find me at the gym, brainstorming new ideas, or diving into the latest tech trends. I believe in building with heart and hustle.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-content">
          Want to build something together? Drop me a message or connect with me on <a href="https://wa.me/918576045056" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      </div>
    </div>
  );

  return isInHome ? content : <Layout>{content}</Layout>;
};

export default About;
