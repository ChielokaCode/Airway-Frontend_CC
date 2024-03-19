import "./App.css";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import BookingConfirmationPage from "./Pages/BookingConfirmationPage.jsx";
import FlightInformationPage from "./Pages/FlightInformationPage.jsx";
import FlightSelectionOnePage from "./Pages/FlightSelectionOnePage.jsx";
import FlightSelectionTwoPage from "./Pages/FlightSelectionTwoPage.jsx";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage.jsx";
import ConfirmationPage from "./Pages/ConfirmationPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage.jsx";
import AdminDashboardPage from "./Pages/AdminDashboardPage.jsx";
import VerifyPage from "./Pages/VerifyPage.jsx";

function App() {
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/confirmation-page"
            element={<ConfirmationPage />}
          />
          <Route
            exact
            path="/booking-confirmation"
            element={<BookingConfirmationPage />}
          />
          <Route
            exact
            path="/flight-select"
            element={<FlightSelectionOnePage />}
          />
          <Route
            exact
            path="/flight-selects"
            element={<FlightSelectionTwoPage />}
          />
          <Route
            exact
            path="/flight-information"
            element={<FlightInformationPage />}
          />
          <Route
            exact
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          />
          <Route exact path="/api/v1/auth/reset-password/:token" element={<ResetPasswordPage />}/>
          <Route exact path="/api/v1/auth/verifyRegistration/:token" element={<VerifyPage/>}/>
          <Route exact path="/flight-listing" element={<AdminDashboardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
