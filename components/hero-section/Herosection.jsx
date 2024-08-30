import React from 'react';
import './herosection.css';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const Herosection = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <div className="text">
            {/* <img src="Waving Hand Emoji.png" alt="Waving hand emoji" /> */}
            <p>Hola, I'm</p>
            <h4>Justin Vaccaro</h4>
            <img src="src/assets/creative.svg" alt="Creative illustration" />
            <p>
              Since creative designers often interact with creative teams, managers, and clients, they need strong communication skills.
            </p>
            <button className='textbtn'>CV here</button>
            <div className="hero-icons">
              <i className="github">
                <a href="https://github.com/Elibako" target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
              </i>
              <i className="linkedin">
                <a href="https://www.linkedin.com/in/elisha-bako-553832179/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
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
            </div>
          </div>
          <div className="image">
            <img src="src/assets/hero.svg" alt="Hero illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
