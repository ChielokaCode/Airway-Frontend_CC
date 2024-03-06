import React from 'react';
import './LandingPageCard.css';

const Card = () => (
  <div className="bodyy">
    <div className="card search">
      <div className="icon">
        <i className="fas fa-search">
          <img src=" src/Components/LandingPage/images/Featured icon.png" alt="Search Icon" />
        </i>
      </div>
      <div className="titlle">Search</div>
      <div className="descriptionn">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>

    <div className="card select">
      <div className="icon">
        <i className="fas fa-check">
          <img src="src/Components/LandingPage/images/Featured icon-3.png" alt="Select Icon" />
        </i>
      </div>
      <div className="titlle">Select</div>
      <div className="descriptionn">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
    </div>

    <div className="card book">
      <div className="icon">
        <i className="fas fa-plane">
          <img src="src/Components/LandingPage/images/Featured icon-2.png" alt="Book Icon" />
        </i>
      </div>
      <div className="titlle">Book</div>
      <div className="descriptionn">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</div>
    </div>
  </div>
);

export default Card;

