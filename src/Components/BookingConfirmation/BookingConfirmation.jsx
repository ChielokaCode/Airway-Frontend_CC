import './BookingConfirmation.css';

const BookingConfirmation = () => {

    const onClick = () => console.log("clicked");
    return (
        <div className='booking-confirmation-container'>
            <div className='booking-header'>
                <div className='booking-text'>Booking Confirmation</div>
            </div>
            <div className='booking-hero-container'>
                <div className='booking-hero-first'>
                    <div className='booking-hero-first-up'>
                        <div className='booking-hero-first-up-text-up'>Dear Chioma Anaziekwu </div>
                        <div className='booking-hero-first-up-text-down'>Your  Reservation has been completed . payment must be mde before expiration 25/02/2024  09:30</div>
                    </div>
                    <div className='booking-hero-first-down'>
                        <div className='booking-hero-first-down-text-up'>Sales Office: INTERNET</div>
                        <div className='booking-hero-first-down-text-down'>USER ; Internet</div>
                    </div>
                </div>
                <div className='booking-hero-second'>
                    <div className='booking-hero-second-text-up'>Booking Reference Number</div>
                    <div className='booking-hero-second-text-down'>XYZ456</div>
                </div>
            </div>
            <div className='booking-table-one'>
                <div className='table-one-first'>
                    <div className='booking-table-one-head'>
                        <div className='booking-table-one-head-text'>
                            <div className='one-head-1'>Flight Number</div>
                            <div className='one-head-2'>Departure port</div>
                            <div className='one-head-3'>Arrival port</div>
                            <div className='one-head-4'>Departure Date/Time</div>
                            <div className='one-head-5'>Arrival Date/Time</div>
                        </div>
                    </div>
                    <div className='booking-table-one-body'>
                        <div className='booking-table-one-body-one'>
                            <div className='booking-table-one-body-one-text'>
                                <div>PYUE423</div>
                                <div>LOS</div>
                                <div>ABV</div>
                                <div>2/02/2024<br/>2:30pm</div>
                                <div>2/02/2024<br/>3:40pm</div>
                            </div>
                        </div>
                        <div className='booking-table-one-body-two'>
                            <div className='booking-table-one-body-two-text'>
                                <div className='two-body-1'>24AST9</div>
                                <div>ABV</div>
                                <div>LOS</div>
                                <div>30/3/2024<br/>3:30pm</div>
                                <div>31/3/2024<br/>5:40pm</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='table-one-second'>
                    <div className='table-one-second-top'>
                        <div className='table-one-second-top-text'>PNR</div>
                    </div>
                    <div className='table-one-second-middle'>
                        <div className='table-one-second-middle-text'>PNJ2029</div>
                    </div>
                    <div className='table-one-second-bottom'>
                        <div className='table-one-second-bottom-text'>24AST9</div>
                    </div>

                </div>
            </div>
            <div
                className='pay-button'
                role="button"
                tabIndex={0}
                onClick={onClick}

            >
                <div className='pay-button-text'>Pay</div>
            </div>

            <div className='booking-table-two'>
                <div className='booking-table-two-head'>
                    <div className='booking-table-two-head-text'>
                        <div className='booking-table-two-head-text-first'>Flight-1</div>
                        <div className='booking-table-two-head-text-middle'>LAGOS (LAG) -ABUJA (ABJ)</div>
                        <div className='booking-table-two-head-text-last'>Flight No : PNJ2029</div>
                    </div>
                </div>
                <div className='booking-table-two-body'>
                    <div className='booking-table-two-body-box1'>
                        <div className='booking-table-two-body-box1-blue'>
                            <div className='booking-table-two-body-box1-blue-text'>
                                <div className='blue-text-name'>Name</div>
                                <div className='blue-text-surname'>Surname</div>
                                <div className='blue-text-title'>Title</div>
                                <div className='blue-text-booking'>Ticket</div>
                            </div>
                        </div>
                        <div className='booking-table-two-body-box1-white'>
                            <div className='white-text1'>Chioma</div>
                            <div className='white-text2'>Anaziekwu</div>
                            <div className='white-text3'>Miss</div>
                            <div className='white-text4'>84848484848</div>
                        </div>
                    </div>
                    <div className='booking-table-two-body-key-value'>
                        <div className='booking-table-two-body-key-value-first'>Seat Number : 4E</div>
                        <div className='booking-table-two-body-key-value-second'>Baggage : 15kg</div>
                    </div>
                </div>
            </div>
            <div className='booking-table-three'>
                <div className='booking-table-three-head'>
                    <div className='booking-table-three-head-text'>
                        <div className='booking-table-three-head-text-first'>Flight-2</div>
                        <div className='booking-table-three-head-text-middle'>ABUJA (ABV)-LAGOS (LOS)</div>
                        <div className='booking-table-three-head-text-last'>Flight No : 24AST9</div>
                    </div>
                </div>
                <div className='booking-table-three-body'>
                    <div className='booking-table-three-body-box1'>
                        <div className='booking-table-three-body-box1-blue'>
                            <div className='booking-table-three-body-box1-blue-text'>
                                <div className='blue-text-name'>Name</div>
                                <div className='blue-text-surname'>Surname</div>
                                <div className='blue-text-title'>Title</div>
                                <div className='blue-text-booking'>Ticket</div>
                            </div>
                        </div>
                        <div className='booking-table-three-body-box1-white'>
                            <div className='white-text1'>Chioma</div>
                            <div className='white-text2'>Anaziekwu</div>
                            <div className='white-text3'>Miss</div>
                            <div className='white-text4'>84848484848</div>
                        </div>
                    </div>
                    <div className='booking-table-three-body-key-value'>
                        <div className='booking-table-three-body-key-value-first'>Seat Number : 4E</div>
                        <div className='booking-table-three-body-key-value-second'>Baggage : 15kg</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingConfirmation;