import React from 'react'
import "./FlightSelectionTwo.css"
function FlightSelectionTwo() {
  return (

      <>
      {/*header*/}
  <div className="main-airway-body">
    <div className="main-container-header">
      <div className="flightImgAndAirway">
        <img src="src/assets/planeInMotion.svg"/>
        <span className="airwayText">Airway</span>
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

      {/*depart offering*/}
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


  <div className="secPage-departing-div">
    <img src="src/assets/smallflight.svg"/>
    <span>Departing Flights</span>
  </div>
  <div className="SecPage-flightDepartureInformation1">
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
        <div className="priceFlightSelect-departure"><div className="flightPrice-departure1">104,405</div><div className="naira">NGN </div><button className="selectButton1">SELECTED</button></div>
        <div className="priceFlightSelect-departure"><div className="flightPrice-departure2">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
        <div className="priceFlightSelectNA-departure"><div className="flightPriceNA-departure3">Not Available</div></div>
      </div>
    </div>


    <div className="arrivalFlightAndImg">
      <img src="src/assets/smallflight.svg"/>
      <span>Arrival Flights</span>
    </div>
    <div className="secPageflightArrivalInformation">
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
          <div className="priceFlightSelect-departure"><div className="flightPrice-departure1">104,405</div><div className="naira">NGN </div><button className="selectButton2">SELECTED</button></div>
          <div className="priceFlightSelect-departure"><div className="flightPrice-departure2">104,405</div><div className="naira">NGN </div><button className="selectButton">SELECT</button></div>
          <div className="priceFlightSelectNA-departure"><div className="flightPriceNA-departure3">Not Available</div></div>
        </div>
      </div>
    </div>

    <button className="Continue">
      Continue As Guest
    </button>
  </div>
      </>
  )
}

export default FlightSelectionTwo