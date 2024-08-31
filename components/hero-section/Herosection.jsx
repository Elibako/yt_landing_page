import React from 'react';
import './herosection.css';
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs';

const Herosection = () => {
  return (
   <div id="hero">
     <div className="container">
      <div className="hero">
        <div className="hero-content">
          <div className="text">
            {/* <img src="Waving Hand Emoji.png" alt="Waving hand emoji" /> */}
            <p>Hola, I'm</p>
            <h4 style={{ color: 'rgba(253, 89, 86, 1)', fontSize:'24px'  }}>Justin Vaccaro</h4>
            <h1 class="creative-designer">
  <span className='creative'>  Creative </span><br/><span class="designer">Designer</span> 
  <img src="src/assets/dot.svg" alt=""  className='period'/>
</h1>

            <p>
              Since creative designers often interact with creative teams, managers, and clients, they need strong communication skills.
            </p>
            <button className='textbtn'>CV here</button>
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
          </div>
          <div className="image">
            <img src="src/assets/hero.svg" alt="Hero illustration" />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Herosection;
