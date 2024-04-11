import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const FlightModalFilter = ({ isOpen, handleCheckboxChange, closeFilterModal }) => {
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
                    />
                    <label htmlFor="PNRFilter">
                        PNR
                    </label>
                </div>
                <div className="Bfilter-checkbox">
                    <input
                        type="checkbox"
                        id="departureDateFilter"
                        name="departureDateFilter"
                        onChange={() => handleFilterChange('departureDate')}
                    />
                    <label htmlFor="departureDateFilter">
                        Departure Date
                    </label>
                </div> <div className="Bfilter-checkbox">
                <input
                    type="checkbox"
                    id="arrivalDateFilter"
                    name="arrivalDateFilter"
                    onChange={() => handleFilterChange('arrivalDate')}
                />
                <label htmlFor="arrivalDateFilter">
                    Arrival Date
                </label>
            </div> <div className="Bfilter-checkbox">
                <input
                    type="checkbox"
                    id="departurePortFilter"
                    name="departurePortFilter"
                    onChange={() => handleFilterChange('departurePort')}
                />
                <label htmlFor="departurePortFilter">
                    Departure Port
                </label>
            </div> <div className="Bfilter-checkbox">
                <input
                    type="checkbox"
                    id="arrivalPortFilter"
                    name="arrivalPortFilter"
                    onChange={() => handleFilterChange('arrivalPort')}
                />
                <label htmlFor="arrivalPortFilter">
                    Arrival Port
                </label>
            </div>


            </div>
        </div>
    );
};

FlightModalFilter.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    closeFilterModal: PropTypes.func.isRequired,
};
export default FlightModalFilter;

