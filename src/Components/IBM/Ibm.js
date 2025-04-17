import React from 'react';
import { motion } from 'framer-motion';
import '../IBM/Ibm.css';
import ibmLogo from '../../Assets/ibmpic.png'; // Replace with correct path to IBM logo
import quesslogo from "../../Assets/quessoffice.png"
import bluemoonoffice from "../../Assets/bloemoonoffice.png"
import vioma from "../../Assets/vioma.jpeg";
import geometbox from "../../Assets/geomett.png";
import hdfc from "../../Assets/HDFC-Ergo.png";
import npoffice from "../../Assets/NPA.png";
import bussinessessay from "../../Assets/np2.png";
import asp from "../../Assets/asp.png";
import ench from "../../Assets/inchdown.png"
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
        },
    }),
};

const Ibm = () => {
    return (
        <>
            <div className="ibm-container">
                <motion.img
                    src={ibmLogo}
                    alt="IBM Logo"
                    className="ibm-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1
                    className="ibm-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    My Journey at IBM
                </motion.h1>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={1}
                >
                    <h2>Role & Duration</h2>
                    <p><strong>React Developer</strong> | April 2024 – Present</p>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={2}
                >
                    <h2>Skills & Technologies</h2>
                    <ul>
                        <li>React.js, Redux Toolkit, JavaScript, TypeScript</li>
                        <li>REST APIs, GraphQL, Axios</li>
                        <li>Material UI, Bootstrap, SCSS</li>
                        <li>Jest, Cypress, Unit & E2E Testing</li>
                        <li>CI/CD, Git, Agile, JIRA</li>
                        <li>Cloud: AWS (S3, CloudFront, Lambda)</li>
                    </ul>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={3}
                >
                    <h2>Projects</h2>

                    <div className="ibm-project">
                        <img src={hdfc} alt="Finance App" className="ibm-image" />
                        <div>
                            <h3>HDFC ERGO</h3>
                            <p>
                                Built a responsive dashboard for managing and tracking mutual fund investments. Integrated secure payment gateway using SSL and enabled advanced filtering using Redux.
                            </p>
                        </div>
                        
                    </div>
                    <div className="ibm-project">
                        <img src={npoffice} alt="Finance App" className="ibm-image" />
                        <div>
                            <h3>Simply Save App</h3>
                            <p>
                                Built a responsive dashboard for managing and tracking mutual fund investments. Integrated secure payment gateway using SSL and enabled advanced filtering using Redux.
                            </p>
                        </div>
                        
                    </div>

                    <div className="ibm-project">
                        <img src={bussinessessay} alt="Performance Optimization" className="ibm-image" />
                        <div>
                            <h3>Business Eassy</h3>
                            <p>
                                Improved frontend performance by 40% using React.memo, lazy loading, and code splitting. Reduced initial load time and optimized Lighthouse scores.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={4}
                >
                    <h2>Reflection</h2>
                    <p>
                        Working at IBM has been a transformative experience. I’ve grown as a developer, embraced team collaboration, and delivered scalable applications that solve real-world problems.
                    </p>
                </motion.section>
            </div>
            <div className="ibm-container">
                <motion.img
                    src={quesslogo}
                    alt="IBM Logo"
                    className="ibm-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1
                    className="ibm-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    My Journey at QUESS CORP LTD
                </motion.h1>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={1}
                >
                    <h2>Role & Duration</h2>
                    <p><strong>React Developer</strong> | JUNE 2023 – Present</p>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={2}
                >
                    <h2>Skills & Technologies</h2>
                    <ul>
                        <li>React.js, Redux Toolkit, JavaScript, TypeScript</li>
                        <li>REST APIs, GraphQL, Axios</li>
                        <li>Material UI, Bootstrap, SCSS</li>
                        <li>Jest, Cypress, Unit & E2E Testing</li>
                        <li>CI/CD, Git, Agile, JIRA</li>
                        <li>Cloud: AWS (S3, CloudFront, Lambda)</li>
                    </ul>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={3}
                >
                    <h2>Projects</h2>

                    <div className="ibm-project">
                        <img src={vioma} alt="Finance App" className="ibm-image" />
                        <div>
                            <h3>Vioma Life Science :- HeathTech and heathcare company </h3>
                            <p>
                            Vioma Lifesciences, formerly HealWell24™, is India’s first digital healthcare, life sciences, and MedTech company. It offers a web and mobile platform connecting users with top doctors via video consultations, 365 days a year. The company also provides remote screening and diagnostics services across India. Vioma includes subsidiaries Vioma Biologics and ViomaTech. Headquartered in Mumbai, its R&D center is located in Thane.           </p>
                        </div>
                    </div>

                    <div className="ibm-project">
                        <img src={geometbox} alt="Performance Optimization" className="ibm-image" />
                        <div>
                            <h3>giomatbox</h3>
                            <p>
                            Geomett Box Pvt Ltd is a leading provider of warehousing, logistics, and freight forwarding services with a strong focus on Environmental, Health, and Safety (EHS) standards. We deliver efficient, sustainable supply chain solutions through advanced practices and state-of-the-art infrastructure. As a trusted partner, we help businesses grow while ensuring safety and compliance.                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={4}
                >
                    <h2>Reflection</h2>
                    <p>
                        Working at Quess has been a transformative experience. I’ve grown as a developer, embraced team collaboration, and delivered scalable applications that solve real-world problems.
                    </p>
                </motion.section>
            </div>
            <div className="ibm-container">
                <motion.img
                    src={bluemoonoffice}
                    alt="IBM Logo"
                    className="ibm-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1
                    className="ibm-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    My Journey at BlueMoon
                </motion.h1>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={1}
                >
                    <h2>Role & Duration</h2>
                    <p><strong>React Developer</strong> | April 2024 – Present</p>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={2}
                >
                    <h2>Skills & Technologies</h2>
                    <ul>
                        <li>React.js, Redux Toolkit, JavaScript, TypeScript</li>
                        <li>REST APIs, GraphQL, Axios</li>
                        <li>Material UI, Bootstrap, SCSS</li>
                        <li>Jest, Cypress, Unit & E2E Testing</li>
                        <li>CI/CD, Git, Agile, JIRA</li>
                        <li>Cloud: AWS (S3, CloudFront, Lambda)</li>
                    </ul>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={3}
                >
                    <h2>Projects</h2>

                    <div className="ibm-project">
                        <img src={ench} alt="Finance App" className="ibm-image" />
                        <div>
                            <h3>EnchDown Fitness </h3>
                            <p>
                                Built a responsive dashboard for managing and tracking mutual fund investments. Integrated secure payment gateway using SSL and enabled advanced filtering using Redux.
                            </p>
                        </div>
                    </div>

                    <div className="ibm-project">
                        <img src={asp} alt="Performance Optimization" className="ibm-image" />
                        <div>
                            <h3>ASP Trandelinks</h3>
                            <p>
                                Improved frontend performance by 40% using React.memo, lazy loading, and code splitting. Reduced initial load time and optimized Lighthouse scores.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className="ibm-section"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={4}
                >
                    <h2>Reflection</h2>
                    <p>
                        Working at IBM has been a transformative experience. I’ve grown as a developer, embraced team collaboration, and delivered scalable applications that solve real-world problems.
                    </p>
                </motion.section>
            </div>
        </>
    );
};

export default Ibm;
