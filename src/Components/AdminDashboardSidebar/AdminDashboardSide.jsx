import { Link } from 'react-router-dom'
import './AdminDashboardSidebar.css'
import airwayLogo from "/src/assets/airway_logo.svg"
import airPlaneActive from "/src/assets/airplanemode_active.png"
import bookingInActive from "/src/assets/bookingimginactive.png"
import  usersIcon from "/src/assets/users-icon.png"

const AdminDashboardSide = () => {
  return (
      <div className='admin-sidebar-container'>

        <Link to={"/"}><img className='airway-logo' src={airwayLogo} alt="logo" /></Link>
        <div className='sidebar-menu-container'>
          <Link to={"/flight-listing"}>
            <div className='sidebar-flight-listing'>
              <img className='sidebar-flight-listing-icon' src={airPlaneActive} alt="listing" />
              <div className='sidebar-flight-listing-text'>Flight Listing</div>
            </div>
          </Link>
          <Link to={"/flight-booking"}>
            <div className='sidebar-flight-booking'>
              <img className='sidebar-flight-booking-icon' src={bookingInActive} alt="booking" />
              <div className='sidebar-flight-booking-text'>Booking</div>
            </div>
          </Link>
          <Link to={"/passenger"}>
            <div className='sidebar-flight-user'>
              <img className='sidebar-flight-user-icon' src={usersIcon} alt="user" />
              <div className='sidebar-flight-user-text'>Users</div>
            </div>
          </Link>
        </div>
      </div>
  )
}

export default AdminDashboardSide