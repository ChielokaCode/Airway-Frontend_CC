import React, {useEffect, useState, useRef} from 'react'
import './Confirmation.css'
import progressBarB from "/src/assets/progress-bar5.svg"
import airwayPlaneLogo from "/src/assets/planeInMotion.svg"
import confirmUpLogo from "/src/assets/confirmUp.svg"
import locationPin from  "/src/assets/location-pin.svg"
import walletLogo from "/src/assets/wallet.svg"
import shoppingBag from "/src/assets/shopping-bag.svg"
import axios from "axios";

import {useNavigate, useParams} from 'react-router-dom'
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Confirmation() {
  //const [reference, setReference] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  const reference = urlParams.get('reference');
  const prevReference = useRef(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
              `http://localhost:8080/api/v1/payment/verify-payment/${reference}`,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              }
          );
          console.log('Response:', response.data);
          // Handle the response as needed
        } catch (error) {
          setError(error);
          console.error('Error verifying transaction:', error);
          const errorMessage =
              error.response?.data?.message ||
              "An error occurred the process. Please try again.";
          toast.error(errorMessage);

        } finally {
          setLoading(false);
        }
      };
 if (reference&& reference !== prevReference.current) {
   prevReference.current = reference;
   fetchData();
 }
  }, []);

  if (loading) {
    return <img className="loading-textQ-confirm" src={airwayAnimationPass} alt="Loading animation"/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
      <div className="full-page">
        <div className="main-airway-body-confirm">
          <div className="main-container-header-confirm">
            <div className="flightImgAndAirway-confirm">
            <img src={airwayPlaneLogo} />
              <span className="airwayText-confirm">Airway</span>
            </div>
            <div className="flightInfo-confirm">
            <img src={progressBarB} />
              <div className="flightSelectionStatus-confirm">
                <div className="flightSelect-confirm">
                  <a href="#flight-selection" className="flight-selection-confirm">
                    Flight Selection
                  </a>
                </div>
                <div className="passInfo-confirm">
                  <a href="#passenger-info" className="passenger-info-confirm">
                    Passenger Info
                  </a>
                </div>
                <a href="#Payment" className="payment-confirm">
                  Payment
                </a>
                <a href="#confirmation" className="confirmation-confirm">
                  Confirmation
                </a>
              </div>
            </div>

            <div className="homeAboutSign-confirm">
              <div className="homeAbout-confirm">
                <a href="#home" className="homeHeader-confirm">
                  Home
                </a>
                <div className="aboutAir-confirm">
                  <a href="#about" className="aboutUsheader-confirm">
                    About us
                  </a>
                </div>
              </div>
              <button className="signUp-confirm">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="confirmation-hero-container-confirm">
          <div className="hero-image-confirm">
           <img src={confirmUpLogo} />

          </div>
          <div className="success-hero-content-frame-confirm">
            <div className="success-hero-header-confirm">
              <span className="success-text-confirm">Success!!!</span>
            </div>
            <div className="confirmation-hero-number-confirm">
              <h2 className="confirmation-hero-number-confirm">Your Flight has been Confirmed!</h2>
            </div>

              <span className="confirmation-hero-content-confirm">
             Please check your Email for your booking details..
              </span>

          </div>
        </div>
        <div className="confirmation-grid-card-frame-confirm">
          <div className="confirmation-card-shipping-layout-confirm">
            <div className="confirmation-shipping-inner-frame-confirm">
              <div className="shipping-icon-frame-confirm">

              <img className="location-icon-img-confirm" src={locationPin} />

                  <span className='shipping-text-confirm'>Shipping</span>
              </div>
              <div className="shipping-text-field-frame-confirm">
                <div className="shipping-details-customer-name-frame-confirm">
                  <span>Chioma Aniekwu</span>
                </div>
                <div className='shipping-details-location-frame-confirm'>
                  <span>Sangotedo</span>
                </div>
                <div className="shipping-details-city-frame-confirm">
                  <span>Lekki-Epe Expressway</span>
                </div>
                <div className="shipping-details-phone-number-frame-confirm">
                  <span>0809837377373</span>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmation-card-billing-detail-layout-confirm">

                  <div className="billng-text-frame-confirm">
                    <img src={walletLogo} />
                  <span className="billing-text-confirm">Billing Details</span>
                 </div>
            <div className="confirmation-billing-details-confirm">
              <div className="billing-text-field-details-frame-confirm">
                <div className="billing-details-customer-name-confirm">
                  <span>Chioma Aniekwu</span>
                </div>
                <div className='billing-details-location-text-confirm'>
                  <span>Sangotedo</span>
                </div>
                <div className="billing-details-city-text-confirm">
                  <span>Lekki-Epe Expressway</span>
                </div>
                <div className="billing-detail-phone-number-confirm">
                  <span>0809837377373</span>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmation-card-shipping-method-frame-confirm">
            <div className="confirmation-shipping-method-inner-frame-confirm">
              <div className="shipping-method-icon-frame-confirm">
              <img className="shopping-bag-icon-confirm" src={shoppingBag} />
                  <span>Shipping method</span>
              </div>
              <div className="shipping-method-text-field-confirm">
                <div className="shipping-method-text-name-confirm">
                  <span>Chioma Aniekwu</span>
                </div>
                <div className="shipping-method-text-location-confirm">
                  <span>Sangotedo</span>
                </div>
                <div className="shipping-method-text-city-confirm">
                  <span>Lekki-Epe Expressway</span>
                </div>
                <div className="shipping-method-text-phone-number-confirm">
                  <span>0809837377373</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
  )
}

export default Confirmation