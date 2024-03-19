import { useEffect, useState } from 'react';
import './AdminDashboardNavbar.css';
import { useNavigate } from 'react-router-dom';
import ModalFilter from '../ModalFilter/ModalFilter';
import filterImg from "/src/assets/filterImg.svg";
import bellNotificationImg from "/src/assets/bellNotifImg.svg";

const AdminDashboardNavbar = () => {
    const [searchText, setSearchText] = useState('');
    const [isFilterOpen, setFilterOpen] = useState(false);
    const navigate = useNavigate();
    const [selectedFilters, setSelectedFilters] = useState([]);

    const performSearch = () => {
        // Add code to manage the search props
    };

    useEffect(() => {
        performSearch();
    }, [selectedFilters, performSearch]);

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
        performSearch(query, selectedFilters);
    };


    const logout = async () => {
        try {
            const response = await fetch('/api/v1/auth/logout', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Logout request failed');
            }
            console.log('Logged out successfully');
            navigate('/');
        } catch (error) {
            console.error('Error during logout:', error.message);
        }
    };



    const toggleFilterModal = () => {
        setFilterOpen(!isFilterOpen);
    };


    const closeFilterModal = () => {
        setFilterOpen(false);
    };


    return (
        <>
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
                <img className='navbar-filter-icon' src={filterImg} alt="filter" />
            </div>
            <div onClick={logout} className='admin-navbar-logout'>
                <img className='navbar-logout-icon' src={bellNotificationImg} alt="logout" />
                <div className='navbar-logout-text'>Log Out</div>
            </div>
            <div>
                <ModalFilter isOpen={isFilterOpen} handleCheckboxChange={handleCheckboxChange} closeFilterModal={closeFilterModal} />
            </div>
        </div>
</>
    );

};

export default AdminDashboardNavbar;