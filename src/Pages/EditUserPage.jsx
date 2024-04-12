import React from 'react'
import LandingPageHeader from "../Components/LandingPage/LandingPageHeader/LandingPageHeader.jsx";
import EditUser from "../Components/EditUserInfo/EditUser.jsx";

function EditUserPage() {
    const userId = JSON.parse(localStorage.getItem('userId'));

    return (
        <div>
            <LandingPageHeader/>
            <EditUser userId={userId}/>
        </div>
    )
}

export default EditUserPage;