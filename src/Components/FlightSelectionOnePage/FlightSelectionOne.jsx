import React from 'react'
import "./FlightSelectionOne.css"
function FlightSelectionOne() {
  return (
      <div> <div className="main-airway-body">
        <div className="main-container-header">
          <div className="flightImgAndAirway">
            <img src="src/assets/planeInMotion.svg"/>
            <span className="airwayText">Airway</span>
          </div>


          <div className="flightInfo">
            <img src="src/assets/Group 5.svg"/>
            <div className="flightSelectionStatus">
              <div className="flightSelect">
                <a href="#flight-selection" className="flight-selection">
                  Flight Selection
                </a>
              </div>
              <div className="passInfo">
                <a href="#passenger-info" className="passenger-info">
                  Passenger Info
                </a>
              </div>
              <a href="#Payment" className="payment">
                Payment
              </a>
              <a href="#confirmation" className="confirmation">
                Confirmation
              </a>
            </div>
          </div>

          <div className="homeAboutSign">
            <div className="homeAbout">
              <a href="#home" className="homeHeader">
                Home
              </a>
              <div className="aboutAir">
                <a href="#about" className="aboutUsheader">
                  About us
                </a>
              </div>
            </div>
            <button className="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>


        {/*hero*/}
        <div className="airway-hero-body">

          <div className="searchAndRoute">
            <button className="searchAirway">
              <img src="src/assets/searchIcon.svg"  />
              <span>Search</span>
            </button>
            <div className="routeDatePassengerTrip">
              <div className="airwayRoute">Lagos(LOS) - Abuja(ABJ)</div>
              <div className="datePassengerTrip">
                Fri, 29 Dec - Sat, 06 Jan | 1 Adult, null child, 1 Infant |
                Round Trip
              </div>
            </div>
          </div>

          <div className="priceAirway">
            <div className="totalPrice">TotalPrice</div>
            <div className="price">0 NGN</div>
          </div>
        </div>


        {/*arrival*/}


        <div className="offering-main-div-arrival">
          <div className="departFlightAndImg">
            <img src="src/assets/smallflight.svg"/>
            <span>Arrival Flights</span>
          </div>

          <div className="dateAndPrice-arrival">
            <img src="src/assets/AngleBar.svg"/>
            <div className="datePriceOne">
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Saturday</div>
                <div className="amount">174,405</div>
                <div className="naira">NGN</div>
              </div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Tuesday</div>
                <div className="amount">196,405</div>
                <div className="naira">NGN</div>
              </div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="wednesday">Wednesday</div>
                <div className="amount">200,405</div>
                <div className="naira">NGN</div></div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Friday</div>
                <div className="amount">219,405</div>
                <div className="naira">NGN</div></div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Monday</div>
                <div className="amount">100,405</div>
                <div className="naira">NGN</div></div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Wednesday</div>
                <div className="amount">190,405</div>
                <div className="naira">NGN</div></div>
            </div>
            <img src="src/assets/AngleBar2.svg"/>
          </div>

          <div className="flightDepartureInformation-arrival">
            <div className="numberOfFlights-arrival">Number Of Flight: 2</div>
            <div className="departureFlightOne">
              <div className="firstflightInfo-arrival">
                <div className="flightClassInfo-arrival1">Flight Information</div>
                <div className="firstflightClassBody-arrival1">
                  <div className="flightClass">Economy</div>
                  <div className="flightClass2">Premium</div>
                  <div className="flightClass3">Business</div> </div>
              </div>
              <div className="ArrivalTimeAndStart">
                <div className="takeOfTimeRoute2-departure">
                  <div className="takeOfTimeAbuja">06:30</div>
                  <div className="flightRouteAbuja">Abuja</div>
                </div>
                <img src="src/assets/bigPlane1.svg"/>
                <div className="arrivalTimeRoute2-departure">
                  <div className="arrivaltime">08:30</div>
                  <div className="flightRoute">Lagos</div>
                </div>
              </div>
              <div className="arrivalFlightInfo-arrival1">
                <div className="arrivalFlight-arrival1">
                  <img src="src/assets/small-plane2.svg"/>
                  <span >Arrival</span>
                </div>
                <div className="flightInformationImg-arrival1">
                  <img src="src/assets/flicon.svg"/>
                  <span className="active-flight" >Flight Information</span>
                </div>
              </div>
              <div className="departureFligtPrice">
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure1">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure2">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelectNA-departure"><div className="flightPriceNA-departure3">Not Available</div></div>
              </div>
            </div>
          </div>



          <div className="flightDepartureInformation2-arrival">
            <div className="second-departureFlightOne-arrival">
              <div className="firstflightInfo2-arrival">
                <div className="flightClassInfo-arrival2">Flight Information</div>
                <div className="flightClassBody-arrival2">
                  <div className="flightClass">Economy</div>
                  <div className="flightClass2">Premium</div>
                  <div className="flightClass3">Business</div>
                </div>
              </div>
              <div className="SecondArrivalTimeAndStart">
                <div className="takeOfTimeRoute2-departure">
                  <div className="takeOfTimeAbuja">06:30</div>
                  <div className="flightRouteAbuja">Abuja</div>
                </div>
                <img src="src/assets/bigPlane1.svg"/>
                <div className="arrivalTimeRoute2-departure">
                  <div className="arrivaltime">08:30</div>
                  <div className="flightRoute">Lagos</div>
                </div>
              </div>
              <div className="arrivalFlightInfo">
                <div className="arrivalFlightImg-arrival">
                  <img src="src/assets/arrivalImage2.svg"/>
                  <span className="arrivalFlight">Arrival</span>
                </div>
                <div className="flightInformationImg-arrival2">
                  <img src="src/assets/flicon.svg"/>
                  <span className="active-flight" >Flight Information</span>
                </div>
              </div>

              <div className="departureFligtPrice">
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure1">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure2">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelectNA-departure"><div className="flightPriceNA-departure3">Not Available</div></div>
              </div>
            </div>
          </div>
        </div>

        {/*departure*/}
        <div className="FlightSelectionOfferingBody">
          <div className="departing-div">
            <img src="src/assets/smallflight.svg"/>
            <span>Departing Flights</span>
          </div>
          <div className="dateAndPrice">
            <img src="src/assets/AngleBar.svg"/>
            <div className="datePriceOne">
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Saturday</div>
                <div className="amount">174,405</div>
                <div className="naira">NGN</div>
              </div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Tuesday</div>
                <div className="amount">196,405</div>
                <div className="naira">NGN</div>
              </div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Wednesday</div>
                <div className="amount">200,405</div>
                <div className="naira">NGN</div></div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Friday</div>
                <div className="amount">219,405</div>
                <div className="naira">NGN</div></div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Monday</div>
                <div className="amount">100,405</div>
                <div className="naira">NGN</div></div>
              <div className="box">
                <div className="date">20/12/2024</div>
                <div className="day">Wednesday</div>
                <div className="amount">190,405</div>
                <div className="naira">NGN</div></div>
            </div>
            <img src="src/assets/AngleBar2.svg"/>
          </div>

          <div className="flightDepartureInformation1">
            <div className="numberOfFlights-departing">Number Of Flight: 2</div>
            <div className="first-departureFlightOne">
              <div className="firstflightInfo-departing">
                <div className="flightClassInfo">Flight Information</div>
                <div className="flightClassBody">
                  <div className="flightClass">Economy</div>
                  <div className="flightClass2">Premium</div>
                  <div className="flightClass3">Business</div> </div>
              </div>

              <div className="timeOfStartAndArrive">
                <div className="takeOfTimeRoute2-departure">
                  <div className="takeOfTimeAbuja">06:30</div>
                  <div className="flightRouteAbuja">Lagos</div>
                </div>
                <img src="src/assets/bigPlane2.svg"/>
                <div className="arrivalTimeRoute2-departure">
                  <div className="arrivaltime">08:30</div>
                  <div className="flightRoute">Abuja</div>
                </div>
              </div>
              <div className="arrivalFlightInformation-departureOne">
                <div className="arrivalFlightImg-departingOne">
                  <img src="src/assets/small-plane.svg"/>
                  <span className="arrivalFlight">Departure</span>
                </div>
                <div className="flightInformationImg-departing">
                  <img src="src/assets/flicon.svg"/>
                  <span>Flight Information</span>
                </div>
              </div>

              <div className="departureFligtPrice">
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure1">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure2">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelectNA-departure"><div className="flightPriceNA-departure3">Not Available</div></div>
              </div>

            </div>
          </div>



          <div className="ArrivalflightDepartureInformation-arrival">
            <div className="second-departureFlightOne-arrival">
              <div className="firstflightInfo2-arrival">
                <div className="flightClassInfo-arrival2">Flight Information</div>
                <div className="flightClassBody-arrival2">
                  <div className="flightClass">Economy</div>
                  <div className="flightClass2">Premium</div>
                  <div className="flightClass3">Business</div>
                </div>
              </div>
              <div className="SecondArrivalTimeAndStart">
                <div className="takeOfTimeRoute2-departure">
                  <div className="takeOfTimeAbuja">06:30</div>
                  <div className="flightRouteAbuja">Abuja</div>
                </div>
                <img src="src/assets/bigPlane2.svg"/>
                <div className="arrivalTimeRoute2-departure">
                  <div className="arrivaltime">08:30</div>
                  <div className="flightRoute">Lagos</div>
                </div>
              </div>
              <div className="arrivalFlightInfo">
                <div className="arrivalFlightImg-arrival">
                  <img src="src/assets/arrivalImage.svg"/>
                  <span className="arrivalFlight">Departure</span>
                </div>
                <div className="flightInformationImg-arrival2">
                  <img src="src/assets/flicon.svg"/>
                  <span className="active-flight" >Flight Information</span>
                </div>
              </div>

              <div className="departureFligtPrice">
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure1">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelect-departure"><div className="flightPrice-departure2">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
                <div className="priceFlightSelectNA-departure"><div className="flightPriceNA-departure3">Not Available</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FlightSelectionOne