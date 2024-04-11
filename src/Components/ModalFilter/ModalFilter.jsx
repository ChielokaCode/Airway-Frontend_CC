import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ModalFilter.css';

const ModalFilter = ({ isOpen, closeFilterModal }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filters, setFilters] = useState({
    date: false,
    bookingReferenceNo: false,
    flightNo: false,
    pnr: false,
    arrivalDate: false,
    departurePort: false,
    arrivalPort: false
  });

  const handleCheckboxChange = (filter) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter]: !prevFilters[filter]
    }));
  };

  // useEffect(() => {
  //     setSelectedFilters([]);
  // }, [isOpen]);

  // const handleFilterChange = (filter) => {
  //     handleCheckboxChange(filter);
  //     closeFilterModal();
  // };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  return (
      <div className={`filter-container ${isOpen ? 'open' : ''}`}>
        <div className="filter-inner-container">
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="dateFilter"
                onChange={() => handleCheckboxChange('date')}
                checked={filters.date}
            />
            <label htmlFor="dateFilter">
              Date
            </label>
          </div>
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="refFilter"
                onChange={() => handleCheckboxChange('bookingReferenceNo')}
                checked={filters.bookingReferenceNo}
            />
            <label htmlFor="refFilter">
              Booking Reference No
            </label>
          </div>
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="flightNoFilter"
                onChange={() => handleCheckboxChange('flightNo')}
                checked={filters.flightNo}
            />
            <label htmlFor="flightNoFilter">
              Flight No
            </label>
          </div>
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="PNRFilter"
                onChange={() => handleCheckboxChange('pnr')}
                checked={filters.pnr}
            />
            <label htmlFor="PNRFilter">
              PNR
            </label>
          </div>
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="departureDateFilter"
                onChange={() => handleCheckboxChange('departureDate')}
                checked={filters.departureDate}
            />
            <label htmlFor="departureDateFilter">
              Flight No
            </label>
          </div>
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="arrivalDateilter"
                onChange={() => handleCheckboxChange('arrivalDate')}
                checked={filters.arrivalDate}
            />
            <label htmlFor="arrivalDateilter">
              Arrival Date
            </label>
          </div>
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="departurePortFilter"
                onChange={() => handleCheckboxChange('departurePort')}
                checked={filters.departurePort}
            />
            <label htmlFor="departurePortFilter">
              Departure Port
            </label>
          </div>
          <div className="filter-checkbox">
            <input
                type="checkbox"
                id="arrivalPortFilter"
                onChange={() => handleCheckboxChange('arrivalPort')}
                checked={filters.arrivalPort}
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