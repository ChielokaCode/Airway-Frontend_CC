
import React, { useState, useEffect } from 'react';
import addImg from "../../assets/addImg.svg";
import arrowDownWhite from "../../assets/arrowDownImg.svg";
import eclipseImg from "../../assets/EclipseImg.svg";
import "../ManageBookingPage/ManageBooking.css"
import { useNavigate } from "react-router-dom";
import filterImg from "../../assets/filterImg.svg";
import bellNotificationImg from "../../assets/bellNotifImg.svg";
import BookingModalFilter from "../BookingModalFilter/BookingModalFilter.jsx";
import airwayAnim from "./airwayanimB.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import BookingCancelModal from "../BookingCancelModal/BookingCancelModal.jsx";

const BASE_URL = 'http://localhost:8080/api/v1/booking';

const getAllBookings = async (pageNo, pageSize, sortParam) => {
  try {
    const response = await fetch(`${BASE_URL}/bookings?pageNo=${pageNo}&pageSize=${pageSize}&sort=${sortParam}`);
    const data = await response.json();
    console.log('API Response Data:', data);
    if (!response.ok) {
      throw new Error('Failed to fetch bookings');
    }
    return data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};


function ManageBooking({isLoggedOut}) {
  const [bookings, setBookings] = useState([]); // Assuming 5 flights initially
  const [selecteds, setSelecteds] = useState(null);
  const [toggle, setToggle] = useState(1);
    const [isOpen, setIsOpen] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const PAGE_SIZE = 10;
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [sortParam, setSortParam] = useState(''); // Define sortParam state variable
  const [searchText, setSearchText] = useState('');
  const [isFilterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // Define searchQuery state variable
  const [loading, setLoading] = useState(true);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState(null);
  const [bookingRefToCancel, setBookingRefToCancel] = useState(null)

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };


  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    performSearch(searchText);
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/logout');

      toast(`Logout successful`)
      // setIsLoggedOut(true);
      localStorage.removeItem("user");
      localStorage.removeItem("userFirstName");
      localStorage.removeItem("userRole");
      localStorage.clear();
      sessionStorage.clear();
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  const toggleFilterModal = () => {
    setFilterOpen(!isFilterOpen);
  };

  const closeFilterModal = () => {
    setFilterOpen(false);
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  useEffect(() => {
    fetchBookings(currentPage, sortParam);
  }, [currentPage, sortParam]);

  const fetchBookings = async (pageNo,sortParam) => {
    setLoading(true);
    setTimeout(async () => {

      try {

        const response = await getAllBookings(pageNo - 1, PAGE_SIZE, sortParam);
        setTotalPages(response.totalPages)
        setLoading(false);
        setBookings(response.content);
      } catch (error) {
        console.error(`Error fetching bookings:`, error)
      }
    }, 1500);
  };


  const toggleCollapse = (index) => {
    if (selecteds === index) {
      console.log(selecteds);
      return setSelecteds(null);

    }
    setSelecteds(index);

  };

  const updateToggle = (id) => {
    setToggle(id);
    setIsClicked(id)
  };

  const handleNavBook = () => {
    navigate(`/`);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };
  const cancelBooking = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/booking-cancelling/${id}`, {
        method: 'PUT'
      });
      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
      window.location.reload();
      // Optionally, handle success response here
      console.log('Booking cancelled successfully');
      toast("Booking cancelled successfully")
    } catch (error) {
      console.error('Error cancelling booking:', error.message);
    }
  };


  // useEffect(() => {
  //   // Get the search query from the URL parameters
  //   const urlSearchParams = new URLSearchParams(window.location.search);
  //   const searchTextFromUrl = urlSearchParams.get('text');
  //   // Set the search query state
  //   setSearchQuery(searchTextFromUrl || '');
  // }, []);

  const handleCancelModalOpen = (id, bookingRef) => {
    setBookingToCancel(id);
    setBookingRefToCancel(bookingRef)
    setCancelModalOpen(true);
  };

  const handleCancelModalClose = (id, bookingRef) => {
    setBookingToCancel(null);
    setCancelModalOpen(false);
  };


  const performSearch = (query) => {
    setSearchQuery(query);

    let filteredData = bookings;
    if (query && query.trim() !== '') {
      const lowerCaseQuery = query.trim();
      filteredData = filteredData.filter(item => {
        const date = new Date(item.createdAt);

        const formattedDate = new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).format(date);

        const modifiedFormattedDate = formattedDate.replace(/\//g, '-');



        return (
            item.bookingReferenceCode && item.bookingReferenceCode.toLowerCase().includes(lowerCaseQuery.toLowerCase())||
             item.tripType && item.tripType.toLowerCase().includes(lowerCaseQuery.toLowerCase())||
            item.bookingStatus && item.bookingStatus.toLowerCase().includes(query.trim().toLowerCase())||
            item.passengerCode && item.passengerCode.toLowerCase().includes(query.trim())||
            modifiedFormattedDate.includes(query.trim())||
             formattedDate.includes(query.trim())||
           (item.bookingFlights && item.bookingFlights.some(flight => {
             const lowerCaseFlightNo = flight && flight.flight && flight.flight.flightNo;
            const pnrCode = flight && flight.pnr && flight.pnr.pnrcode;
               return (
                   (lowerCaseFlightNo && lowerCaseFlightNo.toLowerCase().includes(lowerCaseQuery.toLowerCase())) ||
                  (pnrCode && pnrCode.toLowerCase().includes(lowerCaseQuery.toLowerCase()))
              );
            }))
        );
      });
    }
    setFilteredBookings(filteredData);
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      setTotalPages(Math.ceil(filteredData.length / PAGE_SIZE));
    }, 1500);
  };




  return (

      <>

        <div className='Booking-admin-navbar-container'>
          <div className='Booking-admin-navbar-search'>
            <form>
              <input
                  className='Booking-admin-navbar-search-text'
                  type="search"
                  name="text"
                  value={searchQuery}
                  onChange={handleChange}
                  placeholder="Search for Booking....."
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
            <BookingModalFilter
                isOpen={isFilterOpen}
                closeFilterModal={closeFilterModal}
                handleCheckboxChange={handleChange}
            />
          </div>
        </div>






        <div className='Booking-admin-dashboard-hero-button'>

        <div className='Booking-admin-dashboard-hero-text'>Booking<br/> <span className="Booking-textUnderBOOKING">{getTodayDate()}</span></div>
        <button className='Booking-admin-dashboard-button'  onClick={handleNavBook}><img src={addImg} alt="addImg" />Book</button>
      </div>


      {loading && (
          <img className="Booking-loading-text" src={airwayAnim} alt="Loading animation"/>
      )}
      {loading || (
      <div className='Booking-accordion'>

        {searchQuery ? filteredBookings.map((booking, index) => (

                <div key={index} className="Booking-item">
                  <div className='Booking-title'>
                    <button className="dropdown-buttons" onClick={() => toggleCollapse(index)}>
                      {selecteds === index ?
                          <img className='listing-header-icon-arrows' src={addImg}
                               alt="Dropdown Arrow"/> :
                          <img className='listing-header-icon-arrows' src={arrowDownWhite}
                               alt="Dropdown Arrow"/>}
                    </button>
                    <div className='Booking-header-titles'>
                      <div className='Booking-header-title-1'>
                        <div className='Booking-header-title-up'>Booking Reference</div>
                        <div className='Booking-header-title-down'>{booking.bookingReferenceCode}</div>
                      </div>
                      <div className='Booking-header-title-2'>
                        <div className='Booking-header-title-up'>UserId</div>
                        <div className='Booking-header-title-down'>{booking.passengerCode}</div>
                      </div>
                      <div className='Booking-header-title-3'>
                        <div className='Booking-header-title-up'>Trip</div>
                        <div className='Booking-header-title-down'>{booking.tripType}</div>
                      </div>
                      <div className='Booking-header-title-4'>
                        <div className='Booking-header-title-up'>Flight</div>
                        <div className='Booking-header-title-down-4'>
                          {booking.bookingFlights.map((flight, flightIndex) => (
                              <div key={flightIndex}>
                                {flight.flight.flightNo}
                              </div>                      ))}
                        </div>
                      </div>
                      <div className='Booking-header-title-5'>
                        <div className='Booking-header-title-up'>Fare</div>
                        <div className='Booking-header-title-down-5'>{booking.totalFare}</div>
                      </div>
                      <div className='Booking-header-title-6'>
                        <div className='Booking-header-title-up'>Status</div>
                        <div className='Booking-header-title-down-6'>{booking.bookingStatus}</div>
                      </div>
                      {/*<span className='Bheader-title-up'>Date:{booking.createdAt}</span>*/}
                    </div>


                    <button className="Booking-elipse-button" onClick={() => toggleDropdown(index)}><img src={eclipseImg}/></button>
                    {openDropdownIndex === index && (
                        <div className="Booking-dropdown-content">
                          {/*<button>Edit</button>*/}
                          <button onClick={() => handleCancelModalOpen(booking.id, booking.bookingReferenceCode)}>CANCEL</button>
                        </div>
                    )}

                  </div>
                  <div className={selecteds === index ? 'content-flight show' : 'content-flight'}>
                    <div className="Booking-container-tabs">
                      {booking.bookingFlights.map((flight, flightIndex) => (

                          <div className='Booking-content-passengers-booked'>
                            <table>
                              <th className="Booking-table-header" key={flightIndex}>
                                <h2 className='Booking-passengers-classess'>Flight {flightIndex+1}</h2>
                              </th>
                              <th className="Booking-table-header">
                                <h2 className='Booking-passengers-classess'>{flight.classes.className}</h2>
                              </th>
                              <th  className="Booking-table-header">
                                <h2 className='Booking-passengers-classess'>Flight No:  <span className="BlightPNRFLIGHTNO">
                              {flight.flight.flightNo}</span></h2>
                              </th>
                              <th className="Booking-table-header">
                                <h2 className='Booking-passengers-classess'>PNR:  <span className="BlightPNRFLIGHTNO">{flight.pnr.pnrcode} </span> </h2>
                              </th>
                            </table>

                            <table className="Booking-my-table" >
                              <thead>
                              <tr>
                                <th>PSN</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Title</th>
                                <th>Nationality</th>
                                <th>DOB</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>Seat No</th>
                                <th>Ticket No</th>
                              </tr>
                              </thead>
                              {flight.pnr.passengerList.map((passenger, passengerIndex) => (
                                  <tbody>
                                  <tr  key={`${flightIndex}-${passengerIndex}`}>
                                    <td>{passenger.psn}</td>
                                    <td>{passenger.firstName}</td>
                                    <td>{passenger.lastName}</td>
                                    <td>{passenger.title}</td>
                                    <td>{passenger.nationality}</td>
                                    <td>{passenger.dateOfBirth}</td>
                                    <td>{passenger.phoneNumber}</td>
                                    <td>{passenger.passengerEmail}</td>
                                    <td>{passenger.seat[flightIndex]?.seatLabel}</td>
                                    <td>{passenger.tickets[flightIndex]?.ticketNo}</td>
                                  </tr>
                                  {/*<tr>*/}
                                  {/*  <td>Lois</td>*/}
                                  {/*  <td>Griffin</td>*/}
                                  {/*  <td>Lois</td>*/}
                                  {/*  <td>Griffin</td>*/}
                                  {/*  <td>Lois</td>*/}
                                  {/*  <td>Griffin</td>*/}
                                  {/*  <td>Lois</td>*/}
                                  {/*  <td>Griffin</td>*/}
                                  {/*  <td>Lois</td>*/}
                                  {/*  <td>Griffin</td>*/}
                                  {/*</tr>*/}
                                  </tbody>
                              ))}

                            </table>

                          </div>
                      ))}

                    </div>

                    {/* Dropdown content goes here */}
                  </div>

                </div>
            )):



        bookings.map((booking, index) => (

            <div key={index} className="Booking-item">
              <div className='Booking-title'>
                <button className="dropdown-buttons" onClick={() => toggleCollapse(index)}>
                  {selecteds === index ?
                      <img className='listing-header-icon-arrows' src={addImg}
                           alt="Dropdown Arrow"/> :
                      <img className='listing-header-icon-arrows' src={arrowDownWhite}
                           alt="Dropdown Arrow"/>}
                </button>
                <div className='Booking-header-titles'>
                  <div className='Booking-header-title-1'>
                    <div className='Booking-header-title-up'>Booking Reference</div>
                    <div className='Booking-header-title-down'>{booking.bookingReferenceCode}</div>
                  </div>
                  <div className='Booking-header-title-2'>
                    <div className='Booking-header-title-up'>UserId</div>
                    <div className='Booking-header-title-down'>{booking.passengerCode}</div>
                  </div>
                  <div className='Booking-header-title-3'>
                    <div className='Booking-header-title-up'>Trip</div>
                    <div className='Booking-header-title-down'>{booking.tripType}</div>
                  </div>
                  <div className='Booking-header-title-4'>
                    <div className='Booking-header-title-up'>Flight</div>
                    <div className='Booking-header-title-down-4'>
                      {booking.bookingFlights.map((flight, flightIndex) => (
                          <div key={flightIndex}>
                            {flight.flight.flightNo}
                          </div>                      ))}
                    </div>
                  </div>
                  <div className='Booking-header-title-5'>
                    <div className='Booking-header-title-up'>Fare</div>
                    <div className='Booking-header-title-down-5'>{booking.totalFare}</div>
                  </div>
                  <div className='Booking-header-title-6'>
                    <div className='Booking-header-title-up'>Status</div>
                    <div className='Booking-header-title-down-6'>{booking.bookingStatus}</div>
                  </div>
                </div>


                <button className="Booking-elipse-button" onClick={() => toggleDropdown(index)}><img src={eclipseImg}/></button>
                {openDropdownIndex === index && (
                    <div className="Booking-dropdown-content">
                      {/*<button>Edit</button>*/}
                      <button onClick={() => handleCancelModalOpen(booking.id, booking.bookingReferenceCode)}>CANCEL</button>
                    </div>
                )}
              </div>
              <div className={selecteds === index ? 'content-flight show' : 'content-flight'}>
                <div className="Booking-container-tabs">
                  {booking.bookingFlights.map((flight, flightIndex) => (

                      <div className='Booking-content-passengers-booked'>
                          <table>
                        <th className="Booking-table-header" key={flightIndex}>
                      <h2 className='Booking-passengers-classess'>Flight {flightIndex+1}</h2>
                        </th>
                        <th className="Booking-table-header">
                          <h2 className='Booking-passengers-classess'>{flight.classes.className}</h2>
                        </th>
                        <th  className="Booking-table-header">
                          <h2 className='Booking-passengers-classess'>Flight No:  <span className="Booking-lightPNRFLIGHTNO">
                              {flight.flight.flightNo}</span></h2>
                        </th>
                        <th className="Booking-table-header">
                              <h2 className='Booking-passengers-classess'>PNR:  <span className="Booking-lightPNRFLIGHTNO">{flight.pnr.pnrcode} </span> </h2>
                        </th>
                              </table>

                      <table className="Booking-my-table" >
                        <thead>
                        <tr>
                          <th>PSN</th>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Title</th>
                          <th>Nationality</th>
                          <th>DOB</th>
                          <th>Phone No</th>
                          <th>Email</th>
                          <th>Seat No</th>
                          <th>Ticket No</th>
                        </tr>
                        </thead>
                        {flight.pnr.passengerList.map((passenger, passengerIndex) => (
                            <tbody>
                        <tr  key={`${passengerIndex}`}>
                          <td>{passenger.psn}</td>
                          <td>{passenger.firstName}</td>
                          <td>{passenger.lastName}</td>
                          <td>{passenger.title}</td>
                          <td>{passenger.nationality}</td>
                          <td>{passenger.dateOfBirth}</td>
                          <td>{passenger.phoneNumber}</td>
                          <td>{passenger.passengerEmail}</td>
                          <td>{passenger.seat[flightIndex]?.seatLabel}</td>
                          <td>{passenger.tickets[flightIndex]?.ticketNo}</td>
                        </tr>
                        </tbody>
                        ))}

                      </table>

                  </div>
                  ))}

                </div>

                {/* Dropdown content goes here */}
              </div>
            </div>
        ))}
        <div className="Booking-pagination">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={() => goToPage(currentPage + 1)} disabled={bookings.length<PAGE_SIZE}>Next</button>
        </div>
        <ToastContainer autoClose={5000}/>
        {cancelModalOpen && (
            <BookingCancelModal
                bookingId={bookingToCancel}
                bookingRef={bookingRefToCancel}
                onCancel={handleCancelModalClose}
                cancelBooking={cancelBooking}
            />
        )}
      </div>
          )}

    </>

  );
};
export default ManageBooking