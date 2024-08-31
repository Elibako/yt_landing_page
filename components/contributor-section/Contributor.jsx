import React from 'react';
import './contributor.css';

const Contributor = () => {
  return (
   <div id="contributor">
     <div className="contributor-container">
      <div className="contributor-text">
        <h1>Our Contributors</h1>
        <p>Meet the talented individuals who contribute to our success.</p>
      </div>
      <div className="contributor-images">
        <div className="row">
          <img src="src/assets/behance.svg" alt="Contributor 1" />
          <img src="src/assets/google.svg" alt="Contributor 2" />
          <img src="src/assets/dribbble.svg" alt="Contributor 3" />
        </div>
        <div className="row">
          <img src="src/assets/uplabs.svg" alt="Contributor 4" />
          <img src="src/assets/99designs.svg" alt="Contributor 5" />
        </div>
      </div>
    </div>
   </div>
  );
}

export default Contributor;
