import React from 'react';
import './PassengerInformationAdultHeader.css';
import AirwayLogo from './airwayLogo2.svg';
import ProgressBarAdult from './progressBarPassenger2.svg';
import {Link, useNavigate} from "react-router-dom";

const PassengersInformationAdultHeader = () => {
    const navigate = useNavigate();
    const firstName = JSON.parse(localStorage.getItem('userFirstName'));
    return (
        <div className="main-airway-body-adb">
            <div className="main-container-header-adb">
                <div className="flightImgAndAirway-adb">
                    <img src= {AirwayLogo} alt="Header Plane" />
                    <span className="airwayText-adb">Airway</span>
                </div>

                <div className="flightInfo-adb">
                    <img src= {ProgressBarAdult} alt="progress-bar-adult" />
                </div>
                <div className="homeAboutSign-adb">
                    <div className="homeAbout-adb">
                        <a href="#home" className="homeHeader-adb" onClick={() => navigate("/")}>Home</a>
                        <div className="aboutAir-adb"  onClick={() => navigate("/")}>
                            <a href="#about" className="aboutUsheader-adb">About us</a>
                        </div>
                    </div>
                    <div>
                        {firstName ? (
                            <div className="PasFirstNames">
                                Welcome{" "} {firstName}
                            </div>
                        ) : (
                            <Link to={"/signup"}><button className="buttonn">Sign Up</button></Link>
                        )}
                    </div>
                </div>

            </div>
            <div className="flightSelectionStatus-adb">
                <h6>Flight Selection</h6>
                <h6>Passenger Info</h6>
                <h6>Payment</h6>
                <h6>Confirmation</h6>
            </div>
        </div>
    );
}

export default PassengersInformationAdultHeader;