
import React from "react";
import "./ReturningFlightInformationPageBody.css";

function ReturningFlightInformationPageBody({ showSelectedReturningFlights }) {
    return (
        <div className="FlightInfoBodya">
            <div className="bodyheadera">

                 {showSelectedReturningFlights && `${showSelectedReturningFlights.departurePortCity} (${showSelectedReturningFlights.departurePortName})`} - {showSelectedReturningFlights && `${showSelectedReturningFlights.arrivalPortCity  } (${showSelectedReturningFlights.arrivalPortName })`}
            </div>

            {showSelectedReturningFlights && (
                <div className="formRow">
                    <label htmlFor="arrival">To</label>
                    <span>{showSelectedReturningFlights.departurePortCity}</span>
                </div>
            )}
            <hr/>

            {showSelectedReturningFlights && (
                <div className="formRowa">
                    <label htmlFor="departureDate">Departing Date</label>

                    <span>{showSelectedReturningFlights.arrivalDate}</span>
                </div>
            )}
            <hr/>
            {showSelectedReturningFlights && (
                <div className="formRowa">
                    <label htmlFor="departureDate">From</label>
                    <span>{showSelectedReturningFlights.arrivalPortCity}</span>
                </div>
            )}
            <hr/>

            {showSelectedReturningFlights && (
                <div className="formRow">
                    <label htmlFor="departureDate">FlightNo</label>

                    <span>{showSelectedReturningFlights.flightNo}</span>
                </div>
            )}
            <hr/>
            {showSelectedReturningFlights && (
                <div className="formRow">
                    <label htmlFor="departureDate">Duration</label>

                    <span>{showSelectedReturningFlights.duration}</span>
                </div>
            )}
            <hr/>

            {showSelectedReturningFlights && (
                <div className="formRow">
                    <label htmlFor="departureDate">Departure Time</label>

                    <span>{showSelectedReturningFlights.departureTime}</span>
                </div>
            )}
            <hr/>
        </div>
    );
}

export default ReturningFlightInformationPageBody;
