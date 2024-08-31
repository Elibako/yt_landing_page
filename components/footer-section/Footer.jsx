import React from 'react';
import './Footer.css'; 
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
   <div id="footer">
     <footer className="footer">
      <div className="footer-text">
        <h1>Contact.</h1>
        <p>Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. the feeling of sunday is the same everywhere: heavy, melancholy, standing still.</p>
      </div>
      <div className="footer-image">
        <img src="src/assets/footer.svg" alt="Footer Image" />
      </div>
      <div className="hero-icons">
              <i className="github">
                <a href="https://github.com/Elibako" target="_blank" rel="noopener noreferrer">
                  <BsFacebook />
                </a>
                
              </i>
              <i className="instagram">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <BsInstagram />
                </a>
              </i>
              <i className="twitter">
                <a href="https://twitter.com/Sirius6laq" target="_blank" rel="noopener noreferrer">
                  <BsTwitter />
                </a>
              </i>
              <i className="linkedin">
                <a href="https://www.linkedin.com/in/elisha-bako-553832179/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
                </a>
              </i>
             
            
            </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
   </div>
  );
}

export default Footer;
