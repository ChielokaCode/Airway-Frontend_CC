import React, {useEffect, useState} from 'react'
import ManagedBookingPage from "../Components/ManageBookingPage/ManageBooking.jsx";
import AdminBookingSideBar from "../Components/AdminBookingSideBar/AdminBookingSideBar.jsx";

const ManageBooking = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (query) => {
        setSearchQuery(query);
    };


    return (
        <>
            <AdminBookingSideBar/>
            <ManagedBookingPage />
        </>
    );
};
export default ManageBooking