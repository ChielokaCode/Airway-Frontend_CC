import React from 'react';
import './PassengersInfoHeader.css';

const PassengersInfoHeader = () => {
  return (
    <div className="main-airway-body">
      <div className="main-container-header">

              <div className="logo-container-header">
                  <img src="src/assets/airway_logo.svg" alt="Airplane Logo"
                       className="logo-img-infoHeader"/>
              </div>

          <div className="flightInfo">
              <div className="flightSelectionStatus">
                  <input type="radio" id="flightSelection" name="progress"/>
                  <label htmlFor="flightSelection">Flight Selection</label>

  <input type="radio" id="passengerInfo" name="progress" />
  <label htmlFor="passengerInfo">Passenger Info</label>

  <input type="radio" id="payment" name="progress" />
  <label htmlFor="payment">Payment</label>

  <input type="radio" id="confirmation" name="progress" />
  <label htmlFor="confirmation">Confirmation</label>
</div>

        </div>

          <div className="homeAboutSign">
              <div className="homeAbout">
                  <a href="#home" className="homeHeader">Home</a>
                  <div className="aboutAir">
                      <a href="#about" className="aboutUsheader">About us</a>
                  </div>
              </div>
              <button className="button-header">Sign Up</button>
          </div>
      </div>
    </div>
  );
}

export default PassengersInfoHeader;
