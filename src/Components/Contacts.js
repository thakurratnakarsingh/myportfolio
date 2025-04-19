import React, { useState } from 'react';
import "../Styles/Contacts.css";
import Layout from './Layout/Layout';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contacts = ({ isInHome = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Netlify Forms - the form will be automatically handled by Netlify
      // No need for additional fetch calls
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      
      <div className="contact-content">
        <div className="contact-form-container">
          <form 
            className="contact-form" 
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus.message && (
              <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
        
        <div className="contact-info">
          <h2>Or connect with me:</h2>
          <div className="social-links">
            <a href="mailto:singh294r@gmail.com" className="social-link">
              <FaEnvelope className="social-icon" />
              <span>Email</span>
            </a>
            <a href="https://github.com/thakurratnakarsingh" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ratnakar-singh-b2a434207" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return isInHome ? content : <Layout>{content}</Layout>;
};

export default Contacts;
