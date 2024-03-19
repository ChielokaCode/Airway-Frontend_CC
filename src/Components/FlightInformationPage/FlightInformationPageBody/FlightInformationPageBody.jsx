import React from "react";
import "./FlightInformationPageBody.css";
const departure = "Lagos, MURTALA M (LOS)";
const departureDate = "02 January, 2024 /3:40pm";
const arrival = "Abuja (ABJ)";
const arrivalDate = "30 February, 2024 /9:30pm";
const duration = "1 hour";
const flightNumber = "PA- 7002";

function FlightInformationPageBody() {
  return (
    <div className="FlightInformationPageBodyAll">
      <div className="FlightInformationPageBodyHeader">
        <h3>Lagos (LOS) - Abuja (ABV)</h3>
      </div>
      <div className="FlightInformationPageBodyForm">
        <div className="formRow">
          <label htmlFor="departure">From</label>
          <input
            type="text"
            name="departure"
            id="departure"
            value={departure}
          />
        </div>
        <div className="formRow">
          <label htmlFor="departureDate">Departing Date</label>
          <input
            type="text"
            name="departureDate"
            id="departureDate"
            value={departureDate}
          />
        </div>
        <div className="formRow">
          <label htmlFor="arrival">To</label>
          <input type="text" name="arrival" id="arrival" value={arrival} />
        </div>
        <div className="formRow">
          <label htmlFor="arrivalDate">Arrival Date</label>
          <input
            type="text"
            name="arrivalDate"
            id="arrivalDate"
            value={arrivalDate}
          />
        </div>
        <div className="formRow">
          <label htmlFor="duration">Flight Duration</label>

          <input type="text" name="duration" id="duration" value={duration} />
        </div>
        <div className="formRow">
          <label htmlFor="flightNumber">Flight Number</label>
          <input
            type="text"
            name="flightNumber"
            id="flightNumber"
            value={flightNumber}
          />
        </div>
      </div>
    </div>
  );
}

export default FlightInformationPageBody;
