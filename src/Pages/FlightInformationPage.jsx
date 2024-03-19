import React from "react";
import FlightInformationPageHeader from "../Components/FlightInformationPage/FlightInformationPageHeader/FlightInformationPageHeader.jsx";
import FlightInformationPageBody from "../Components/FlightInformationPage/FlightInformationPageBody/FlightInformationPageBody.jsx";
import "./FlightPageInfo.css";
function FlightInformationPage() {
  return (
    <div className="FlightInfoPage">
      <FlightInformationPageHeader />
      <FlightInformationPageBody />
    </div>
  );
}

export default FlightInformationPage;
