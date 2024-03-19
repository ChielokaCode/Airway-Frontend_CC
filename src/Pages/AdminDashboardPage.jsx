import React from "react";
import AdminDashboardNavbar from "../Components/AdminDashboardNavBar/AdminDashboardNavbar.jsx";
import AdminDashboardSide from "../Components/AdminDashboardSidebar/AdminDashboardSide.jsx";
import FlightListing from "../Components/FlightListingPage/FlightListing.jsx";

const AdminDashboardPage = () => {
    return (
        <>
            <AdminDashboardSide/>
            <AdminDashboardNavbar />
            <FlightListing/>
        </>
    );
};

export default AdminDashboardPage;
