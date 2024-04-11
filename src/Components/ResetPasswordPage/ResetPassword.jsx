import React, { useState } from "react";
import "./ResetPassword.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import logo from "/src/assets/logo_with_name.png";
import icon from "/src/assets/SignupSuccessfulIcon.png";
import homeImg from "/src/assets/umbrella.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
          `http://localhost:8080/api/v1/auth/reset-password/${token}`,
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      setShowModal(true);
      toast(`Password reset successful`)
      setStatus(true);
      setSuccessMessage("Successful Password Reset");

      setModalMessage("You will get an email confirmation at your email");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Error during password reset:", error);
      const errorMessage =
          error.response?.data?.message ||
          "An error occurred during password reset. Please try again.";
      toast.error(errorMessage);
      setStatus(false);
      setErrorMessage("Error");
      setShowModal(true);
      setModalMessage(errorMessage);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setSuccessMessage("");
    setErrorMessage("");
    setModalMessage("");
    navigate("/login");
  };

  const styles = {
    backgroundImage: `url(${homeImg})`,
    width: '840px',
    height: '1024px',
    maxWidth: '60%'
  };

  return (
      <div className="reset-container-signups">
        <div className="reset-grid-container-signups">
          <div style={styles}></div>
          <div className="reset-grid-item-passwordResets">
            <div className="reset-form-table-signups">
              <div className="reset-top-form-signupss">
                <Link to={"/"}>
                <img className="reset-SQ-text-signups" src={logo}/>
                </Link>
                <h4 className="reset-createAcct-texts">Reset your Password</h4>
                <div className="reset-form-proper-signupss">
                  <form onSubmit={(e) => onSubmit(e)}>

                    <div className="reset-single-input-fields">
                      <label className="reset-label-resetPs" htmlFor="password">Password</label>
                      <input
                          className="reset-input-fieldss"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => onInputChange(e)}
                          placeholder="**********"
                          required
                      />
                    </div>
                    <div className="reset-single-input-fields2">
                      <label className="reset-label-resetPs2" htmlFor="confirmPassword">
                        Confirm Password
                      </label>
                      <input
                          className="reset-input-fieldss2"
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => onInputChange(e)}
                          placeholder="**********"
                          required
                      />
                    </div>
                    <button type="submit" className="reset-button-ctas">
                      Reset Password
                    </button>
                  </form>
                  <ToastContainer/>
                  <p className="reset-alreadyHaveAnAccts">
                    Go back to {" "}
                    <Link to="/login" className="go-back-to-link">
                      Sign In
                    </Link>
                  </p>

                  <div className={`reset-modal ${showModal ? 'shows' : ''}`}>
                    <div className="reset-modal-container">
                      <div className="reset-modal-title">
                        <Modal.Title>
                          {status ? successMessage : errorMessage}
                        </Modal.Title>
                      </div>
                      <div>
                        <div className="reset-icon">
                          <img src={icon}/>
                        </div>
                        <div className="reset-text-body">
                          <Modal.Body>
                            {modalMessage}
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <button className="reset-modal-button" onClick={handleClose}>
                            Try Again
                          </button>
                        </Modal.Footer>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ResetPassword;