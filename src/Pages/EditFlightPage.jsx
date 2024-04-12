import React from "react";
import AdminDashboardSide from "../Components/AdminDashboardSidebar/AdminDashboardSide.jsx";
import AdminDashboardNavbar from "/src/Components/AdminDashboardNavbar/AdminDashboardNavbar.jsx";
import EditFlight from "../Components/EditFlightPage/EditFlight.jsx";


function EditFlightPage () {
    return (
        <>
            <AdminDashboardSide/>
            <AdminDashboardNavbar/>
            <EditFlight />
        </>

    )
}

export default EditFlightPage;