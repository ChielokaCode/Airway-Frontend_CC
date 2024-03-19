import React from 'react'
import './Confirmation.css'
import progressBarB from "/src/assets/progress-bar5.svg"
import airwayPlaneLogo from "/src/assets/planeInMotion.svg"
import confirmUpLogo from "/src/assets/confirmUp.svg"
import locationPin from  "/src/assets/location-pin.svg"
import walletLogo from "/src/assets/wallet.svg"
import shoppingBag from "/src/assets/shopping-bag.svg"



function Confirmation() {
  return (
      <div className="full-page">

        {/*header*/}
        <div className="main-airway-body">
          <div className="main-container-header">
            <div className="flightImgAndAirway">
            <img src={airwayPlaneLogo} />
              <span className="airwayText">Airway</span>
            </div>
            <div className="flightInfo">
            <img src={progressBarB} />
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

{/*break*/}




        <div className="confirmation-hero-container">
          <div className="hero-image">
           <img src={confirmUpLogo} />

          </div>
          <div className="success-hero-content-frame">
            <div className="success-hero-header">
              <span className="success-text">Success!!!</span>
            </div>
            <div className="confirmation-hero-number">
              <h2 className="confirmation-hero-number">Your Flight #182828282 has been Confirmed!</h2>
            </div>

              <span className="confirmation-hero-content">
                Lorem ipsum dolor sit amet consectetur. Ac mollis enim lacus tortor diam luctus egestas mattis. Lacus tempus lorem eget arcu in nibh urna velit. Lectus diam consectetur eget
 sed gravida amet. Morbi at diam fusce blandit feugiat libero.
              </span>

          </div>
        </div>
        <div className="confirmation-grid-card-frame">
          <div className="confirmation-card-shipping-layout">
            <div className="confirmation-shipping-inner-frame">
              <div className="shipping-icon-frame">

              <img className="location-icon-img" src={locationPin} />

                  <span className='shipping-text'>Shipping</span>
              </div>
              <div className="shipping-text-field-frame">
                <div className="shipping-details-customer-name-frame">
                  <span>Chioma Aniekwu</span>
                </div>
                <div className='shipping-details-location-frame'>
                  <span>Sangotedo</span>
                </div>
                <div className="shipping-details-city-frame">
                  <span>Lekki-Epe Expressway</span>
                </div>
                <div className="shipping-details-phone-number-frame">
                  <span>0809837377373</span>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmation-card-billing-detail-layout">

                  <div className="billng-text-frame">
                    <img src={walletLogo} />
                  <span className="billing-text">Billing Details</span>
                 </div>
            <div className="confirmation-billing-details">
              <div className="billing-text-field-details-frame">
                <div className="billing-details-customer-name">
                  <span>Chioma Aniekwu</span>
                </div>
                <div className='billing-details-location-text'>
                  <span>Sangotedo</span>
                </div>
                <div className="billing-details-city-text">
                  <span>Lekki-Epe Expressway</span>
                </div>
                <div className="billing-detail-phone-number">
                  <span>0809837377373</span>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmation-card-shipping-method-frame">
            <div className="confirmation-shipping-method-inner-frame">
              <div className="shipping-method-icon-frame">
              <img className="shopping-bag-icon" src={shoppingBag} />
                  <span>Shipping method</span>
              </div>
              <div className="shipping-method-text-field">
                <div className="shipping-method-text-name">
                  <span>Chioma Aniekwu</span>
                </div>
                <div className="shipping-method-text-location">
                  <span>Sangotedo</span>
                </div>
                <div className="shipping-method-text-city">
                  <span>Lekki-Epe Expressway</span>
                </div>
                <div className="shipping-method-text-phone-number">
                  <span>0809837377373</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Confirmation