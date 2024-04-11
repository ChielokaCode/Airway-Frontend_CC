import React from "react";
import "./DepartingFlightInformationPageBody.css";

function DepartingFlightInformationPageBody({ showSelectedDepartingFlights }) {
    return (
        <div className="FlightInfoBodya">
            <div className="bodyheadera">
                {showSelectedDepartingFlights && `${showSelectedDepartingFlights.departurePortCity} (${showSelectedDepartingFlights.departurePortName})`} -
                {showSelectedDepartingFlights && `${showSelectedDepartingFlights.arrivalPortCity} (${showSelectedDepartingFlights.arrivalPortName})`}
            </div>

            {showSelectedDepartingFlights && (
                <div className="formRowa">
                    <label htmlFor="departureDatea">From</label>

                    <span>{showSelectedDepartingFlights.departurePortCity}</span>
                </div>
            )}
            <hr/>

            {showSelectedDepartingFlights && (
                <div className="formRowa">
                    <label htmlFor="departureDatea">Departing Date</label>

                    <span>{showSelectedDepartingFlights.departureDate}</span>
                </div>
            )}
            <hr/>
            {showSelectedDepartingFlights && (
                <div className="formRowa">
                    <label htmlFor="arrivala">To</label>
                    <span>{showSelectedDepartingFlights.arrivalPortCity}</span>
                </div>
            )}
            <hr/>
            {showSelectedDepartingFlights && (
                <div className="formRowa">
                    <label htmlFor="departureDatea">FlightNo</label>

                    <span>{showSelectedDepartingFlights.flightNo}</span>
                </div>
            )}
            <hr/>
            {showSelectedDepartingFlights && (
                <div className="formRowa">
                    <label htmlFor="departureDatea">Duration</label>

                    <span>{showSelectedDepartingFlights.duration}</span>
                </div>
            )}
            <hr/>

            {showSelectedDepartingFlights && (
                <div className="formRowa">
                    <label htmlFor="departureDatea">Departure Time</label>

                    <span>{showSelectedDepartingFlights.departureTime}</span>
                </div>
            )}
            <hr/>









        </div>
    );
}

export default DepartingFlightInformationPageBody;
