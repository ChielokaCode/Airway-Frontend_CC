import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import VerifyPage from './Pages/VerifyPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import LandingPage from './Pages/LandingPage';
import FlightSelectionOnePage from "./Pages/FlightSelectionOnePage.jsx";
import PassengerFormPage from "./Pages/PassengerFormPage.jsx";
import BookingConfirmationPage from "./Pages/BookingConfirmationPage.jsx";
import TicketConfirmationPage from "./Pages/TicketConfirmationPage.jsx";
import ConfirmationPage from "./Pages/ConfirmationPage.jsx";
import AddFlightPage from "./Pages/AddFlightPage.jsx";
import AdminDashBoardPage1 from "./Pages/AdminDashBoardPage1.jsx";
import DeleteModalPage from "./Pages/DeleteModalPage.jsx";
import ManageBooking from "./Pages/ManageBooking.jsx";
import AdminUserManagementPage from "./Pages/AdminUserManagementPage.jsx";
import EditFlightPage from "./Pages/EditFlightPage.jsx";

function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/forgot-password" element={<ForgotPasswordPage/>} />
          <Route exact path="/api/v1/auth/reset-password/:token" element={<ResetPasswordPage />} />
          <Route exact path="/api/v1/auth/verifyRegistration" element={<VerifyPage/>}/>
            <Route exact path="/flight-select" element={<FlightSelectionOnePage/>}/>
            <Route exact path="/passenger-information" element={<PassengerFormPage/>}/>
          <Route exact path="/confirmation-page" element={<ConfirmationPage />} />
          <Route exact path="/ticket-confirmation/:token" element={<TicketConfirmationPage/>}/>
          <Route exact path="/booking-confirmation/:token" element={<BookingConfirmationPage />} />
          <Route exact path="/addflight" element={<AddFlightPage />}/>
          <Route exact path="/flight-listing" element={<AdminDashBoardPage1 />} />
          <Route exact path="/deleteModal-page" element={<DeleteModalPage />} />
          <Route exact path="/flight-booking" element={<ManageBooking />} />
          <Route exact path="/passenger" element={<AdminUserManagementPage />} />
          <Route exact path="/edit-flight/:flightId" element={<EditFlightPage/>}/>

        </Routes>
      </Router>

    </>
  )
}

export default App