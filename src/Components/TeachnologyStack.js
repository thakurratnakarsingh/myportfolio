import React from "react";
import "../Styles/TeachnologyStack.css";
import giticon from "../Assets/github-brands-solid.svg";
import reacticon from "../Assets/react-brands-solid.svg";
import nodeicon from "../Assets/node-brands-solid.svg";
import dockericon from "../Assets/docker-brands-solid.svg";
import androidicons from "../Assets/android-brands-solid.svg";
import iosicons from "../Assets/app-store-ios-brands-solid.svg";
import jsicons from "../Assets/js-brands-solid.svg";


const TechnologyStack = () => {
  return (
    <div className="tech-container">
      <h2 className="tech-title">Technology Stack</h2>
      <div className="stack-icons">
        <img src={giticon} alt="GitHub" className="icon" />
        <img src={reacticon} alt="React" className="icon" />
        <img src={nodeicon} alt="Node.js" className="icon" />
        <img src={dockericon} alt="Node.js" className="icon" />
        <img src={androidicons} alt="Node.js" className="icon" />
        <img src={iosicons} alt="Node.js" className="icon" />
        <img src={jsicons} alt="Node.js" className="icon" />

      </div>
    </div>
  );
};

export default TechnologyStack;
