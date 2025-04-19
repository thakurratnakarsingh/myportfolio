import React from 'react'
import "../../Styles/Footer.css"
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <h3>All rights reserved © Ratnakar Singh</h3>
                <div className='social-icons'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon"><FaFacebookF /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon"><FaTwitter /></a>
                    <a href="https://github.com/thakurratnakarsingh" target="_blank" rel="noopener noreferrer" className="icon"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ratnakar-singh-b2a434207" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedinIn /></a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
