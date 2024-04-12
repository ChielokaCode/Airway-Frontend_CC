import { useEffect, useState } from 'react';
import './AdminUserNavBar.css';
import { useNavigate } from 'react-router-dom';
import ModalFilter from '../ModalFilter/ModalFilter';
import filterIcon from "/src/assets/filter-icon.png"
import bellIcon from  "/src/assets/bellNotifImg.svg"
import axios from "axios";
import {toast} from "react-toastify";
const AdminUserNavBar = () => {
    const [searchText, setSearchText] = useState('');
    const [isFilterOpen, setFilterOpen] = useState(false);
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {

        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/passenger/get-passengers');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const usersData = await response.json();
            setAllUsers(usersData);
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    };

    useEffect(() => {
        filterUsers();
    }, [searchText, allUsers]);

    const filterUsers = () => {
        const filtered = allUsers.filter(user =>
           user.firstName && user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.passengerEmail && user.passengerEmail .toLowerCase().includes(searchText.toLowerCase()) ||
            user.phoneNumber && user.phoneNumber.includes(searchText)
        );
        setFilteredUsers(filtered);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchText(query);
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
                "An error occurred in the process. Please try again.";
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
                <form>
                    <input
                        className='admin-navbar-search-text'
                        type="text"
                        name="text"
                        value={searchText}
                        onChange={handleSearchChange}
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

    )

}

export default AdminUserNavBar;