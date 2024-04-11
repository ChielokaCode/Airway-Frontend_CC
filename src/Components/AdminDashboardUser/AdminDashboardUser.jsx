import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDetailscc.css';
import './AdminDashboardUser.css';
import airwayAnim from "../ManageBookingPage/airwayanimB.gif";
import {toast} from "react-toastify";
import axios from "axios";
import filterIcon from "/src/assets/filter-icon.png"
import bellIcon from  "/src/assets/bellNotifImg.svg"



const AdminDashboardUser = () => {
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(''); // Define searchQuery state variable
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isFilterOpen, setFilterOpen] = useState(false);


    useEffect(() => {
        performSearch(searchQuery);
    }, [searchQuery,userData]);





    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const performSearch = (query) => {
        setSearchQuery(query);

        let filteredData = userData;
        if (query && query.trim() !== '') {
            const lowerCaseQuery = query.trim().toLowerCase();
            filteredData = filteredData.filter(item => {
                console.log("Item:", item);
                const match =
                    (item.firstName && item.firstName.toLowerCase().includes(lowerCaseQuery)) ||
                    (item.lastName && item.lastName.toLowerCase().includes(lowerCaseQuery)) ||
                    (item.passengerEmail && item.passengerEmail.toLowerCase().includes(lowerCaseQuery)) ||
                    (item.passengerCode && item.passengerCode.toLowerCase().includes(lowerCaseQuery)) ||
                    (item.phoneNumber && item.phoneNumber.includes(query.trim()))||
                    (item.membership && item .membership.toLowerCase().includes(query.trim().toLowerCase()))||
                (item.created && formatDate(item.created).includes(query.trim()))
                console.log("Match:", match);
                return match;
            });
        }
        console.log("Filtered Data:", filteredData);
        setLoading(true)
        setFilteredUsers(filteredData);
        setTimeout(async () => {
        setLoading(false); // Move setLoading(false) outside setTimeout
        }, 1500);
        };


    const toggleFilterModal = () => {
        setFilterOpen(!isFilterOpen);
    };

    const closeFilterModal = () => {
        setFilterOpen(false);
    };











    const logout = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/logout');

            toast(`Logout successful`)
            // setIsLoggedOut(true);
            localStorage.removeItem("user");
            localStorage.removeItem("userFirstName");
            localStorage.removeItem("userRole");
            localStorage.clear();
            navigate('/');
        } catch (error) {
            console.error('Error during logout:', error.message);
        }
    };


    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            setTimeout(async () => {

            try {

                const userResponse = await fetch("http://localhost:8080/api/v1/passenger/get-passengers");
                const userInfo = await userResponse.json();
                setLoading(false);
                setUserData(userInfo);
            } catch (error) {
                console.error('Error fetching data:', error);
                const errorMessage =
                    error.response?.data?.message ||
                    "An error occurred the process. Please try again.";

                toast.error(errorMessage);
            }
            }, 1500);
        };

        fetchUserData();
    }, []);

    const totalPages = Math.ceil(userData.length / itemsPerPage);

    // Calculate index of the first and last items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page navigation
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }


    return (
        <div>
            <div className='admin-navbar-container'>
                <div className='admin-navbar-search'>
                    <form>
                        <input
                            className='admin-navbar-search-text'
                            type="text"
                            name="text"
                            value={searchQuery}
                            onChange={handleChange}
                            placeholder="Search for Users....."
                            required
                        />
                    </form>
                </div>

                <div className='admin-navbar-filter' onClick={toggleFilterModal}>
                    <img className='navbar-filter-icon' src={filterIcon} alt="filter" />
                </div>
                <div onClick={logout} className='admin-navbar-logout'>
                    <img className='navbar-logout-icon' src={bellIcon} alt="logout" />
                    <div className='navbar-logout-text'>Log Out</div>
                </div>
                <div>
                    {/*<ModalFilter isOpen={isFilterOpen} closeFilterModal={closeFilterModal} />*/}
                </div>
            </div>



        {loading && (
            <img className="Booking-loading-text" src={airwayAnim} alt="Loading animation"/>
        )}
    {loading || (
        <div className='pagebackground'>
            <div className="headerr">

                <h2>Users</h2>


            </div>


            <table className="styled-table">
                <thead>
                <tr>
                    <th>Date Created</th>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Membership Status</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {searchQuery && filteredUsers.map((user, index) => (

                    <tr key={user.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td>{formatDate(user.created)}</td>
                        <td>{user.passengerCode}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.membership}</td>
                        <td>{user.passengerEmail}</td>
                        <td>{user.phoneNumber}</td>
                        <td><button className="vertical-dots">&#8942;</button></td>
                    </tr>
                ))}
                {!searchQuery &&currentItems.map((user, index) => (
                    <tr key={user.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td>{formatDate(user.created)}</td>
                        <td>{user.passengerCode}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.membership}</td>
                        <td>{user.passengerEmail}</td>
                        <td>{user.phoneNumber}</td>
                        <td><button className="vertical-dots">&#8942;</button></td>
                    </tr>
                ))}


                </tbody>
            </table>











            <div className="Booking-pagination">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
        )}
        </div>
    );
};

export default AdminDashboardUser;