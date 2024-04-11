import './BookingConfirmation.css';
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import airwayAnimPass from "/src/assets/images/airwayanimPass.gif"
import {toast, ToastContainer} from "react-toastify";

const BookingConfirmation = () => {
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [departurePort, setDeparturePort] = useState('');
    const [arrivalPort, setArrivalPort] = useState('');
    const [departureDate, setDepartureDate] = useState('')
    const [arrivalDate, setArrivalDate] = useState('');
    const [PNRCode, setPNRCode] = useState('');
    const { token} = useParams();
    const [bookingConfirmation, setBookingConfirmation] = useState(null);
    const [pnrCodes, setPnrCodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkOutUrl, setCheckOutUrl] = useState('');
    const navigate = useNavigate()
    const [bookingFlightRef, setBookingFlightRef] = useState("");
    const [verificationStatus, setVerificationStatus] = useState('');
    const [reference, setReference] = useState('');



    console.log(token);
    // setLoading(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/v1/booking/booking-confirmation/${token}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                setBookingConfirmation(response.data);
                setBookingFlightRef(response.data.bookingRef); // Set the bookingRef from response.data
                console.log(bookingFlightRef); // Log the bookingRef
            } catch (error) {
                console.error('Error fetching ports:', error);
                setError('Error fetching booking confirmation. Please try again later.');
                const errorMessage =
                    error.response?.data?.message ||
                    "An error occurred in the process. Please try again.";
                toast(errorMessage);
            }
        };

        fetchData();
    }, [bookingFlightRef]);

    // const onClick = () => console.log("clicked");
    const redirectToPayment = async () => {
        try {
            console.log(bookingFlightRef)
            const response = await axios.post(
                `http://localhost:8080/api/v1/payment/initializingpayment/${bookingFlightRef}`,
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
            console.log(bookingConfirmation.bookingFlightRef);
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


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <div className='booking-confirmation-container-book-confirmed'>
            {/*<div className='bbbd-book-confirmed'>*/}
                <div className='booking-header-book-confirmed'>
                    <div className='booking-text-book-confirmed'>Booking Confirmation </div>
                </div>
            {/*</div>*/}


            <div className='booking-hero-container-book-confirmed'>
                <div className='booking-hero-first-book-confirmed'>
                    <div className='booking-hero-first-up-book-confirmed'>
                        <div className='booking-hero-first-up-text-up-book-confirmed'>Dear {bookingConfirmation && bookingConfirmation.userFullName}  </div>
                        <div className='booking-hero-first-up-text-down-book-confirmed'>Your  Reservation has been completed . payment must be made before expiration {bookingConfirmation && bookingConfirmation.expiryDate} / {bookingConfirmation && bookingConfirmation.expiryTime} </div>
                    </div>

                    <div className='booking-hero-first-down-book-confirmed'>
                        <div className='booking-hero-first-down-text-up-book-confirmed'>Sales Office: INTERNET</div>
                        <div className='booking-hero-first-down-text-down-book-confirmed'>USER ; Internet</div>
                    </div>
                </div>
                <div className='booking-hero-second-book-confirmed'>
                    <div className='booking-hero-second-text-up-book-confirmed'>Booking Reference Number</div>
                    <div className='booking-hero-second-text-down-book-confirmed'>{bookingConfirmation&&bookingConfirmation.bookingRef}</div>
                </div>






                <div className='booking-table-one-book-confirmed'>
                    <div  className='table-one-first-book-confirmed'>
                        <div className='booking-table-one-head-book-confirmed'>
                            <div className='booking-table-one-head-text-book-confirmed'>
                                <div className='one-head-1-book-confirmed'>Flight Number</div>
                                <div className='one-head-2-book-confirmed'>Departure port</div>
                                <div className='one-head-3-book-confirmed'>Arrival port</div>
                                <div className='one-head-4-book-confirmed'>Departure Date/Time</div>
                                <div className='one-head-5-book-confirmed'>Arrival Date/Time</div>
                            </div>
                        </div>
                        {bookingConfirmation&& bookingConfirmation.flightDetails.map((flight, index)=>(

                            <div key={index} className='booking-table-one-body-book-confirmed'>
                                <div className='booking-table-one-body-one-book-confirmed'>
                                    <div className='booking-table-one-body-one-text-book-confirmed'>
                                        <div>{flight.flightNo}</div>
                                        <div>{flight.departurePortIata}</div>
                                        <div>{flight.arrivalPortIata}</div>
                                        <div>{flight.departureDate}<br/>{flight.departureTime}</div>
                                        <div>{flight.arrivalDate}<br/>{flight.arrivalTime}</div>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>


                    <div className='table-one-second-book-confirmed'>

                        <div >
                            <div className='table-one-second-top-book-confirmed'>
                                <div className='table-one-second-top-text-book-confirmed'>PNR</div>
                            </div>
                            {bookingConfirmation && bookingConfirmation.pnrcodes && bookingConfirmation.pnrcodes.map((pnr, index) => (
                                <div className='table-one-second-middle-book-confirmed' key={index}>
                                    <div className='table-one-second-middle-text-book-confirmed'>{pnr.pnrcode}</div>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
                <div
                    className='pay-button-book-confirmed'
                    role="button"
                    tabIndex={0}
                    onClick={() => redirectToPayment()}


                    >
                    <div className='pay-button-text-book-confirmed'>Pay</div>
                </div>
                {bookingConfirmation && bookingConfirmation.flightDetails && bookingConfirmation.flightDetails.map((flight, index) => (
                    <div>

                        <div className="bookingcontainer-book-confirmed">
                            <div className='booking-table-two-book-confirmed'>
                                <div key={index} className='booking-table-two-head-book-confirmed'>
                                    <div className='booking-table-two-head-text-book-confirmed'>
                                        <div className='booking-table-two-head-text-first-book-confirmed'>Flight - {index+1}</div>
                                        <div className='booking-table-two-head-text-middle-book-confirmed'>{flight.departurePortCity} ({flight.departurePortIata}) - {flight.arrivalPortCity}  ({flight.arrivalPortIata})</div>
                                        <div className='booking-table-two-head-text-last-book-confirmed'>Flight No : {flight.flightNo}</div>
                                    </div>
                                </div>
                            </div>
                            {flight.passengerList.map((passenger, index) => (

                                <div className='booking-table-two-body-book-confirmed'>

                                    <div key={index}  className='booking-table-two-body-box1-book-confirmed'>
                                        <div className='booking-table-two-body-box1-blue-book-confirmed'>
                                            <div className='booking-table-two-body-box1-blue-text-book-confirmed'>
                                                <div className='blue-text-name-book-confirmed'>Name</div>
                                                <div className='blue-text-surname-book-confirmed'>Surname</div>
                                                <div className='blue-text-title-book-confirmed'>Title</div>
                                                <div className='blue-text-booking-book-confirmed'>Ticket</div>
                                            </div>
                                        </div>
                                        <div className='booking-table-two-body-box1-white-book-confirmed'>
                                            <div className='white-text1-book-confirmed'>{passenger.firstName}</div>
                                            <div className='white-text2-book-confirmed'>{passenger.lastName}</div>
                                            <div className='white-text3-book-confirmed'>{passenger.title}</div>
                                            <div className='white-text4-book-confirmed'></div>
                                        </div>
                                    </div>

                                    <div className='booking-table-two-body-key-value-book-confirmed'>
                                        <div className='booking-table-two-body-key-value-first-book-confirmed'>Seat Number : </div>
                                        <div className='booking-table-two-body-key-value-second-book-confirmed'>Baggage : </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                ))}


            </div>
            <ToastContainer/>
        </div>

    )
}

export default BookingConfirmation;