import React from "react";
import logo from "../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About Section */}
        <div className="footer-logo">
          <img src='https://i.ibb.co/RHLjm3Y/P-1-removebg-preview-1.png' alt="Logo" className="logo" />
          <p className="footer-text">
            Discover delicious recipes & food ideas. Made with ❤️ for food lovers!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          
          <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@foodwebsite.com</p>
          <p>Phone: +91 123-456-7890</p>
          <p>Address: Kanpur, India</p>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        
      </div>

      {/* Copyright Section */}
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
