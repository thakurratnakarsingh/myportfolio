import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../Styles/Nevbar.css"
const Nevbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className="logo">My Portfolio</div>
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}> ☰</div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li>  <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
        <li>  <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li>  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li>  <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
        <li>  <Link to="/teachnologyStack" onClick={() => setMenuOpen(false)}>TeachnologyStack</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Edit</Link> </li>

      </ul>
    </div>
  )
}

export default Nevbar
