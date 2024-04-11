import React, {useEffect} from 'react';
import './ModalPageTrip.css';
import AeroplaneUp from './airplaneUpTrip.svg'
import AeroplaneDown from './aeroplaneDown.svg'
import {useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif"
import {toast} from "react-toastify";


const ModalPageTrip = ({ isOpen, onClose, token }) => {
  const [tripSummary, setTripSummary] = useState(null);
  const [error, setError] = useState(null);
  const [checkOutUrl, setCheckOutUrl] = useState('');
  const navigate = useNavigate()
  const [bookingFlightRef, setBookingFlightRef] = useState("");
  const [verificationStatus, setVerificationStatus] = useState('');
  const [reference, setReference] = useState('');
  const bookingRef= tripSummary?.bookingRef;
  const [loading, setLoading] = useState(false);





  if (!isOpen) return null;
  useEffect(() => {
    const fetchTripSummary = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/booking/trip-summary/${token}`);
        setTripSummary(response.data);
        console.log(token)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching trip summary:', error);
      }
      setLoading(false);
    };
    if (isOpen && token) {
      fetchTripSummary();
    }
  }, [isOpen, token]);

  const redirectToPayment = async () => {
    try {
      console.log(bookingFlightRef)
      const response = await axios.post(
          `http://localhost:8080/api/v1/payment/initializingpayment/${bookingRef}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
      );
      console.log("************");
      console.log("Payment initialization response:", response.data);
      console.log( response.data.data);
      console.log("************");
      setReference(response.data.data.reference); // Assuming 'reference' is the correct field in your response data
      console.log(reference)
      setCheckOutUrl(response.data.data.authorization_url);

      console.log(checkOutUrl);
      window.location.href = response.data.data.authorization_url; // Navigate to the checkout URL
      console.log(tripSummary.bookingRef);
      console.log(response.data);
      console.log(reference)
    } catch (error) {

      console.log("************");
      console.log("Payment initialization error:", error);
      console.log("************");
      const errorMessage =
          error.response?.data?.message ||
          "An error occurred in the process. Please try again.";

      toast.error(errorMessage);
    }
  }
  useEffect(() => {
    if (reference) {
      localStorage.setItem('reference', reference);
      console.log("......"+reference)
    }
  }, [reference]);

  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(':');

    const hoursNum = parseInt(hours, 10);
    const minutesNum = parseInt(minutes, 10);

    const period = hoursNum >= 12 ? 'PM' : 'AM';

    const hours12 = hoursNum % 12 || 12;

    const formattedMinutes = minutesNum < 10 ? `0${minutesNum}` : minutesNum;

    const time12 = `${hours12}:${formattedMinutes} ${period}`;

    return time12;
  }

  const time24 = '14:30';
  const time12 = convertTo12HourFormat(time24);
  console.log(time12); // Output: 2:30 PM

  if (!tripSummary || !tripSummary.flightDetails) {
    return <div>Loading...</div>;
  }


  const padWithZero = (num) => {
    return num.toString().padStart(2, '0');
  };

  const formattedDate1 = tripSummary.flightDetails[0]?.departureDate ? new Date(tripSummary.flightDetails[0].departureDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').map(padWithZero).join('/') : '';
  const formattedDate2 = tripSummary.flightDetails[0]?.arrivalDate ? new Date(tripSummary.flightDetails[0].arrivalDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').map(padWithZero).join('/') : '';
  const formattedDate3 = tripSummary.flightDetails[1]?.departureDate ? new Date(tripSummary.flightDetails[1].departureDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').map(padWithZero).join('/') : '';
  const formattedDate4 = tripSummary.flightDetails[1]?.arrivalDate ? new Date(tripSummary.flightDetails[1].arrivalDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').map(padWithZero).join('/') : '';

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-tripT">
      <div className="modal-content-trip" onClick={(e) => e.stopPropagation()}>
        <div className="blueplain-content-trip">
        <h3>Your Trip Summary</h3>
        <span className="close-trip" onClick={onClose}>&times;</span>
        </div>
        <div className="trip-details-container-trip">
          <div className="departurespace-trip">
            <img src={AeroplaneUp} alt="Departure Plane" />
            <span className= "Trip-departure-text-trip">Departure</span>
            <span className= "Trip-Book-Summarry-trip">Booking Reference Number</span>
            </div>
              <div className="singleReference-trip">
                <span className="bookingRef-trip">{tripSummary?.bookingRef}</span>
              </div>
              {tripSummary?.flightDetails [0] &&(
              <div className="departure-info-trip">
                <div className='departure-info-item-trip'>
                      <div className="departingTrip-trip">Departing</div>
                  <div className="departingTripCity-trip">{tripSummary.flightDetails[0].departurePortCity}</div>
                  <div className="departingTripDate-trip">{
                    formattedDate1
                  }{" "} - {convertTo12HourFormat(tripSummary.flightDetails[0].departureTime)}</div>
                </div>
                <div className="realArrivalSeparator-trip" />

                <div className='departure-info-item-trip'>
                  <div className="departingTrip-trip">Arrival</div>
                  <div className="departingTripCity-trip">{tripSummary.flightDetails[0].arrivalPortCity}</div>
                  <div className="departingTripDate-trip">{formattedDate2} {" "}- {convertTo12HourFormat(tripSummary.flightDetails[0].arrivalTime)}</div>
                </div>
              </div>
              )}
          </div>
            {tripSummary?.flightDetails [0] &&(
          <div className="realArrivalSeparator-trip" />
           )}
           {tripSummary?.flightDetails [0] &&(
            <div className="realArrival-trip">
            <span className="TripflightNo-trip">Flight {tripSummary.flightDetails[0].flightNo}</span>
            <span className = "TripCabin-trip">Cabin  {tripSummary.flightDetails[0].className}</span>
          </div>
            )}
          {tripSummary?.flightDetails [1] &&(
            <div className="planeArrival-trip">
            <img src={AeroplaneDown} alt="Arrival Plane" />
            <span className= "Trip-arrival-text-trip">Arrival</span>
          </div>
          )}
           {tripSummary?.flightDetails [1] &&(
              <div className='departure-info-item-trip'>
                <div className="departingTrip-trip">Departing</div>
                <div className="departingTripCity-trip">{tripSummary.flightDetails[1].departurePortCity}</div>
                <div className="departingTripDate-trip">{formattedDate3}{" "} - {convertTo12HourFormat(tripSummary.flightDetails[1].departureTime)}</div>
              </div>
            )}
        {tripSummary?.flightDetails [1] &&(
            <div className="newArrivalSeparator-trip" />
            )}
        {tripSummary?.flightDetails [1] &&(
            <div className='departure-info-item-trip'>
              <div className="departingTrip-trip">Arrival</div>
              <div className="departingTripCity-trip">{tripSummary.flightDetails[1].arrivalPortCity}</div>
              <div className="departingTripDate-trip">{formattedDate4}{" "} - {convertTo12HourFormat(tripSummary.flightDetails[1].arrivalTime)}</div>
          </div>
            )}
          <div className="latestArrivalSeparator-trip" />
            {tripSummary?.flightDetails [1] &&(
            <div className="realArrival-trip">
              <span className="TripflightNo-trip">Flight  {tripSummary.flightDetails[1].flightNo}</span>
              <span className = "TripCabin-trip">Cabin  {tripSummary.flightDetails[1].className}</span>
            </div>
            )}
        <div className="grid-container-modalsum-trip">
          <div className="grid-item-modalsum-trip">
            <span className="fares-trip">Base fare</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="faresA-trip">{tripSummary?.baseFare} NGN</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className= "fares-trip">Total Tax Amount</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="faresA-trip">{tripSummary?.taxAmount} NGN</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="fares-trip">Total Surcharge</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="faresA">{tripSummary?.surCharge} NGN</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="fares-trip">Service Charge</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="faresA-trip">{tripSummary?.serviceCharge} NGN</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="Tfares-trip">TOTAL</span>
          </div>
          <div className="grid-item-modalsum-trip">
            <span className="TfaresA-trip">{tripSummary?.totalFare} NGN</span>
          </div>
        </div>
        <button className="tripmodal-continue-button-trip" type="button" onClick={() => redirectToPayment()}>
          Continue To Payment
        </button>
        </div>
      </div>

    
  );
};

export default ModalPageTrip;
