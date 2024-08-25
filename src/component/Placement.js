import React from 'react';
import './Placement.css';

const Placement = () => {
  const companyImages = [
    'https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png',
    'https://1000logos.net/wp-content/uploads/2022/01/Zoho-Mail-Logo.jpg',
    'https://1000logos.net/wp-content/uploads/2021/05/Deloitte-logo.png',
    'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png',
    'https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2019.png',
    'https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_Sirius.png',
    'https://newscenter.softwareag.com/content/dam/softwareag/global/image/logos/sag/sag-logo-dark.png',

  ];

  return (
    
    <div className="main-section">
      <br/>
      <h2 className="heading"> <span role="img" aria-label="placements">
      🎓
    </span>Placements</h2>
    <br />
      <div className="placement-container">
        <div className="image-scroll">
          {companyImages.map((image, index) => (
            <img key={index} src={image} alt={`Company ${index + 1}`} className="company-logo" />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placement;

