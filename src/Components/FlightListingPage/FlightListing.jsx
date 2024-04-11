import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FlightListing.css';
import addImg from "/src/assets/addImg.svg";
import arrowDownWhite from "/src/assets/arrowDownImg.svg";
import eclipseImg from "/src/assets/EclipseImg.svg";
import loadingAirwayGif from "/src/assets/airwayAnimationGif.gif";
import {api} from "../../../util/apiFunctions.js";
import FlightListingModal from "/src/Components/FlightMgmtModal/FlightListingModal.jsx";
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import filterImg from "../../assets/filterImg.svg";
import bellNotificationImg from "../../assets/bellNotifImg.svg";
import BookingModalFilter from "../BookingModalFilter/BookingModalFilter.jsx";
import FlightModalFilter from "./FlightModalFilter.jsx";
import axios from "axios";

const FlightListing = () => {
    const [searchText, setSearchText] = useState('');
    const [flightList, setFlightList] = useState([]);
    const [selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState(1);
    const [isClicked, setIsClicked] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const flightsPerPage = 10;
    const [showModal, setShowModal] = useState(false);
    const [selectedFlightIndex, setSelectedFlightIndex] = useState(0);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();
    const [searchQuerys, setSearchQuerys] = useState(''); // Define searchQuery state variable
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [totalPages, setTotalPages] = useState(0);



    const toggleCollapse = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    };

    const updateToggle = (id) => {
        setToggle(id);
        setIsClicked(id);
    };

    const toggleModal = (flightIndex) => {
        setShowModal(!showModal);
        setSelectedFlightIndex(flightIndex); // Set the selected flight index
    };





    useEffect(() => {
        const delayedFetchFlights = () => {
            setTimeout(fetchFlights, 2000); // Delay for 2000 milliseconds (2 seconds)
        };
        const fetchFlights = async () => {
            try {
                const response = await api.get(
                    `/api/v1/flights/fetch-all-flights?pageNo=${currentPage - 1}&pageSize=${flightsPerPage}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );

                setLoading(false);
                setFlightList(response.data.content);
                console.log(response.data.content);
            } catch (error) {
                console.error('Error fetching flights:', error);
            }
        };

        delayedFetchFlights();
    },  [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };



    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };

        const dayWithSuffix = (day) => {
            if (day > 3 && day < 21) return `${day}th`;
            switch (day % 10) {
                case 1: return `${day}st`;
                case 2: return `${day}nd`;
                case 3: return `${day}rd`;
                default: return `${day}th`;
            }
        };

        const formattedDate = date.toLocaleDateString('en-US', options);
        const [month, day, year] = formattedDate.split(' ');
        return `${dayWithSuffix(parseInt(day))} ${month}, ${year}`;
    };

    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(':').map(Number);
        const ampm = hours >= 12 ? 'pm' : 'am';
        const hour = hours % 12 || 12;
        const minute = minutes.toString().padStart(2, '0');
        return `${hour}:${minute}${ampm}`;
    };

    const delayAlert = () => {
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }


    const handleConfirm = async (selectedFlightIndex) => {

        try {
            const response = await api.post(
                `/api/v1/flights/confirm/${selectedFlightIndex}`,
                null,
                {
                    withCredentials: true,
                }
            );
            setIsConfirmed(true);
            setShowModal(false);
            delayAlert();
            toast(`Flight id ${selectedFlightIndex} confirmed Successfully`);
        } catch (error) {
            console.error(`Error confirming flight with id ${selectedFlightIndex}:`, error);
            const errorMessage =
                error.response?.data?.message ||
                "An error occurred in the process. Please try again.";
            toast.error(errorMessage);


        }
    };



    const handleEdit = async (selectedFlightIndex) => {
        navigate(`/edit-flight/${selectedFlightIndex}`);
    }
    const handleCancel = async (selectedFlightIndex) => {
        toast(`Flight id ${selectedFlightIndex} cancelled Successfully`);
    }

    const handleDelete = async (selectedFlightIndex, ) => {
        console.log(selectedFlightIndex);
        try {
            const response = await api.delete(
                `/api/v1/flights/delete-flight/${selectedFlightIndex}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            delayAlert();
            toast(`Flight id ${selectedFlightIndex} deleted Successfully`);

        } catch (error) {
            console.error(`Error deleting flight with id ${selectedFlightIndex}:`, error);
            const errorMessage =
                error.response?.data?.message ||
                "An error occurred in the process. Please try again.";
            toast(errorMessage);

        }
        setShowModal(false); // Close the modal after confirmation
    }

    const logout = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/logout');
            toast(`Logout successful`)
            localStorage.removeItem("user");
            localStorage.removeItem("userFirstName");
            localStorage.removeItem("userRole");
            localStorage.clear();
            navigate('/');
        } catch (error) {
            console.error('Error during logout:', error.message);
            const errorMessage =
                error.response?.data?.message ||
                "An error occurred during Login out. Please try again.";

            toast.error(errorMessage);
        }
    };


    const toggleFilterModal = () => {
        setFilterOpen(!isFilterOpen);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchText(query);
    };

    const handleChange = (event) => {
        setSearchQuerys(event.target.value);
    };

    const closeFilterModal = () => {
        setFilterOpen(false);
    };

    useEffect(() => {
        performSearchs(searchQuerys);
    }, [searchQuerys]);

    useEffect(() => {
        setFilteredFlights(flightList);
    }, [flightList]);

    const performSearchs = (query) => {
        setSearchQuerys(query);

        let filteredData = flightList;
        if (query && query.trim() !== '') {
            filteredData = filteredData.filter(item => {
                const formattedDepartureDate = new Date(item.departureDate).toLocaleDateString('en-GB');
                const formattedArrivalDate = new Date(item.arrivalDate).toLocaleDateString('en-GB');

                return (
                    item && item.flightNo.toLowerCase().includes(query.trim().toLowerCase()) ||
                        item.flightStatus.toLowerCase().includes(query.trim().toLowerCase()) ||
                        item.arrivalPort.city.toLowerCase().includes(query.trim().toLowerCase()) ||
                        item.arrivalPort.iataCode.toLowerCase().includes(query.trim().toLowerCase()) ||
                        item.arrivalPort.icaoCode.toLowerCase().includes(query.trim().toLowerCase()) ||
                        item.arrivalPort.name.toLowerCase().includes(query.trim().toLowerCase()) ||
                        item.arrivalPort.state.toLowerCase().includes(query.trim().toLowerCase()) ||
                    item.departurePort.city.toLowerCase().includes(query.trim().toLowerCase()) ||
                    item.departurePort.iataCode.toLowerCase().includes(query.trim().toLowerCase()) ||
                    item.departurePort.icaoCode.toLowerCase().includes(query.trim().toLowerCase()) ||
                    item.departurePort.name.toLowerCase().includes(query.trim().toLowerCase()) ||
                    item.departurePort.state.toLowerCase().includes(query.trim().toLowerCase()) ||
                    (item.classes && item.classes.some(classItem => {
                        return (
                            classItem.pnrList && classItem.pnrList.some(pnrItem => {
                                return (
                                    pnrItem.pnrcode && pnrItem.pnrcode.includes(query.trim())
                                );
                            })
                        );
                    }))


                );
            });
        }

        setFilteredFlights(filteredData);
        setLoading(true);
        setTimeout(async () => {
            setLoading(false);
            setTotalPages(Math.ceil(filteredData.length / flightsPerPage));
        }, 1500);
    };


    return (
        <div>

            <div className='Booking-admin-navbar-container'>
                <div className='Booking-admin-navbar-search'>
                    <form>
                        <input
                            className='Booking-admin-navbar-search-text'
                            type="search"
                            name="text"
                            value={searchQuerys}
                            onChange={handleChange}
                            placeholder="Search for Flights....."
                            required
                        />

                    </form>
                </div>

                <div className='Booking-admin-navbar-filter' onClick={toggleFilterModal}>
                    <img className='Booking-navbar-filter-icon' src={filterImg} alt="filter" />
                </div>
                <div onClick={logout} className='Booking-admin-navbar-logout'>
                    <img className='Booking-navbar-logout-icon' src={bellNotificationImg} alt="logout" />
                    <div className='Booking-navbar-logout-text'>Log Out</div>
                </div>
                <div>
                    <FlightModalFilter
                        isOpen={isFilterOpen}
                        closeFilterModal={closeFilterModal}
                        handleCheckboxChange={handleChange}
                    />
                </div>
            </div>



            {loading && (
                <img className="loading-texts" src={loadingAirwayGif} alt="Loading animation"/>
            )}
            {loading || (
                <>
                    <div className='admin-dashboard-hero-buttons'>
                        <div className='admin-dashboard-hero-texts'>Flights</div>
                        <Link to="/addflight">
                            <button className='admin-dashboard-buttons'><img src={addImg} alt="addImg"/>Add New Flight
                            </button>
                        </Link>
                    </div>
                    <div className='accordions'>

                        {/*there are two tables: one for filtered data from search input and other from the FlightList array*/}
                        {/*for filtered or searched data table*/}
                        {searchQuerys ? filteredFlights.map((flight, index) => (

                            <div key={index} className="items">
                                <div className='titles'>
                                    <button className="dropdown-buttons" onClick={() => toggleCollapse(index)}>
                                        {selected === index ?
                                            <img className='listing-header-icon-arrows' src={addImg}
                                                 alt="Dropdown Arrow"/> :
                                            <img className='listing-header-icon-arrows' src={arrowDownWhite}
                                                 alt="Dropdown Arrow"/>}
                                    </button>
                                    <div className='header-titless'>
                                        <div className='header-title-1s'>
                                            <div className='header-title-ups'>Flights No</div>
                                            <div className='header-title-down1s'>{flight.flightNo}</div>
                                            <div className='header-title-down1s'>{flight.flightDirection}</div>
                                            <div className='header-title-down1s'>{flight.flightStatus}</div>


                                        </div>
                                        <div className='header-title-2s'>
                                            <div className='header-title-ups'>Arrival Port</div>
                                            <div
                                                className='header-title-downs'>{flight.arrivalPort.state} ({flight.arrivalPort.iataCode})
                                            </div>
                                        </div>
                                        <div className='header-title-3s'>
                                            <div className='header-title-ups'>Departure Port</div>
                                            <div
                                                className='header-title-downs'>{flight.departurePort.state} ({flight.departurePort.iataCode})
                                            </div>
                                        </div>
                                        <div className='header-title-4s'>
                                            <div className='header-title-ups'>Departure Date</div>
                                            <div
                                                className='header-title-down-4s'>{formatDate(flight.departureDate)}</div>
                                            <br/>
                                            <div
                                                className='header-title-down-4-as'>{formatTime(flight.departureTime)}</div>
                                        </div>
                                        <div className='header-title-5s'>
                                            <div className='header-title-ups'>Arrival Date</div>
                                            <div className='header-title-down-4s'>{formatDate(flight.arrivalDate)}</div>
                                            <br/>
                                            <div
                                                className='header-title-down-4-as'>{formatTime(flight.arrivalTime)}</div>

                                        </div>
                                    </div>
                                    <button className="elipse-buttons" onClick={() => toggleModal(flight.id)}>
                                        <img src={eclipseImg} alt="Ellipse Icon"/>
                                    </button>

                                    {showModal && <FlightListingModal onClose={toggleModal} onEdit={handleEdit}
                                                                      onCancel={handleCancel} onDelete={handleDelete}
                                                                      onConfirm={handleConfirm}
                                                                      flightIndex={selectedFlightIndex}/>}
                                    <ToastContainer/>

                                </div>

                                <div className={selected === index ? 'content-flights shows' : 'content-flights'}>
                                    <div className="container-tabss">
                                        <ul className='d-flex tabs-classess'>
                                            <li className={isClicked === 1 ? 'flex-fill current-tabs' : 'flex-fill'}
                                                onClick={() => updateToggle(1)}>Economy
                                            </li>
                                            <li className={isClicked === 2 ? 'flex-fill current-tabs' : 'flex-fill'}
                                                onClick={() => updateToggle(2)}>Premium
                                            </li>
                                            <li className={isClicked === 3 ? 'flex-fill current-tabs' : 'flex-fill'}
                                                onClick={() => updateToggle(3)}>Business
                                            </li>
                                        </ul>
                                        {flight.classes.map((classItem, classIndex) => (
                                            classItem.className === "Economy" && (
                                                <div key={classIndex}
                                                     className={toggle === 1 ? 'show-content-classess' : 'content-classess'}>
                                                    <div className='content-detailss'>
                                                        <div className='left-sides'>
                                                            <h6>Number of Seats: {classItem.seat.totalNumberOfSeat}</h6>
                                                            <h6>Seat Code: {classItem.seat.seatAlphabet}</h6>
                                                            <h6>Occupied Seats: {classItem.seat.noOfOccupiedSeats}</h6>
                                                            <h6>Un-Occupied Seats: {classItem.seat.availableSeat}</h6>
                                                        </div>
                                                        <div className='right-sides'>
                                                            <h6>Surcharge: {classItem.surchargeFee}</h6>
                                                            <h6>Base Fare: {classItem.baseFare}</h6>
                                                            <h6>Service Charge: {classItem.serviceCharge}</h6>
                                                            <h6>Tax: {classItem.taxFee}</h6>
                                                        </div>
                                                        <h6>Baggage Allowance: {classItem.baggageAllowance}</h6>
                                                    </div>
                                                    <div className='content-passengers-bookeds'>
                                                        <h2 className='passengers-classesss'>Passengers</h2>
                                                        <table className="my-tables">
                                                            <thead>
                                                            <tr>
                                                                <th>PSN</th>
                                                                <th>Passenger Code</th>
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
                                                            {classItem.pnrList.map((pnrItem, pnrIndex) => (
                                                                pnrItem.passengerList.map((passenger, passengerIndex) => (
                                                                    <tr key={passengerIndex}>
                                                                        <td>{passenger.psn}</td>
                                                                        <td>{passenger.passengerCode}</td>
                                                                        <td>{pnrItem.pnrcode}</td>
                                                                        <td>{passenger.category}</td>
                                                                        <td>{passenger.title}</td>
                                                                        <td>{passenger.firstName}</td>
                                                                        <td>{passenger.lastName}</td>
                                                                        <td>{passenger.seat[passengerIndex]?.seatLabel}</td>
                                                                        <td>{classItem.baggageAllowance}</td>
                                                                        <td>{passenger.tickets[passengerIndex]?.ticketNo}</td>
                                                                    </tr>
                                                                ))
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )
                                        ))}

                                        {flight.classes.map((classItem, classIndex) => (
                                            classItem.className === "Premium" && (
                                                <div key={classIndex}
                                                     className={toggle === 2 ? 'show-content-classess' : 'content-classess'}>
                                                    <div className='content-detailss'>
                                                        <div className='left-sides'>
                                                            <h6>Number of Seats: {classItem.seat.totalNumberOfSeat}</h6>
                                                            <h6>Seat Code: {classItem.seat.seatAlphabet}</h6>
                                                            <h6>Occupied Seats: {classItem.seat.noOfOccupiedSeats}</h6>
                                                            <h6>Un-Occupied Seats: {classItem.seat.availableSeat}</h6>
                                                        </div>
                                                        <div className='right-sides'>
                                                            <h6>Surcharge: {classItem.surchargeFee}</h6>
                                                            <h6>Base Fare: {classItem.baseFare}</h6>
                                                            <h6>Service Charge: {classItem.serviceCharge}</h6>
                                                            <h6>Tax: {classItem.taxFee}</h6>
                                                        </div>
                                                        <h6>Baggage Allowance: {classItem.baggageAllowance}</h6>
                                                    </div>
                                                    <div className='content-passengers-bookeds'>
                                                        <h2 className='passengers-classesss'>Passengers</h2>
                                                        <table className="my-tables">
                                                            <thead>
                                                            <tr>
                                                                <th>PSN</th>
                                                                <th>Passenger Code</th>
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
                                                            {classItem.pnrList.map((pnrItem, pnrIndex) => (
                                                                pnrItem.passengerList.map((passenger, passengerIndex) => (
                                                                    <tr key={passengerIndex}>
                                                                        <td>{passenger.psn}</td>
                                                                        <td>{passenger.passengerCode}</td>
                                                                        <td>{pnrItem.pnrcode}</td>
                                                                        <td>{passenger.category}</td>
                                                                        <td>{passenger.title}</td>
                                                                        <td>{passenger.firstName}</td>
                                                                        <td>{passenger.lastName}</td>
                                                                        <td>{passenger.seat[passengerIndex]?.seatLabel}</td>
                                                                        <td>{classItem.baggageAllowance}</td>
                                                                        <td>{passenger.tickets[passengerIndex]?.ticketNo}</td>
                                                                    </tr>
                                                                ))
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )
                                        ))}

                                        {flight.classes.map((classItem, classIndex) => (
                                            classItem.className === "Business" && (
                                                <div key={classIndex}
                                                     className={toggle === 3 ? 'show-content-classess' : 'content-classess'}>
                                                    <div className='content-detailss'>
                                                        <div className='left-sides'>
                                                            <h6>Number of Seats: {classItem.seat.totalNumberOfSeat}</h6>
                                                            <h6>Seat Code: {classItem.seat.seatAlphabet}</h6>
                                                            <h6>Occupied Seats: {classItem.seat.noOfOccupiedSeats}</h6>
                                                            <h6>Un-Occupied Seats: {classItem.seat.availableSeat}</h6>
                                                        </div>
                                                        <div className='right-sides'>
                                                            <h6>Surcharge: {classItem.surchargeFee}</h6>
                                                            <h6>Base Fare: {classItem.baseFare}</h6>
                                                            <h6>Service Charge: {classItem.serviceCharge}</h6>
                                                            <h6>Tax: {classItem.taxFee}</h6>
                                                        </div>
                                                        <h6>Baggage Allowance: {classItem.baggageAllowance}</h6>
                                                    </div>

                                                    <div className='content-passengers-bookeds'>
                                                        <h2 className='passengers-classesss'>Passengers</h2>
                                                        <table className="my-tables">
                                                            <thead>
                                                            <tr>
                                                                <th>PSN</th>
                                                                <th>Passenger Code</th>
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
                                                            {classItem.pnrList.map((pnrItem, pnrIndex) => (
                                                                pnrItem.passengerList.map((passenger, passengerIndex) => (
                                                                    <tr key={passengerIndex}>
                                                                        <td>{passenger.psn}</td>
                                                                        <td>{passenger.passengerCode}</td>
                                                                        <td>{pnrItem.pnrcode}</td>
                                                                        <td>{passenger.category}</td>
                                                                        <td>{passenger.title}</td>
                                                                        <td>{passenger.firstName}</td>
                                                                        <td>{passenger.lastName}</td>
                                                                        <td>{passenger.seat[passengerIndex]?.seatLabel}</td>
                                                                        <td>{classItem.baggageAllowance}</td>
                                                                        <td>{passenger.tickets[passengerIndex]?.ticketNo}</td>
                                                                    </tr>
                                                                ))
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )
                                        ))}

                                    </div>


                                </div>
                            </div>


                        )):
                            // for flightList array
                            flightList.map((flight, index)=> (

                                <div key={index} className="items">
                                    <div className='titles'>
                                        <button className="dropdown-buttons" onClick={() => toggleCollapse(index)}>
                                            {selected === index ?
                                                <img className='listing-header-icon-arrows' src={addImg}
                                                     alt="Dropdown Arrow"/> :
                                                <img className='listing-header-icon-arrows' src={arrowDownWhite}
                                                     alt="Dropdown Arrow"/>}
                                        </button>
                                        <div className='header-titless'>
                                            <div className='header-title-1s'>
                                                <div className='header-title-ups'>Flights No</div>
                                                <div className='header-title-down1s'>{flight.flightNo}</div>
                                                <div className='header-title-down1s'>{flight.flightDirection}</div>
                                                <div className='header-title-down1s'>{flight.flightStatus}</div>


                                            </div>
                                            <div className='header-title-2s'>
                                                <div className='header-title-ups'>Arrival Port</div>
                                                <div
                                                    className='header-title-downs'>{flight.arrivalPort.state} ({flight.arrivalPort.iataCode})
                                                </div>
                                            </div>
                                            <div className='header-title-3s'>
                                                <div className='header-title-ups'>Departure Port</div>
                                                <div
                                                    className='header-title-downs'>{flight.departurePort.state} ({flight.departurePort.iataCode})
                                                </div>
                                            </div>
                                            <div className='header-title-4s'>
                                                <div className='header-title-ups'>Departure Date</div>
                                                <div
                                                    className='header-title-down-4s'>{formatDate(flight.departureDate)}</div>
                                                <br/>
                                                <div
                                                    className='header-title-down-4-as'>{formatTime(flight.departureTime)}</div>
                                            </div>
                                            <div className='header-title-5s'>
                                                <div className='header-title-ups'>Arrival Date</div>
                                                <div className='header-title-down-4s'>{formatDate(flight.arrivalDate)}</div>
                                                <br/>
                                                <div
                                                    className='header-title-down-4-as'>{formatTime(flight.arrivalTime)}</div>

                                            </div>
                                        </div>
                                        <button className="elipse-buttons" onClick={() => toggleModal(flight.id)}>
                                            <img src={eclipseImg} alt="Ellipse Icon"/>
                                        </button>

                                        {showModal && <FlightListingModal onClose={toggleModal} onEdit={handleEdit}
                                                                          onCancel={handleCancel} onDelete={handleDelete}
                                                                          onConfirm={handleConfirm}
                                                                          flightIndex={selectedFlightIndex}/>}
                                        <ToastContainer/>

                                    </div>

                                    <div className={selected === index ? 'content-flights shows' : 'content-flights'}>
                                        <div className="container-tabss">
                                            <ul className='d-flex tabs-classess'>
                                                <li className={isClicked === 1 ? 'flex-fill current-tabs' : 'flex-fill'}
                                                    onClick={() => updateToggle(1)}>Economy
                                                </li>
                                                <li className={isClicked === 2 ? 'flex-fill current-tabs' : 'flex-fill'}
                                                    onClick={() => updateToggle(2)}>Premium
                                                </li>
                                                <li className={isClicked === 3 ? 'flex-fill current-tabs' : 'flex-fill'}
                                                    onClick={() => updateToggle(3)}>Business
                                                </li>
                                            </ul>
                                            {flight.classes.map((classItem, classIndex) => (
                                                classItem.className === "Economy" && (
                                                    <div key={classIndex}
                                                         className={toggle === 1 ? 'show-content-classess' : 'content-classess'}>
                                                        <div className='content-detailss'>
                                                            <div className='left-sides'>
                                                                <h6>Number of Seats: {classItem.seat.totalNumberOfSeat}</h6>
                                                                <h6>Seat Code: {classItem.seat.seatAlphabet}</h6>
                                                                <h6>Occupied Seats: {classItem.seat.noOfOccupiedSeats}</h6>
                                                                <h6>Un-Occupied Seats: {classItem.seat.availableSeat}</h6>
                                                            </div>
                                                            <div className='right-sides'>
                                                                <h6>Surcharge: {classItem.surchargeFee}</h6>
                                                                <h6>Base Fare: {classItem.baseFare}</h6>
                                                                <h6>Service Charge: {classItem.serviceCharge}</h6>
                                                                <h6>Tax: {classItem.taxFee}</h6>
                                                            </div>
                                                            <h6>Baggage Allowance: {classItem.baggageAllowance}</h6>
                                                        </div>
                                                        <div className='content-passengers-bookeds'>
                                                            <h2 className='passengers-classesss'>Passengers</h2>
                                                            <table className="my-tables">
                                                                <thead>
                                                                <tr>
                                                                    <th>PSN</th>
                                                                    <th>Passenger Code</th>
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
                                                                {classItem.pnrList.map((pnrItem, pnrIndex) => (
                                                                    pnrItem.passengerList.map((passenger, passengerIndex) => (
                                                                        <tr key={passengerIndex}>
                                                                            <td>{passenger.psn}</td>
                                                                            <td>{passenger.passengerCode}</td>
                                                                            <td>{pnrItem.pnrcode}</td>
                                                                            <td>{passenger.category}</td>
                                                                            <td>{passenger.title}</td>
                                                                            <td>{passenger.firstName}</td>
                                                                            <td>{passenger.lastName}</td>
                                                                            <td>{passenger.seat[passengerIndex]?.seatLabel}</td>
                                                                            <td>{classItem.baggageAllowance}</td>
                                                                            <td>{passenger.tickets[passengerIndex]?.ticketNo}</td>
                                                                        </tr>
                                                                    ))
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            ))}

                                            {flight.classes.map((classItem, classIndex) => (
                                                classItem.className === "Premium" && (
                                                    <div key={classIndex}
                                                         className={toggle === 2 ? 'show-content-classess' : 'content-classess'}>
                                                        <div className='content-detailss'>
                                                            <div className='left-sides'>
                                                                <h6>Number of Seats: {classItem.seat.totalNumberOfSeat}</h6>
                                                                <h6>Seat Code: {classItem.seat.seatAlphabet}</h6>
                                                                <h6>Occupied Seats: {classItem.seat.noOfOccupiedSeats}</h6>
                                                                <h6>Un-Occupied Seats: {classItem.seat.availableSeat}</h6>
                                                            </div>
                                                            <div className='right-sides'>
                                                                <h6>Surcharge: {classItem.surchargeFee}</h6>
                                                                <h6>Base Fare: {classItem.baseFare}</h6>
                                                                <h6>Service Charge: {classItem.serviceCharge}</h6>
                                                                <h6>Tax: {classItem.taxFee}</h6>
                                                            </div>
                                                            <h6>Baggage Allowance: {classItem.baggageAllowance}</h6>
                                                        </div>
                                                        <div className='content-passengers-bookeds'>
                                                            <h2 className='passengers-classesss'>Passengers</h2>
                                                            <table className="my-tables">
                                                                <thead>
                                                                <tr>
                                                                    <th>PSN</th>
                                                                    <th>Passenger Code</th>
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
                                                                {classItem.pnrList.map((pnrItem, pnrIndex) => (
                                                                    pnrItem.passengerList.map((passenger, passengerIndex) => (
                                                                        <tr key={passengerIndex}>
                                                                            <td>{passenger.psn}</td>
                                                                            <td>{passenger.passengerCode}</td>
                                                                            <td>{pnrItem.pnrcode}</td>
                                                                            <td>{passenger.category}</td>
                                                                            <td>{passenger.title}</td>
                                                                            <td>{passenger.firstName}</td>
                                                                            <td>{passenger.lastName}</td>
                                                                            <td>{passenger.seat[passengerIndex]?.seatLabel}</td>
                                                                            <td>{classItem.baggageAllowance}</td>
                                                                            <td>{passenger.tickets[passengerIndex]?.ticketNo}</td>
                                                                        </tr>
                                                                    ))
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            ))}

                                            {flight.classes.map((classItem, classIndex) => (
                                                classItem.className === "Business" && (
                                                    <div key={classIndex}
                                                         className={toggle === 3 ? 'show-content-classess' : 'content-classess'}>
                                                        <div className='content-detailss'>
                                                            <div className='left-sides'>
                                                                <h6>Number of Seats: {classItem.seat.totalNumberOfSeat}</h6>
                                                                <h6>Seat Code: {classItem.seat.seatAlphabet}</h6>
                                                                <h6>Occupied Seats: {classItem.seat.noOfOccupiedSeats}</h6>
                                                                <h6>Un-Occupied Seats: {classItem.seat.availableSeat}</h6>
                                                            </div>
                                                            <div className='right-sides'>
                                                                <h6>Surcharge: {classItem.surchargeFee}</h6>
                                                                <h6>Base Fare: {classItem.baseFare}</h6>
                                                                <h6>Service Charge: {classItem.serviceCharge}</h6>
                                                                <h6>Tax: {classItem.taxFee}</h6>
                                                            </div>
                                                            <h6>Baggage Allowance: {classItem.baggageAllowance}</h6>
                                                        </div>

                                                        <div className='content-passengers-bookeds'>
                                                            <h2 className='passengers-classesss'>Passengers</h2>
                                                            <table className="my-tables">
                                                                <thead>
                                                                <tr>
                                                                    <th>PSN</th>
                                                                    <th>Passenger Code</th>
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
                                                                {classItem.pnrList.map((pnrItem, pnrIndex) => (
                                                                    pnrItem.passengerList.map((passenger, passengerIndex) => (
                                                                        <tr key={passengerIndex}>
                                                                            <td>{passenger.psn}</td>
                                                                            <td>{passenger.passengerCode}</td>
                                                                            <td>{pnrItem.pnrcode}</td>
                                                                            <td>{passenger.category}</td>
                                                                            <td>{passenger.title}</td>
                                                                            <td>{passenger.firstName}</td>
                                                                            <td>{passenger.lastName}</td>
                                                                            <td>{passenger.seat[passengerIndex]?.seatLabel}</td>
                                                                            <td>{classItem.baggageAllowance}</td>
                                                                            <td>{passenger.tickets[passengerIndex]?.ticketNo}</td>
                                                                        </tr>
                                                                    ))
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            ))}

                                        </div>


                                    </div>
                                </div>

                            ))}
                        <div className="paginations">
                            <button style={{opacity: flightList.length === 0 ? 0 : 1}}
                                    onClick={handlePrevPage} disabled={currentPage === 1}>
                                Previous
                            </button>

                            <button style={{opacity: flightList.length === 0 ? 0 : 1}}
                                    onClick={handleNextPage} disabled={flightList.length < flightsPerPage}>Next
                            </button>
                        </div>
                    </div>


                </>
            )}
        </div>
    );
};

export default FlightListing;