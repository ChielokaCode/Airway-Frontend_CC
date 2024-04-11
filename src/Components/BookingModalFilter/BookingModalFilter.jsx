import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BookingModalFilter.css';
const BookingModalFilter = ({ isOpen, handleCheckboxChange, closeFilterModal }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        setSelectedFilters([]);
    }, [isOpen]);

    const handleFilterChange = (filter) => {
        handleCheckboxChange(filter);
        closeFilterModal();
    };

    return (
        <div className={`Bfilter-container ${isOpen ? 'open' : ''}`}>
            <div className="Bfilter-inner-container">
                <div className="Bfilter-checkbox">
                    <input
                        type="checkbox"
                        id="dateFilter"
                        name="dateFilter"
                        onChange={() => handleFilterChange('createdAt')}
                        // checked={selectedFilters.includes('Date')}
                    />
                    <label htmlFor="dateFilter">
                        Date
                    </label>
                </div>
                <div className="Bfilter-checkbox">
                    <input
                        type="checkbox"
                        id="refFilter"
                        name="refFilter"
                        onChange={() => handleFilterChange('bookingRef')}
                        // checked={selectedFilters.includes('Booking Reference No')}
                    />
                    <label htmlFor="refFilter">
                        Booking Ref Number
                    </label>
                </div>
                <div className="Bfilter-checkbox">
                    <input
                        type="checkbox"
                        id="flightNoFilter"
                        name="flightNoFilter"
                        onChange={() => handleFilterChange('flightNo')}
                        // checked={selectedFilters.includes('Flight No')}
                    />
                    <label htmlFor="flightNoFilter">
                        Flight Number
                    </label>
                </div>
                <div className="Bfilter-checkbox">
                    <input
                        type="checkbox"
                        id="PNRFilter"
                        name="PNRFilter"
                        onChange={() => handleFilterChange('pnrcode')}
                        // checked={selectedFilters.includes('PNR')}
                    />
                    <label htmlFor="PNRFilter">
PNR
                    </label>
                </div>
                <div className="Bfilter-checkbox">
                    <input
                        type="checkbox"
                        id="passengerCode"
                        name="passengerCode"
                        onChange={() => handleFilterChange('passengerCode')}

                        // checked={selectedFilters.includes('passengerCode')}
                    />
                    <label htmlFor="passengerCode">
                        UserId
                    </label>
                </div>

            </div>
        </div>
    );
};

BookingModalFilter.propTypes = {
    isOpen: PropTypes.bool.isRequired,
     handleCheckboxChange: PropTypes.func.isRequired,
    closeFilterModal: PropTypes.func.isRequired,
};
export default BookingModalFilter

