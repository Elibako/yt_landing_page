import React from 'react';
import './Footer.css'; // Ensure you have a corresponding CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <h1>Contact.</h1>
        <p>Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. the feeling of sunday is the same everywhere: heavy, melancholy, standing still.</p>
      </div>
      <div className="footer-image">
        <img src="src/assets/footer.svg" alt="Footer Image" />
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        {/* Add more social links as needed */}
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
