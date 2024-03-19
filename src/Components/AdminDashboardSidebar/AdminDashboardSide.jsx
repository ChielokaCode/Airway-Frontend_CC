import { Link } from 'react-router-dom'
import './AdminDashboardSidebar.css';
import airwayLogoImg from "/src/assets/airway_logo.svg";
import airplaneUpImg from "/src/assets/aeroplaneUp.svg";
import airlineSeatImg from "/src/assets/airlineSeatImg.svg";
import userImg from "/src/assets/userImg.svg";

const AdminDashboardSide = () => {
    return (
        <div className='admin-sidebar-container'>

            <Link to={"/"}><img className='airway-logo' src={airwayLogoImg} alt="logo" /></Link>
            <div className='sidebar-menu-container'>
                <Link to={"/flight-listing"}>
                    <div className='sidebar-flight-listing'>
                        <img className='sidebar-flight-listing-icon' src={airplaneUpImg} alt="listing" />
                        <div className='sidebar-flight-listing-text'>Flight Listing</div>
                    </div>
                </Link>
                <Link to={"/flight-booking"}>
                    <div className='sidebar-flight-booking'>
                        <img className='sidebar-flight-booking-icon' src={airlineSeatImg} alt="booking" />
                        <div className='sidebar-flight-booking-text'>Booking</div>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className='sidebar-flight-user'>
                        <img className='sidebar-flight-user-icon' src={userImg} alt="user" />
                        <div className='sidebar-flight-user-text'>Users</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboardSide