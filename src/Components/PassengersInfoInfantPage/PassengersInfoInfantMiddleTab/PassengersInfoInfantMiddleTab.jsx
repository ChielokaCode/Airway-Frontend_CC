import React from 'react';
import './PassengersInfoInfantMiddleTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const PassengersInfoInfantMiddleTab = () => {
  return (
    <div>
      <div className="middletab-infant">
        <input type="text" placeholder="Search..." className="search-input"/>
        <button className="search-button" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="flightdetails-infant">
          <h3>Lagos(LOS)-Abuja(ABJ)</h3>
          <h4>Fri, 29 Dec-Sat, 06 Jan | 1 Adult, null child, 1 Infant | Round Trip</h4>
        </div>
        <div className="total-price-container-infant">
          <h1>Total Price</h1>
          <h4>NGN 200,000</h4>
        </div>
      </div>
    </div>
  );
};

export default PassengersInfoInfantMiddleTab; 
