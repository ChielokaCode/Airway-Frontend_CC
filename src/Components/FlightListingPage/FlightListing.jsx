import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FlightListing.css';
import addImg from "/src/assets/addImg.svg";
import arrowDownWhite from "/src/assets/arrowDownImg.svg";
import eclipseImg from "/src/assets/EclipseImg.svg";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FlightListing = () => {
    const [flights, setFlights] = useState(Array(20).fill({collapsed: true})); // Assuming 5 flights initially
    const[selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState(1);
    const[isClicked, setIsClicked] = useState(1);
    const toggleCollapse = (index) => {
        if(selected === index){
            return setSelected(null);
        }
        setSelected(index);
    };

    function updateToggle(id) {
        setToggle(id);
        setIsClicked(id)
    }



    return (
        <>
            <div className='admin-dashboard-hero-button'>
                <div className='admin-dashboard-hero-text'>Flights</div>
                <button className='admin-dashboard-button'><img src={addImg} alt="addImg" />Add New Flight</button>
            </div>
            <div className='accordion'>
                {flights.map((flight, index) => (
                    <div key={index} className="item">
                        <div className='title'>
                            <button className="dropdown-button" onClick={() => toggleCollapse(index)}>
                                {selected === index ? <img
                                    className='listing-header-icon-arrow'
                                    src={addImg}
                                    alt="Dropdown Arrow"
                                /> : <img
                                    className='listing-header-icon-arrow'
                                    src={arrowDownWhite}
                                    alt="Dropdown Arrow"
                                />}
                            </button>
                            <div className='header-titles'>
                                <div className='header-title-1'>
                                    <div className='header-title-up'>Flights No</div>
                                    <div className='header-title-down'>PYVE423</div>
                                </div>
                                <div className='header-title-2'>
                                    <div className='header-title-up'>Arrival Port</div>
                                    <div className='header-title-down'>Lagos(LOS)</div>
                                </div>
                                <div className='header-title-3'>
                                    <div className='header-title-up'>Departure Port</div>
                                    <div className='header-title-down'>Abuja( ABV)</div>
                                </div>
                                <div className='header-title-4'>
                                    <div className='header-title-up'>Departure Date</div>
                                    <div className='header-title-down-4'>30th February, 2024 09:30am</div>
                                </div>
                                <div className='header-title-5'>
                                    <div className='header-title-up'>Arrival Date</div>
                                    <div className='header-title-down-5'>02 January, 2024 3:40pm</div>
                                </div>
                            </div>

                            <button className="elipse-button" onClick="myElipseFunction()"><img
                                src={eclipseImg}/></button>

                        </div>

                        <div className={selected === index ? 'content-flight show' : 'content-flight'}>
                            <div className="container-tabs">
                                <ul className='d-flex tabs-classes'>
                                    <li className={isClicked === 1 ? 'flex-fill current-tab' : 'flex-fill'} onClick={() => updateToggle(1)}>Economy</li>
                                    <li className={isClicked === 2 ? 'flex-fill current-tab' : 'flex-fill'} onClick={() => updateToggle(2)}>Premium</li>
                                    <li className={isClicked === 3 ? 'flex-fill current-tab' : 'flex-fill'} onClick={() => updateToggle(3)}>Business</li>
                                </ul>
                                <div className={toggle === 1 ? 'show-content-classes' : 'content-classes'}>
                                    <div className='content-details'>
                                        <div className='left-side'>
                                            <h6>Number of Seats: 30</h6>
                                            <h6>Seat Code: E</h6>
                                            <h6>Occupied Seats: 200</h6>
                                            <h6>Un-Occupied Seats: 100</h6>
                                        </div>
                                        <div className='right-side'>
                                            <h6>Surcharge: 1000</h6>
                                            <h6>Base Fare: 500</h6>
                                            <h6>Service Charge: 200</h6>
                                            <h6>Tax: 100</h6>
                                        </div>
                                        <h6>Baggage Allowance: 100Kg</h6>
                                    </div>
                                    <div className='content-passengers-booked'>
                                        <h2 className='passengers-classess'>Passengers</h2>
                                        <table className="my-table">
                                            <thead>
                                            <tr>
                                                <th>PSN</th>
                                                <th>Booking Reference</th>
                                                <th>PNR</th>
                                                <th>Passenger Type</th>
                                                <th>Title</th>
                                                <th>Name</th>
                                                <th>Surname</th>
                                                <th>Seat No</th>
                                                <th>Baggage No</th>
                                                <th>Ticket No</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Peter</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                            </tr>
                                            <tr>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                <div className={toggle === 2 ? 'show-content-classes' : 'content-classes'}>
                                    <div className='content-details'>
                                        <div className='left-side'>
                                            <h6>Number of Seats: 20</h6>
                                            <h6>Seat Code: P</h6>
                                            <h6>Occupied Seats: 200</h6>
                                            <h6>Un-Occupied Seats: 50</h6>
                                        </div>
                                        <div className='right-side'>
                                            <h6>Surcharge: 1200</h6>
                                            <h6>Base Fare: 200</h6>
                                            <h6>Service Charge: 150</h6>
                                            <h6>Tax: 100</h6>
                                        </div>
                                        <h6>Baggage Allowance: 20Kg</h6>
                                    </div>
                                    <div className='content-passengers-booked'>
                                        <h2 className='passengers-classess'>Passengers</h2>
                                        <table className="my-table">
                                            <thead>
                                            <tr>
                                                <th>PSN</th>
                                                <th>Booking Reference</th>
                                                <th>PNR</th>
                                                <th>Passenger Type</th>
                                                <th>Title</th>
                                                <th>Name</th>
                                                <th>Surname</th>
                                                <th>Seat No</th>
                                                <th>Baggage No</th>
                                                <th>Ticket No</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Peter</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                            </tr>
                                            <tr>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                <div className={toggle === 3 ? 'show-content-classes' : 'content-classes'}>
                                    <div className='content-details'>
                                        <div className='left-side'>
                                            <h6>Number of Seats: 50</h6>
                                            <h6>Seat Code: B</h6>
                                            <h6>Occupied Seats: 100</h6>
                                            <h6>Un-Occupied Seats: 20</h6>
                                        </div>
                                        <div className='right-side'>
                                            <h6>Surcharge: 1100</h6>
                                            <h6>Base Fare: 300</h6>
                                            <h6>Service Charge: 200</h6>
                                            <h6>Tax: 400</h6>
                                        </div>
                                        <h6>Baggage Allowance: 50Kg</h6>
                                    </div>
                                    <div className='content-passengers-booked'>
                                        <h2 className='passengers-classess'>Passengers</h2>
                                        <table className="my-table">
                                            <thead>
                                            <tr>
                                                <th>PSN</th>
                                                <th>Booking Reference</th>
                                                <th>PNR</th>
                                                <th>Passenger Type</th>
                                                <th>Title</th>
                                                <th>Name</th>
                                                <th>Surname</th>
                                                <th>Seat No</th>
                                                <th>Baggage No</th>
                                                <th>Ticket No</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Peter</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                            </tr>
                                            <tr>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                                <td>Lois</td>
                                                <td>Griffin</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>

                            {/* Dropdown content goes here */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FlightListing;
