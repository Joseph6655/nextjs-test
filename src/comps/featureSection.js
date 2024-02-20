import React from 'react';
import link from next /link;

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="card">
       <link img src="/fone.jpg"></link>
        <div className="card-overlay">
          <h2>Feature 2</h2>
          <p>This is the second feature</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
