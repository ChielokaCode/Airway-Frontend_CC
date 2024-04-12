import React from 'react'
import UserProfile from "../Components/UserProfile/UserProfile.jsx";
import LandingPageHeader from "../Components/LandingPage/LandingPageHeader/LandingPageHeader.jsx";

function UserProfilePage() {
    const userId = JSON.parse(localStorage.getItem('userId'));
    return (
        <div>
        <LandingPageHeader/>
        <UserProfile userId={userId}/>
        </div>
    )
}

export default UserProfilePage;