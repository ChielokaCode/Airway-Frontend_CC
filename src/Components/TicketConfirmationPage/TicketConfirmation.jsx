
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

const TicketConfirmation = () => {
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [departurePort, setDeparturePort] = useState('');
    const [arrivalPort, setArrivalPort] = useState('');
    const [departureDate, setDepartureDate] = useState('')
    const [arrivalDate, setArrivalDate] = useState('');
    const [bookingRef, setBookingRef] = useState('');
    const [PNRCode, setPNRCode] = useState('');
    const { token} = useParams();
    const [bookingConfirmation, setBookingConfirmation] = useState(null);
    const [pnrCodes, setPnrCodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    console.log(token);
    useEffect(() => {
        const fetchData = async () => {
            try {    const response = await axios.get(
                `http://localhost:8080/api/v1/booking/ticket-confirmation/${token}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
                setBookingConfirmation(response.data);
                setLoading(false);
                console.log(response.data);
                console.log("Booking confirmation data:", response.data);
            }catch (error)  {
                console.error('Error fetching ports:', error);
                setError('Error fetching ticket confirmation. Please try again later.');
                const errorMessage =
                    error.response?.data?.message ||
                    "An error occurred in the process. Please try again.";
                toast.error(errorMessage);

                setLoading(false);
            }

        };
        fetchData();
    }, []);

    const onClick = () => console.log("clicked");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!bookingConfirmation) {
        return <div>No Booking confirmation found.</div>;
    }


    return (
        <div className='booking-confirmation-container-book-confirmed'>
            <div className='bbbd-book-confirmed'>
                <div className='booking-header-book-confirmed'>
                    <div className='booking-text-book-confirmed'>Ticket Confirmation </div>
                </div>
            </div>


            <div className='booking-hero-container-book-confirmed'>
                <div className='booking-hero-first-book-confirmed'>
                    <div className='booking-hero-first-down-book-confirmed'>
                        <div className='booking-hero-first-up-text-upp-book-confirmed'>Dear {bookingConfirmation && bookingConfirmation.userFullName}  </div>
                        <div className='booking-hero-first-up-text-downn-book-confirmed'>Your  Reservation has been Ticketed </div>
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
                                <div className='booking-table-one-body-book-confirmed' key={index}>
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
                                {bookingConfirmation && bookingConfirmation.pnrcode && bookingConfirmation.pnrcode.map((pnr, index) => (
                                    <div className='table-one-second-middle-book-confirmed' key={index}>
                                    <div className='table-one-second-middle-text-book-confirmed'>{pnr.pnrcode}</div>
                                </div>
                                    ))}
                            </div>
                    </div>



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
                                            <div className='white-text3-book-confirmed'>{passenger.ticketNo}</div>
                                            <div className='white-text4-book-confirmed'></div>
                                        </div>
                                    </div>

                                    <div className='booking-table-two-body-key-value-book-confirmed'>
                                        <div className='booking-table-two-body-key-value-first-book-confirmed'>Seat Number : {passenger.seatNo}</div>
                                        <div className='booking-table-two-body-key-value-second-book-confirmed'>Baggage :{passenger.baggageAllowance} </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TicketConfirmation;