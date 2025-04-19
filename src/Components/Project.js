import React from 'react'
import "../Styles/TeachnologyStack.css";
import "../Styles/Project.css";
import Layout from './Layout/Layout';

const Project = ({ isInHome = false }) => {
    const projects = [
        {
            title: "NIPPON INDIA MUTUAL FUND",
            link: "https://play.google.com/store/search?q=nippon+india+mutual+fund&c=apps&hl=en&gl=US",
            tech: "React native, JavaScript, Class component, SIM Binding",
            description: "Nippon India Mutual Fund app (1M+ downloads) offers SIM-based verification, Video KYC, Step-up SIP, SIP, and lumpsum investments."
        },
        {
            title: "SIMPLY SAVE",
            link: "https://play.google.com/store/apps/details?id=com.rmf.simplysave&hl=en&gl=US",
            tech: "React-native, Hooks",
            description: "Migrated a Mobily app to React Native, improving UI/UX and performance for 100+ users across Android and iOS platforms"
        },
        {
            title: "SPORTS FACILITY (ADMIN)",
            link: "https://apps.apple.com/us/app/sports-facility-manager/id6470624293",
            tech: "React-native, TypeScript, Socket",
            description: "Sports application here admin can create training and add coach for user(Sports narve)"
        },
        {
            title: "KDMC SMART PARKING",
            link: "#https://play.google.com/store/apps/details?id=com.vaaaninfra.kdmcsmartparking",
            tech: "Android, Java, XML, SQLite",
            description: "Pre Booking for parking with pass of vehicle for parking in public places"
        },
        {
            title: "PAYTM AND PINE SWIPE MACHINE",
            link: "https://play.google.com/store/apps/details?id=com.vaaaninfra.iptms",
            tech: "Android Java, SQLite, XML, SDK INTRAGRATION",
            description: "Bulid Application to validate booking and pass done by the kdmc smart parking application on location."
        },
        {
            title: "MAN POWER MANAGEMENT",
            link: "https://play.google.com/store/apps/details?id=com.vaaaninfra.projectmanpower",
            tech: "Android, Java, XML, SQLite",
            description: "Attendance management system with geofencing"
        },
        {
            title: "MY PORTFOLIO",
            link: "https://ratnakarsingh.info/",
            tech: "React-native, Redux, JavaScript, React, TypeScript, HTML, CSS",
            description: "Developed a personal portfolio website using React.js, fully designed and deployed independently. The project showcases personal details, skills, and professional work. It demonstrates frontend proficiency, self-learning initiative, and deployment expertise"
        }
    ];

    const content = (
        <div className="tech-container">
            <h2 className="tech-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-tech">
                            <strong>Technologies:</strong> {project.tech}
                        </div>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );

    return isInHome ? content : <Layout>{content}</Layout>;
}

export default Project;

