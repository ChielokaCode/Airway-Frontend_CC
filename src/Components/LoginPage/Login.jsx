import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { api } from "../../../util/apiFunctions.js";

import googleIcon from "/src/assets/Google.png"
import poolSide from "/src/assets/umbrella.png";
import icon from "/src/assets/SignupSuccessfulIcon.png";
import airwayLogo from "/src/assets/airways-logo.png";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  // const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const onSubmit = async (e) => {
    e.preventDefault();



    try {
      const response= await api.post("/api/v1/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const token = await response.data;
      localStorage.setItem("jwtToken", token);

      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;
      const userFirstName = decodedToken.firstName;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userRole", JSON.stringify(userRole));
      localStorage.setItem("userFirstName", JSON.stringify(userFirstName))
      console.log(userRole);

      setShowModal(true);
      setStatus(true);
      setSuccessMessage("Success");

      if (userRole === "ADMIN") {
        setTimeout(() => {
          navigate("/flight-listing");
        }, 1000);
      } else if (userRole === "PASSENGER") {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        navigate("/");
      }
    } catch (error) {
      // Handle the error here
      console.error("Error during Login:", error);
      const errorMessage =
          error.response?.data?.message ||
          "An error occurred during Login. Please try again.";

      toast.error(errorMessage);
      setStatus(false);
      setErrorMessage("Error");
console.log(errorMessage)
      setShowModal(true);
      setModalMessage(errorMessage);
      console.log(modalMessage)
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setSuccessMessage("");
    setErrorMessage("");
    setModalMessage("");
    navigate("/login");
  };

  return (
      <>
        <div className="login-containerr">
            <div>
              <img src={poolSide} id="login-main-imgg"/>
            </div>
            <div className="login-formm">
              <div className="login-createe">
                <Link to={"/"}>
                <div className="login-logoo">
                  {' '}
                  <img src= {airwayLogo} id="login-logss"/>{' '}
                  <span id="login-worr">Airway</span>
                </div>
                </Link>
                <p id="login-accc">Welcome back to Airway</p>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="login-roww">
                  <label htmlFor="email" className="login-email-titlee">Email Address</label>
                  <br/>
                  <input
                      type="email"
                      id="login-emailaddd"
                      name="email"
                      placeholder="Enter your Email..."
                      value={email}
                      onChange={(e) => onInputChange(e)}
                      required/>
                  <br/>
                </div>

                <div className="login-roww">
                  <label htmlFor="password" id="login-paswrdd">Password</label>
                  <br/>
                  <input
                      type="password"
                      id="login-pswrdd"
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter your Password..." required/>
                  <br/>
                </div>

                <Link to={"/forgot-password"} id="login-frgtpswrdd" >Forgot Password</Link>

                <div className="login-contentt">
                  <hr id="login-horizontall"/>
                  <span id="login-orr">OR</span>
                  <span><hr id="login-horii"/></span>

                  <button id="login-budd">
                    <img src={googleIcon} id="login-googg"/>
                    <span id="login-signn"/>
                    Sign in with Google
                  </button>

                  <button type="submit" id="login-buttonn">
                    <span>LOG IN</span>
                  </button>
                  <footer className='login-footer-loginn'>
                    Dont have an account?
                    <Link to={"/signup"} id="login-log">Sign up here</Link>

                  </footer>
                </div>
              </form>
              <ToastContainer/>
            </div>
        </div>

        <div className={`login-modal ${showModal ? 'show' : ''}`}>
          <div className="login-modal-container">
            <div className="login-modal-title">
              <Modal.Title>
                {status ? successMessage : errorMessage}
              </Modal.Title>
            </div>
            <div>
            <div className="login-modal-icon">
                          <img src={icon} alt="modal icon"/>
                      </div>
              <div className="">
                <Modal.Body>
                    <div className="login-text-body">
                        {modalMessage}
                  </div>
                </Modal.Body>
              </div>
              <Modal.Footer>
                <div className="login-modal-button-main">
                    <button className="login-modal-button" onClick={handleClose}>
                        Return to Login
                    </button>
                </div>
              </Modal.Footer>
            </div>
          </div>
        </div>

      </>
  );
}

export default Login