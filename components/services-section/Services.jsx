import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-text">
        <h1> Services</h1>
        <p>Our team members are experts in all facets of the design industry including: print design, illustration, branding, identity and more.</p>
      </div>
      <div className="services-cards">
        <div className="card card-first-non">
          <img src="src/assets/ui.svg" alt="UI/UX Design" />
          <h2>UI/UX Design</h2>
          <p>
            Why money's in that office, 
            right If she start giving me 
            some bullshit about it ain't 
            there someplace or anywhere.
          </p>
        </div>
        <div className="card card-middle">
          <img src="src/assets/code.svg" alt="Web Design" />
          <h2>Web Design</h2>
          <p>
            Why money's in that office, 
            right If she start giving me 
            some bullshit about it ain't 
            there someplace or anywhere.
          </p>
        </div>
        <div className="card card-third-non">
          <img src="src/assets/wp.svg" alt="WP Developing" />
          <h2>WP Developing</h2>
          <p>
            Why money's in that office, 
            right If she start giving me 
            some bullshit about it ain't 
            there someplace or anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
