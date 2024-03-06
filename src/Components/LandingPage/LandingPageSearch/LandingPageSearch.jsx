import React from 'react';
import './LandingPageSearch.css';
import {Link} from "react-router-dom";
const Search = () => {
  return (
      <div className="backgroundd-landingP">
        <div className="searchcs-landingP">
          <div className="booking-header-landingP">
            <button className="btnsty-landingP"><img src="src/Components/LandingPage/images/plane 1.png" alt="Flights"
                                            className="icon-landingP"/> Flights
            </button>
            <button className="btnsty-landingP"><Link className="link-landing" to="/signin/signin"><img src="src/Components/LandingPage/images/Vector.png" alt="Login"
                                                                      className="icon-landingP"/> Log In</Link>
            </button>
          </div>
          <div className="search-container-landingP">
            {/* Search form content */}
            <form className="search-form-landingP">
              <div className="formimg-landingP"><img src="src/Components/LandingPage/images/Polygon 1.png"/></div>
              <div className="trip-type-landingP">
                <input type="radio" id="one-way" name="trip-type" checked/>
                <label htmlFor="one-way">One Way</label>
                <input type="radio" id="round-trip" name="trip-type" />
                <label htmlFor="round-trip">Round Trip</label>
              </div>
              <div className="form-row-landingP">
                <div className="input-groupp-landingP">
                  <label htmlFor="from">From:</label>
                  <input type="text" id="from" placeholder="Departure"/>
                </div>
                <div className="input-groupp-landingP">
                  <label htmlFor="to">To:</label>
                  <input type="text" id="to" placeholder="Destination"/>
                </div>
              </div>
              <div className="form-row-landingP">
                <div className="input-groupp-landingP">
                  <label htmlFor="departure">Departure Date</label>
                  <input type="date" id="departure"/>
                </div>
                <div className="input-groupp-landingP">
                  <label htmlFor="return">Arrival Date</label>
                  <input type="date" id="return"/>
                </div>
              </div>
              <div className="form-row-landingP">
                <div className="input-group-landingP">
                  <label htmlFor="child">Child</label>
                  <select id="child">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="input-group-landingP">
                  <label htmlFor="adult">Adult</label>
                  <select id="adult">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div className="input-group-landingP">
                  <label htmlFor="infant">Infant</label>
                  <select id="infant">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>
              <button className="search-button-landingP">Search Flights</button>
            </form>
          </div>
        </div>
      </div>
  );
}
export default Search;  