import React, { useEffect, useState } from 'react';
import './AdminDashboardNavbar.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import filterIcon from "/src/assets/filter-icon.png"
import logoutIcon from  "/src/assets/bellNotifImg.svg"
import FlightModalFilter from "../FlightListingPage/FlightModalFilter.jsx";

const AdminDashboardNavbar = () => {
  const [searchText, setSearchText] = useState('');
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Define searchQuery state variable
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState([]);


  const handleCheckboxChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(item => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
      setFilterOpen(false);
      performSearch(searchText, filter);
    }
  };



  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const logout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/logout');
      toast(`Logout successful`)
      localStorage.removeItem("user");
      localStorage.removeItem("userFirstName");
      localStorage.removeItem("userRole");
      localStorage.clear();
      sessionStorage.clear();
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error.message);
      const errorMessage =
          error.response?.data?.message ||
          "An error occurred during Login out. Please try again.";

      toast.error(errorMessage);
    }
  };



  const toggleFilterModal = () => {
    setFilterOpen(!isFilterOpen);
  };


  const closeFilterModal = () => {
    setFilterOpen(false);
  };


  return (
      <div className='admin-navbar-container'>
        <div className='admin-navbar-search'>
          <form >
            <input
                className='admin-navbar-search-text'
                type="text"
                name="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search for Flight....."
                required
            />
          </form>
        </div>

        <div className='admin-navbar-filter' onClick={toggleFilterModal}>
          <img className='navbar-filter-icon' src={filterIcon} alt="filter" />
        </div>
        <div onClick={(e) => logout(e)} className='admin-navbar-logout'>
          <img className='navbar-logout-icon' src={logoutIcon} alt="logout" />
          <div className='navbar-logout-text'>Log Out</div>
        </div>
        <ToastContainer/>
        <div>
          <FlightModalFilter
              isOpen={isFilterOpen}
              closeFilterModal={closeFilterModal}
              handleCheckboxChange={handleChange}
          />
        </div>
      </div>

  )

}

export default AdminDashboardNavbar;
