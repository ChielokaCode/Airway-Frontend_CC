import React from "react";
import "./FlightInformationPageHeader.css";
import cancel from "./Vector.png";

function FlightInformationPageHeader() {
  return (
    <div className="FlighInformationPageHeader">
      <div className="flightInformationHeaderText">
        <h2>Flight Information</h2>
      </div>
      <div className="flightInformationHeaderCancel">
        <img src={cancel} alt="cancelIcon" />
      </div>
    </div>
  );
}

export default FlightInformationPageHeader;
