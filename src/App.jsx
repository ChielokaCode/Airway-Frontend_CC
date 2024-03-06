
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage.jsx";
import ForgotPPage from "./Pages/ForgotPPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import PasswordTokenPage from "./Pages/PasswordTokenPage.jsx";
import ResetPPage from "./Pages/ResetPPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import PassengersInfoAdultPage from "./Pages/PassengersInfoAdultPage.jsx";
import ModalPage from "./Components/ModalPage/ModalPage.jsx";
import PassengersInfoInfantPage from "./Pages/PassengersInfoInfantPage.jsx";

function App() {

  return (
      <>
          <Router>

              <Routes>
                  <Route exact path="/" element={<LandingPage/>}/>
                  <Route exact path="/signup" element={<SignUpPage/>}/>
                  <Route exact path="/signin/:credential" element={<SignInPage/>} />
                  <Route exact path="/forgot-password" element={<ForgotPPage />} />
                  <Route exact path="/reset-password" element={<PasswordTokenPage />} />
                  <Route exact path="/reset-password/:token" element={<ResetPPage />} />
                  <Route exact path="/adult-info-page" element={<PassengersInfoAdultPage />} />
                  <Route exact path="/infant-info-page" element={<PassengersInfoInfantPage />} />
                  <Route exact path="/modal-info-page" element={<ModalPage />} />
              </Routes>
          </Router>
          </>
  )
}

export default App
