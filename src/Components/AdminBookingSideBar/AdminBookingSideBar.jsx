import { Link } from 'react-router-dom'
import './AdminBookingSideBar.css';
import airwayLogoImg from "/src/assets/airway_logo.svg";
import userImg from "/src/assets/userImg.svg";
import bookingblue from "../AdminBookingSideBar/bookingblue.svg"
import blackairplane from "../AdminBookingSideBar/blackairplane.svg"
const AdminBookingSideBar = () => {
    return (
        <div className='Badmin-sidebar-container'>

            <Link to={"/"}><img className='Bairway-logo' src={airwayLogoImg} alt="logo" /></Link>
            <div className='Bsidebar-menu-container'>
                <Link to={"/flight-listing"}>
                    <div className='Bsidebar-flight-listing'>
                        <img className='Bsidebar-flight-listing-icon' src={blackairplane} alt="listing" />
                        <div className='Bsidebar-flight-listing-text'>Flight Listing</div>
                    </div>
                </Link>
                <Link to={"/flight-booking"}>
                    <div className='Bsidebar-flight-booking'>
                        <img className='Bsidebar-flight-booking-icon' src={bookingblue} alt="booking" />
                        <div className='Bsidebar-flight-booking-text'>Booking</div>
                    </div>
                </Link>
                <Link to={"/passenger"}>
                    <div className='Bsidebar-flight-user'>
                        <img className='Bsidebar-flight-user-icon' src={userImg} alt="user" />
                        <div className='Bsidebar-flight-user-text'>Users</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default AdminBookingSideBar