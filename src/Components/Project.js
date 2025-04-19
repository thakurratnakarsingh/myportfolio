import React from 'react'
import "../Styles/TeachnologyStack.css";
import Project1 from "../Assets/Project1.png";
import Nevbar from './Layout/Nevbar';
import Footer from './Layout/Footer';

const Project = () => {
    return (
        <div>
            <Nevbar />
            <div className="tech-container">
                <h2 className="tech-title">Projects</h2>
                <div className="stack-icons">
                    <img src={Project1} alt="GitHub" className="icon" />
                    <img src={Project1} alt="GitHub" className="icon" />
                    <img src={Project1} alt="GitHub" className="icon" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Project;

