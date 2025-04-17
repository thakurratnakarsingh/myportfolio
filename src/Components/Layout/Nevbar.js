import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cv from "../../Assets/Ratnakar_Singh.pdf"
import "../../Styles/Nevbar.css"

const Nevbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Ratnakar_Singh_CV.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="logo">My Portfolio</div>
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}> ☰</div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>  <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li>  <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
        <li>  <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li>  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li>  <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
        <li>  <a href="#" onClick={handleDownloadCV}>Download CV</a></li>
        {/* <li><Link to="/login" onClick={() => setMenuOpen(false)}>Edit</Link> </li> */}

      </ul>
    </div>
  )
}

export default Nevbar
