import { Link } from 'react-router-dom'
import './AdminUserSideBar.css'
import airwayLogo from "/src/assets/AirwayLogowithText.png"
import flightListImg from "/src/assets/airplanemode_inactive.png"
import bookingInactive from "/src/assets/bookingimginactive.png"
import userActive from "/src/assets/userActive.png"

const AdminUserSideBar = () => {
    return (
        <div className='admin-sidebar-containerUser'>

            <Link to={"/"}><img className='airway-logoUser' src={airwayLogo} alt="logo" /></Link>
            <div className='sidebar-menu-containerUser'>
                <Link to={"/flight-listing"}>
                    <div className='sidebar-flight-listingUser'>
                        <img className='sidebar-flight-listing-iconUser' src={flightListImg} alt="listing" />
                        <div className='sidebar-flight-listing-textUser'>Flight Listing</div>
                    </div>
                </Link>
                <Link to={"/flight-booking"}>
                    <div className='sidebar-flight-bookingUser'>
                        <img className='sidebar-flight-booking-iconUser' src={bookingInactive} alt="booking" />
                        <div className='sidebar-flight-booking-textUser'>Booking</div>
                    </div>
                </Link>
                <Link to={"/passenger-sign-up"}>
                    <div className='sidebar-flight-userUser'>
                        <img className='sidebar-flight-user-iconUser' src={userActive} alt="user" />
                        <div className='sidebar-flight-user-textUser'>User</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AdminUserSideBar