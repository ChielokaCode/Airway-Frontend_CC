import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ModalFilter.css';

const ModalFilter = ({ isOpen, handleCheckboxChange, closeFilterModal }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        setSelectedFilters([]);
    }, [isOpen]);

    const handleFilterChange = (filter) => {
        handleCheckboxChange(filter);
        closeFilterModal();
    };

    return (
        <div className={`filter-container ${isOpen ? 'open' : ''}`}>
            <div className="filter-inner-container">
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="dateFilter"
                        onChange={() => handleFilterChange('Date')}
                        checked={selectedFilters.includes('Date')}
                    />
                    <label htmlFor="dateFilter">
                        Date
                    </label>
                </div>
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="refFilter"
                        onChange={() => handleFilterChange('Booking Reference No')}
                        checked={selectedFilters.includes('Booking Reference No')}
                    />
                    <label htmlFor="refFilter">
                        Booking Reference No
                    </label>
                </div>
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="flightNoFilter"
                        onChange={() => handleFilterChange('Flight No')}
                        checked={selectedFilters.includes('Flight No')}
                    />
                    <label htmlFor="flightNoFilter">
                        Flight No
                    </label>
                </div>
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="PNRFilter"
                        onChange={() => handleFilterChange('PNR')}
                        checked={selectedFilters.includes('PNR')}
                    />
                    <label htmlFor="PNRFilter">
                        PNR
                    </label>
                </div>
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="departureDateFilter"
                        onChange={() => handleFilterChange('Departure Date')}
                        checked={selectedFilters.includes('Departure Date')}
                    />
                    <label htmlFor="departureDateFilter">
                        Flight No
                    </label>
                </div>
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="arrivalDateilter"
                        onChange={() => handleFilterChange('Arrival Date')}
                        checked={selectedFilters.includes('Arrival Date')}
                    />
                    <label htmlFor="arrivalDateilter">
                        Arrival Date
                    </label>
                </div>
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="departurePortFilter"
                        onChange={() => handleFilterChange('Departure Port')}
                        checked={selectedFilters.includes('Departure Port')}
                    />
                    <label htmlFor="departurePortFilter">
                        Departure Port
                    </label>
                </div>
                <div className="filter-checkbox">
                    <input
                        type="checkbox"
                        id="arrivalPortFilter"
                        onChange={() => handleFilterChange('Arrival Port')}
                        checked={selectedFilters.includes('Arrival Port')}
                    />
                    <label htmlFor="arrivalPortFilter">
                        Arrival Port
                    </label>
                </div>

            </div>
        </div>
    );
};

ModalFilter.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    closeFilterModal: PropTypes.func.isRequired,
};

export default ModalFilter;