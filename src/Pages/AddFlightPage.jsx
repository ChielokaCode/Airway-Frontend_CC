import React from "react";
import AddFlightForm from "../Components/AddFlightPage/AddFlightForm.jsx";
import AdminDashboardSide from "../Components/AdminDashboardSidebar/AdminDashboardSide.jsx";
import AdminDashboardNavbar from "/src/Components/AdminDashboardNavbar/AdminDashboardNavbar.jsx";


function AddFlightPage () {
    return (
        <>
            <AdminDashboardSide/>
            <AdminDashboardNavbar/>
            <AddFlightForm />
        </>

    )
}

export default AddFlightPage