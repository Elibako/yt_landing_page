import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-text">
        <h1>Our Portfolio</h1>
        <p>Explore our recent works and projects.</p>
      </div>
      <div className="portfolio-content">
        <div className="large-image">
          <img src="src/assets/cup.svg" alt="Large" />
        </div>
        <div className="small-images">
          <div className="small-image">
            <img src="src/assets/wheat.svg" alt="Small 1" />
          </div>
          <div className="small-image">
            <img src="src/assets/wall.svg" alt="Small 2" />
          </div>
          <div className="small-image">
            <img src="src/assets/sky.svg" alt="Small 3" />
          </div>
          <div className="small-image">
            <img src="src/assets/paint.svg" alt="Small 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
