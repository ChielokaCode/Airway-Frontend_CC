import React, { useState, useEffect } from "react";
import "./FlightSelectionOne.css";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DepartingFlightInformationPageBody
  from "../FlightInformationPage/DepartingFlightInformationPageBody/DepartingFlightInformationPageBody.jsx";
import ReturningFlightInformationPageBody
  from "../FlightInformationPage/ReturningFlightInformationPageBody/ReturningFlightInformationPageBody.jsx";
import {Link} from "react-router-dom";
import  PlaneImage from "../../assets/planeInMotion.svg";
import flightImage from "../../assets/Flight-Icon.svg";
import smallDepart from "../../assets/smalldep.svg";
import bigDepart from "../../assets/bigdep.svg";
import smallReturn from "../../assets/smallreturnplan.svg";
import returnPlane from "../../assets/returningplane.svg";
import cancelmodal from "../FlightInformationPage/Vector.png";
import Group5 from "/src/assets/Group 5.svg";
import searchIcon from "/src/assets/searchIcon.svg";
import smallDepartingFlight from "/src/assets/smallflight.svg";

const SliderWrapper = styled.div`
  margin-top: 20px;

  & > div {
    color: black;
    background-color: white;
  }

  .boxy{
    border: 1px solid #ccc;
    height: 8em;
    margin-bottom: 10px;
    background-color: #2D9CDB;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .boxy .day {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .boxy .date {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }


  .departureslider {
    border: 1px solid #ccc;
    background-color: #001f3f;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    height: 8em
  }

  .departureslider .day {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .departureslider .date {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .returnslider {
    border: 1px solid #ccc;
    height: 8em;
    margin-bottom: 10px;
    background-color: #001f3f;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .returnslider .day {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .returnslider .date {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .returnNoFlight {
    border: 1px solid #ccc;
    height: 8em;
    margin-bottom: 10px;
    background-color: darkgray;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .noFlightText{
    text-align: center;
  }
  .returnNoFlight .day {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .returnNoFlight .date {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .returnWithFlight {
    border: 1px solid #ccc;
    height: 8em;
    margin-bottom: 10px;
    background-color: #001f3f;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    transition: transform 0.3s ease;
    cursor: pointer;
  }


  .returnWithFlight .day {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .returnWithFlight .date {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }




`;

function FlightSelectionOne(props) {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  let [data, setData] = useState([]);
  const [departingFlights, setDepartingFlights] = useState([]);
  const [returningFlights, setReturningFlights] = useState([]);
  const [departureTotalFlights, setDepartureTotalFlights] = useState(0);
  const [returningTotalFlights, setReturningTotalFlights] = useState(0);
  const [allDeparture, setAllDeparture] = useState([]);
  const [allReturning, setAllReturning] = useState([]);
  const [modal, setModal] = useState(false);
  const [returnModal, setReturnModal] = useState(false);
  const [selectedDepartingClasses, setSelectedDepartingClasses] = useState("");
  const [selectedReturningSelectedClasses, setReturningSelectedClasses] = useState("");
  const [departingFlightDate, setDepartingFlightDate] = useState("");
  const [returningFlightDate, setReturningFlightDate] = useState("");
  const [selectedDepartingFlightInfo, setSelectedDepartingFlightInfo] = useState(0);
  const [selectedDepartingFlight, setSelectedDepartingFlight] = useState(0);
  const [selectedReturningFlightInfo, setSelectedReturningFlightInfo] = useState(0);
  const [selectedReturningFlight, setSelectedReturningFlight] = useState(0);
  const [departingFlightPrice, setDepartingFlightPrice] = useState(0);
  const [returningFlightPrice, setReturningFlightPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [returnClickedSlider, setReturnClickedSlider] = useState(null);
  const [departClickedSlider, setDepartClickedSlider] = useState(null);
  const [showSelectedReturningFlights, setShowSelectedReturningFlights] = useState({});
  const [showSelectedDepartingFlights, setShowSelectedDepartingFlights] = useState({})







  const handleReturnSliderClick = (index) => {
    setReturnClickedSlider(index);
  };
  function getAllDaysInYear(year) {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    const days = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  }

  const year = 2024;
  const daysInYear = getAllDaysInYear(year);






  const handleDepartSliderClick = (index) => {
    setDepartClickedSlider(index);
  };

  const filteredDepartingFlights = allDeparture.filter((flight) => {
    return flight.departureDate === departingFlightDate;
  });

  const filteredReturningFlights = allReturning.filter((flight) => {
    return flight.departureDate === returningFlightDate;
  });

  const filteredDepartingFlightInfo = filteredDepartingFlights.filter ((_,index)=> index + 1===Number(selectedDepartingFlightInfo));
  const departingFlightsInfo = ( filteredDepartingFlightInfo?.length?filteredDepartingFlightInfo : filteredDepartingFlights);

  const searchedDepartingFlight = departingFlights.filter((_,index) => index + 1 ===Number (selectedDepartingFlight));
  const searchedDepartingFlightInfo = (searchedDepartingFlight?.length?searchedDepartingFlight : departingFlights);

  const filteredReturningFlightInfo = filteredReturningFlights.filter ((_,index)=> index + 1===Number(selectedReturningFlightInfo))
  const returningFlightsInfo = (filteredReturningFlightInfo?.length?filteredReturningFlightInfo : filteredReturningFlights)

  const searchedReturningFlight = returningFlights.filter((_,index) => index + 1 ===Number (selectedReturningFlight));
  const searchedReturningFlightInfo = (searchedReturningFlight?.length?searchedReturningFlight : returningFlights);

  const showModal = () => {
    setModal(true);
  };



  const showReturnModal = () => {
    setReturnModal(true)
  }


  const cancelDepart =()=>{
    setModal(false);
  }


  const cancelReturn =()=>{
    setReturnModal(false);
  }

  const getUsernameFromLocalStorage = () => {
    return localStorage.getItem("username") || "";
  };

  function getFormattedDate(dateString) {
    console.log(dateString)
    const date = new Date(dateString);
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }

  function getDepartingFlightDate(dateString) {
    setDepartingFlightDate(dateString);

    setSelectedDepartingFlightInfo(0);
  }

  function getReturningFlightDate(dateString) {
    setReturningFlightDate(dateString);

    setSelectedReturningFlightInfo(0);
  }

  useEffect(() => {
    const authenticatedUsername = getUsernameFromLocalStorage();
    if (authenticatedUsername) {
      set(authenticatedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[dayOfWeek];
  }


  const firstName = JSON.parse(localStorage.getItem('userFirstName'));

  const routeSearch = (e) => {
    navigate(`/`);
  };

  const routePassengerInformation = (e) => {
    navigate(`/passenger-information`,{
      state:{
        departingFlights: departingFlights,
        returningFlights: returningFlights,
        totalPrice: totalPrice
      }
    })
  };

  const handleDepartingSelectFlight = (classId) => {
    localStorage.setItem("selectedDepartingFlightId", classId);
    setSelectedDepartingClasses(classId);
    setDepartingFlightPrice(departingFlightPrice);
  };

  const handleReturningSelectFlight = (classId) => {
    localStorage.setItem("selectedReturningFlightId", classId);
    setReturningSelectedClasses(classId);
    setReturningFlightPrice(returningFlightPrice);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <MdChevronRight color="black" size={8} />,
    prevArrow: <MdChevronLeft color="black" size={8} />,
  };

  const storedSearchDetails = JSON.parse(localStorage.getItem("searchDetails"));



  useEffect(() => {
    const fetchData = async () => {
      try {
        data = location.state || {};
        if (data && data["Departing Flights"]) {
          setDepartingFlights(data["Departing Flights"]?.flights || []);
          setDepartureTotalFlights(
              data["Departing Flights"]?.totalFlights || 0
          );
          departingFlights.forEach((flight) => {
            const classes = flight?.classes;
            classes.forEach((classItem) => {
              console.log(classItem)
            });
          });
        }
        if (data && data["Returning Flights"]) {
          setReturningFlights(data["Returning Flights"]?.flights || []);
          setReturningTotalFlights(
              data["Returning Flights"]?.totalFlights || 0
          );
          returningFlights.forEach((flight) => {
            const classes = flight.classes;
            classes.forEach((classItem) => {
             console.log(classItem);
            });
          });
        }
      } catch (error) {
        console.error("Error fetching flight data:".error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!storedSearchDetails) return;
    const fetchDepartingFlights = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8080/api/v1/flights/all-departing-flights?departurePort=${storedSearchDetails?.departurePort}&arrivalPort=${storedSearchDetails?.arrivalPort}&departureDate=${storedSearchDetails?.departureDate}`
        );

        if (response && response.status === 200) setAllDeparture(response.data);
        else {
          console.log("departures", response);
        }
      } catch (error) {
        console.log("Error fetching departing flights:", error);
      }
    };
    fetchDepartingFlights();
  }, []);

  useEffect(() => {
    if (!storedSearchDetails) return;
    console.log(storedSearchDetails);
    const fetchReturningFlights = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8080/api/v1/flights/all-returning-flights?departurePort=${storedSearchDetails?.departurePort}&arrivalPort=${storedSearchDetails?.arrivalPort}&arrivalDate=${storedSearchDetails?.returnDate}`
        );

        if (response && response.status === 200) {
          setAllReturning(response.data);
        } else {
          console.log("Error fetching returning flights:", response);
        }
      } catch (error) {
        console.log("Error fetching returning flights:", error);
      }
    };
    fetchReturningFlights();
  }, []);

  useEffect(() => {
    setTotalPrice(returningFlightPrice + departingFlightPrice);
  }, [returningFlightPrice, departingFlightPrice]);


  useEffect(() => {
    setTotalPrice(returningFlightPrice + departingFlightPrice);
    localStorage.setItem('totalPrice', totalPrice.toString());
  }, [returningFlightPrice, departingFlightPrice, totalPrice]);


  function convertTo12HourFormat(departureTime) {
    const [hours, minutes] = departureTime.split(":");
    const time = new Date(0, 0, 0, hours, minutes);


    const formattedTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    return formattedTime;
  }

  function convertTo12HourFormat(arrivalTime) {
    const [hours, minutes] = arrivalTime.split(":");
    const time = new Date(0, 0, 0, hours, minutes);

    const formattedTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    return formattedTime;
  }

  const [departureCalenderValue, setDepartureCalenderValue] = useState(
      storedSearchDetails?.departureDate
  );
  const filterDepatureCalender = allDeparture.filter((flight) => {
    return (
        new Date(flight.departureDate)?.toLocaleDateString() ===
        new Date(departureCalenderValue)?.toLocaleDateString()
    );
  });

  const [returnCalenderValue, setReturnCalenderValue] = useState(
      storedSearchDetails?.departureDate
  );
  const filterReturnCalender = allDeparture.filter((flight) => {
    return (
        new Date(flight.departureDate)?.toLocaleDateString() ===
        new Date(returnCalenderValue)?.toLocaleDateString()
    );
  });

  const searchedDepartureDateIndex = daysInYear.findIndex(day => day.toLocaleDateString() === new Date(departureCalenderValue).toLocaleDateString());
  const searchedReturningDateIndex = daysInYear.findIndex(day => day.toLocaleDateString() === new Date(returnCalenderValue).toLocaleDateString());
  const departureDates = allDeparture.map(flight => flight.departureDate);
  const allDepartureJSON = JSON.stringify(departureDates);
  localStorage.setItem('allDeparture', allDepartureJSON);




  return (
      <div className="parent">
        <div className="headercontainer">
          <div className="flightImgAndAirway">
            <img src={PlaneImage} alt="Plane" />{" "}
            <span className="airwayText">Airway</span>
          </div>
          <div className="infoflight">
            <div className="imgflightinfo">
              <img src={Group5} alt="Group" />{" "}
            </div>
            <div className="statusPassengerPaymentConfirmation">
              <div className="flightSel">Flight Selection</div>
              <div className="passenger">Passenger Info</div>
              <div className="passenger">Payment</div>
              <div className="confirm">Confirmation</div>
            </div>
          </div>
          <div className="homeAboutSign">
            <div className="homeAbout">
              <ul className="menuu">
                <li><Link to={"/"} className="menuu-item">Home</Link></li>
                <li><Link to={"/about"} className="menuu-item" >About us</Link></li>
                <li>
                  {firstName ? (
                      <div className="uFirstName">
                        {firstName}
                      </div>
                  ) : (
                      <Link to={"/signup"}><button className="buttonn">Sign Up</button></Link>
                  )}
                </li>
              </ul>
              </div>
            </div>
        </div>

        {/*hero */}
        <div className="inner">
          <div className="airwayherobody">
            <div className="routesearch">
              <button
                  className="searchAirway"
                  type="button"
                  onClick={routeSearch}
              >
                <img src={searchIcon} />
                <span>Search</span>
              </button>
              <div className="routeDatePassTrip">
                {searchResults && (
                    <div>
                      <div className="#">
                        {departingFlights.length && (
                            <div>
                              <div>
                                {departingFlights[0]?.departurePortCity}(
                                {departingFlights[0]?.departurePortName})-{" "}
                                {departingFlights[0]?.arrivalPortCity} (
                                {departingFlights[0]?.arrivalPortName})
                              </div>
                            </div>
                        )}
                      </div>
                      <div className="#">
                        {getFormattedDate(storedSearchDetails?.departureDate)}
                        {storedSearchDetails && storedSearchDetails.returnDate && (
                            <span>-{" "}{getFormattedDate(storedSearchDetails.returnDate)}</span>
                        )} {" "}| {" "}
                        {storedSearchDetails?.noOfAdult} Adult
                        {storedSearchDetails?.noOfAdult > 1 ? "s" : ""},{" "}
                        {storedSearchDetails?.noOfChildren} Child
                        {storedSearchDetails?.noOfChildren > 1 ? "ren" : ""},{" "}
                        {storedSearchDetails?.noOfInfant} Infant
                        {storedSearchDetails?.noOfInfant > 1 ? "s" : ""} |
                        {storedSearchDetails?.tripType}
                      </div>
                    </div>
                )}
              </div>
            </div>
            <div className="priceairway">
              <div className="totalPrice">TotalPrice</div>
              <div className="price">
                <span>{totalPrice} NGN</span>
              </div>
            </div>
          </div>

          {allDeparture?.length > 0 && departureTotalFlights !== 0 && (
              <div className="departurebody">
                <div className="depart-div">
                  <img src={smallDepartingFlight} alt="Flight" />
                  <span>Departing Flights</span>
                </div>

                <SliderWrapper>
                  <Slider
                      {...settings}
                      className="container grid justify-between pt-[20px] slider-width"
                      initialSlide={searchedDepartureDateIndex}
                  >
                    {daysInYear.map((day, index) => {
                      const flight = allDeparture.find(flight => new Date(flight.departureDate).toLocaleDateString() === day.toLocaleDateString());
                      const leastBaseFareClass = flight ? flight.classes.reduce(
                          (minClass, currentClass) => {
                            return currentClass.baseFare < minClass.baseFare ? currentClass : minClass;
                          },
                          flight.classes[0]
                      ) : null;

                      return (
                          <div
                              key={index}
                              className={index === departClickedSlider ? "boxy" : (!flight ? "returnNoFlight" : "returnWithFlight")}
                               onClick={(e) => {
                                getDepartingFlightDate(flight?.departureDate || day.toLocaleString());
                                handleDepartSliderClick(index);
                              }}
                          >
                            <div className="date">
                              {day.toLocaleDateString()}
                            </div>
                            {flight && (
                                <>
                                  <div className="day" type="date">
                                    {getDayOfWeek(flight.departureDate)}
                                  </div>
                                  <div className="baseFare">
                                    {leastBaseFareClass.baseFare}
                                  </div>
                                  <div className="naira">NGN</div>
                                </>
                            )}
                            {!flight && (
                                <div className="noFlightText">No flight available</div>
                            )}
                          </div>
                      );
                    })}
                  </Slider>
                </SliderWrapper>


                    <div className="departureflight">
                      <div className="nodepflight">
                        {"Number of Flights: " + (departClickedSlider === null ?  departingFlights.length : filteredDepartingFlights?.length)}
                      </div>
                      {(departClickedSlider === null ? searchedDepartingFlightInfo : departingFlightsInfo)?.map((flight, index) => (
                          <div className="depinnerbody" key={index}>
                            <div className="depflyrouteinfo">
                              <div className="depflightinfo">Flight Information</div>
                              <div className="depandarrivetime">
                                <div className="deptime">
                                  <div className="departtime">
                                    {convertTo12HourFormat(flight?.departureTime)}
                                  </div>
                                  <div className="deproute">
                                    {flight?.departurePortCity}
                                  </div>
                                </div>

                                <img src={bigDepart} />

                                <div className="arrivaltime">
                                  <div className="departtime">
                                    {convertTo12HourFormat(flight?.arrivalTime)}
                                  </div>
                                  <div className="arriveroute">
                                    {flight?.arrivalPortCity}
                                  </div>
                                </div>
                              </div>

                              <div className="summary">
                                <div className="departing">
                                  <img src={smallDepart} />
                                  <div className="dep">Departure</div>
                                </div>

                                <div className="depflyinfo">
                                  <img src={flightImage} />
                                  <button onClick={() => { setShowSelectedDepartingFlights(flight); showModal(); }} type="button">
                                    Flight Information
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="flyclassesandprices">
                              <div className="flight-classes">
                                <div className="class">Economy</div>
                                <div className="class">Premium</div>
                                <div className="class">Business</div>
                              </div>

                              <div className="flightprices">




                                  <div className="economyclass">
                                    <div className="price">
                                      {flight.classes.find(cls => cls.className === "Economy") ? flight.classes.find(cls => cls.className === "Economy").baseFare : null}
                                    </div>
                                    {flight && flight.classes.find(cls => cls.className === "Economy") ? (
                                        <div className="naira">NGN</div>
                                    ) : null}
                                    {flight.classes.find(cls => cls.className === "Economy") ? (
                                        <button
                                            style={{
                                              background: flight?.classes.find(cls => cls.className === "Economy")?.id === selectedDepartingClasses ? "blue" : "transparent",
                                              color: flight?.classes.find(cls => cls.className === "Economy")?.id === selectedDepartingClasses ? "white" : "#2D9CDB",
                                            }}
                                            onClick={() => {
                                              const economyClass = flight.classes.find(cls => cls.className === "Economy");
                                              handleDepartingSelectFlight(economyClass?.id);
                                              setSelectedDepartingFlightInfo(index + 1);
                                              setDepartingFlightPrice(economyClass?.baseFare);
                                              console.log(index + 1);
                                              console.log(economyClass?.baseFare);
                                              console.log("economy class clicked:", economyClass?.className);

                                            }}

                                        >
                                          SELECT
                                        </button>
                                    ) : (
                                        <div className="not-available">Not Available</div>
                                    )}

                                  </div>


                                <div className="premiumclass">
                                  <div className="price">
                                    {flight.classes.find(cls => cls.className === "Premium") ? flight.classes.find(cls => cls.className === "Premium").baseFare : null}
                                  </div>
                                  {flight && flight.classes.find(cls => cls.className === "Premium") ? (
                                      <div className="naira">NGN</div>
                                  ) : null}
                                  {flight.classes.find(cls => cls.className === "Premium") ? (
                                      <button
                                          style={{
                                            background: flight?.classes.find(cls => cls.className === "Premium")?.id === selectedDepartingClasses ? "blue" : "transparent",
                                            color: flight?.classes.find(cls => cls.className === "Premium")?.id === selectedDepartingClasses ? "white" : "#2D9CDB",
                                          }}
                                          onClick={() => {
                                            const premiumClass = flight.classes.find(cls => cls.className === "Premium");
                                            handleDepartingSelectFlight(premiumClass?.id);
                                            setSelectedDepartingFlightInfo(index + 1);
                                            setDepartingFlightPrice(premiumClass?.baseFare);
                                            console.log(index + 1);
                                            console.log(premiumClass?.baseFare);
                                            console.log("premium class clicked:", premiumClass?.className);
                                          }}

                                      >
                                        SELECT
                                      </button>
                                  ) : (
                                      <div className="not-available">Not Available</div>
                                  )}

                                </div>



                                <div className="businessclass">
                                  <div className="price">
                                    {flight.classes.find(cls => cls.className === "Business") ? flight.classes.find(cls => cls.className === "Business").baseFare : null}
                                  </div>
                                  {flight && flight.classes.find(cls => cls.className === "Business") ? (
                                      <div className="naira">NGN</div>
                                  ) : null}
                                  {flight.classes.find(cls => cls.className === "Business") ? (
                                      <button
                                          style={{
                                            background: flight?.classes.find(cls => cls.className === "Business")?.id === selectedDepartingClasses ? "blue" : "transparent",
                                            color: flight?.classes.find(cls => cls.className === "Business")?.id === selectedDepartingClasses ? "white" : "#2D9CDB",
                                          }}
                                          onClick={() => {
                                            const businessClass = flight.classes.find(cls => cls.className === "Business");
                                            handleDepartingSelectFlight(businessClass?.id);
                                            setSelectedDepartingFlightInfo(index + 1);
                                            setDepartingFlightPrice(businessClass?.baseFare);
                                            console.log(index + 1);
                                            console.log(businessClass?.baseFare);
                                            console.log("business class clicked:", businessClass?.className);

                                          }}

                                      >
                                        SELECT
                                      </button>
                                  ) : (
                                      <div className="not-available">Not Available</div>
                                  )}

                                </div>





                              </div>
                            </div>
                          </div>
                      ))}
                    </div>

              </div>
          )}




          {allReturning?.length > 0 && returningTotalFlights !== 0 && (
          <div className="arrivalbody">

              <div className="depart-div">
                <img src={smallDepartingFlight} alt="Flight" />
                <span>Returning Flights</span>
              </div>


            <SliderWrapper>
              <Slider
                  {...settings}
                  className="container grid justify-between pt-[20px] slider-width"
                  initialSlide={searchedReturningDateIndex}
              >
                {daysInYear.map((day, index) => {
                  const flight = allReturning.find(flight => new Date(flight.arrivalDate).toLocaleDateString() === day.toLocaleDateString());
                  const leastBaseFareClass = flight ? flight.classes.reduce(
                      (minClass, currentClass) => {
                        return currentClass.baseFare < minClass.baseFare ? currentClass : minClass;
                      },
                      flight.classes[0]
                  ) : null;

                  return (
                      <div
                          key={index}
                          className={index === returnClickedSlider ? "boxy" : (!flight ? "returnNoFlight" : "returnWithFlight")}
                          onClick={(e) => {
                            getReturningFlightDate(flight?.departureDate || day.toLocaleString());
                            handleReturnSliderClick(index);
                          }}
                      >


                        <div className="date">{day.toLocaleDateString()}</div>

                        {flight && (
                            <>
                              <div className="day" type="date">{getDayOfWeek(flight.arrivalDate)}</div>
                              <div className="baseFare">{leastBaseFareClass.baseFare}</div>
                              <div className="naira">NGN</div>
                            </>
                        )}
                        {!flight && (
                            <div className="noFlightText">No flight available</div>
                        )}
                      </div>
                  );
                })}
              </Slider>
            </SliderWrapper>





              <div className="arrivalflight">
                <div className="nodepflight">
                  {"Number of Flights: " + (returnClickedSlider === null ? returningFlights?.length : filteredReturningFlights?.length)}
                </div>
                {(returnClickedSlider === null ? searchedReturningFlightInfo : returningFlightsInfo  )?.map((flight, index) => (
                    <div className="arrivedepinnerbody" key={index}>
                      <div className="depflyrouteinfo">
                        <div className="depflightinfo">Flight Information</div>

                        <div className="depandarrivetime">
                          <div className="arrivaltime">
                            <div className="arrivetime">
                              {convertTo12HourFormat(flight?.arrivalTime)}
                            </div>
                            <div className="arriveroute">
                              {flight?.arrivalPortCity}
                            </div>
                          </div>
                          <img src={returnPlane} />
                          <div className="deptime">
                            <div className="departtime">
                              {convertTo12HourFormat(flight?.departureTime)}
                            </div>
                            <div className="deproute">
                              {flight?.departurePortCity}
                            </div>
                          </div>
                        </div>

                        <div className="summary">
                          <div className="departing">
                            <img src={smallReturn} />
                            <div className="dep">Arrival</div>
                          </div>

                          <div className="depflyinfo">
                            <img src={flightImage} />
                            <button
                                onClick={() => { setShowSelectedReturningFlights(flight); showReturnModal(); }}
                                className="flyinfo"
                                type="button">
                              Flight Information
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flyclassesandprices">
                        <div className="flight-classes">
                          <div className="class">Economy</div>
                          <div className="class">Premium</div>
                          <div className="class">Business</div>
                        </div>



                        <div className="flightprices">
                          <div className="economyclass">
                            <div className="price">
                              {flight.classes.find(cls => cls.className === "Economy") ? flight.classes.find(cls => cls.className === "Economy").baseFare : null}
                            </div>
                            {flight && flight.classes.find(cls => cls.className === "Economy") ? (
                                <div className="naira">NGN</div>
                            ) : null}
                            {flight.classes.find(cls => cls.className === "Economy") ? (
                                <button
                                    style={{
                                      background: flight?.classes.find(cls => cls.className === "Economy")?.id === selectedReturningSelectedClasses ? "blue" : "transparent",
                                      color: flight?.classes.find(cls => cls.className === "Economy")?.id === selectedReturningSelectedClasses ? "white" : "#2D9CDB",
                                    }}
                                    onClick={() => {
                                      const economyClass = flight.classes.find(cls => cls.className === "Economy");
                                      handleReturningSelectFlight(economyClass?.id);
                                      setSelectedReturningFlightInfo(index + 1);
                                      setReturningFlightPrice(economyClass?.baseFare);
                                      console.log(index + 1);
                                      console.log(economyClass?.baseFare);
                                      console.log("Business class clicked:", economyClass?.className);

                                    }}

                              >
                                  SELECT
                                </button>
                            ) : (
                                <div className="not-available">Not Available</div>
                            )}

                          </div>
                          <div className="premiumclass">
                            <div className="price">
                              {flight.classes.find(cls => cls.className === "Premium") ? flight.classes.find(cls => cls.className === "Premium").baseFare : null}
                            </div>
                            {flight && flight.classes.find(cls => cls.className === "Premium") ? (
                                <div className="naira">NGN</div>
                            ) : null}
                            {flight.classes.find(cls => cls.className === "Premium") ? (
                                <button
                                    style={{
                                      background: flight?.classes.find(cls => cls.className === "Premium")?.id === selectedReturningSelectedClasses ? "blue" : "transparent",
                                      color: flight?.classes.find(cls => cls.className === "Premium")?.id === selectedReturningSelectedClasses ? "white" : "#2D9CDB",
                                    }}
                                    onClick={() => {
                                      const premiumClass = flight.classes.find(cls => cls.className === "Premium");
                                      handleReturningSelectFlight(premiumClass?.id);
                                      setSelectedReturningFlightInfo(index + 1);
                                      setReturningFlightPrice(premiumClass?.baseFare);
                                      console.log(index + 1);
                                      console.log(premiumClass?.baseFare);
                                      console.log("Premium class clicked:", premiumClass?.className);
                                    }}
                                >
                                  SELECT
                                </button>
                            ) : (
                                <div className="not-available">Not Available</div>
                            )}
                          </div>
                          <div className="businessclass">
                            <div className="price">
                              {flight.classes.find(cls => cls.className === "Business") ? flight.classes.find(cls => cls.className === "Business").baseFare : null}
                            </div>
                            {flight && flight.classes.find(cls => cls.className === "Business") ? (
                                <div className="naira">NGN</div>
                            ) : null}
                            {flight.classes.find(cls => cls.className === "Business") ? (
                                <button
                                    style={{
                                      background: flight?.classes.find(cls => cls.className === "Business")?.id === selectedReturningSelectedClasses ? "blue" : "transparent",
                                      color: flight?.classes.find(cls => cls.className === "Business")?.id === selectedReturningSelectedClasses ? "white" : "#2D9CDB",
                                    }}
                                    onClick={() => {
                                      const businessClass = flight.classes.find(cls => cls.className === "Business");
                                      handleReturningSelectFlight(businessClass?.id);
                                      setSelectedReturningFlightInfo(index + 1);
                                      setReturningFlightPrice(businessClass?.baseFare);
                                      console.log(index + 1);
                                      console.log(businessClass?.baseFare);
                                      console.log("Business class clicked:", businessClass?.className);


                                    }}
                                >
                                  SELECT
                                </button>
                            ) : (
                                <div className="not-available">Not Available</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
          </div>
          )}

          <div className="continue">
            <button
                className="continuebutton"
                type="button"
                onClick={routePassengerInformation}
            >
              Continue
            </button>
          </div>
        </div>


        {modal ? (
            <>
              <div className="bigmodala">
                <div className="modal-contenta">
                  <div className="flyheadercontainera">
                    <div className="headertext">
                      <h2>Flight Information</h2>
                    </div>
                    <div className="cancelbutton" onClick={cancelDepart} >
                      <button className="cancelbutton" type="button">
                        <img src={cancelmodal} alt="cancelIcon" />
                      </button>
                    </div>
                  </div>
                  <DepartingFlightInformationPageBody showSelectedDepartingFlights = {showSelectedDepartingFlights}   />
                </div>
              </div>
            </>
        ) : (
            <>
            </>
        )}


        {returnModal ? (
            <>
              <div className="bigmodala">
                <div className="modal-contenta">
                  <div className="flyheadercontainera">
                    <div className="headertexta">
                      <h2>Flight Information</h2>
                    </div>
                    <div className="cancelbuttona" onClick={cancelReturn} >
                      <button className="cancelbuttona" type="button">
                        <img src={cancelmodal} alt="cancelIcon" />
                      </button>
                    </div>
                  </div>
                  <ReturningFlightInformationPageBody showSelectedReturningFlights = {showSelectedReturningFlights}  />
                </div>
              </div>
            </>
        ) : (
            <>
            </>
        )}



      </div>
  );
}

export default FlightSelectionOne;