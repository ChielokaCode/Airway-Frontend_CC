import React, { useState } from "react";
import "./ResetPassword.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import logo from "/src/assets/airway_logo.svg";
import icon from "/src/assets/Icon.png";
import homeImg from "/src/assets/homeImg.png";


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
      setStatus(true);
      setSuccessMessage("Successful Password Reset");

      setModalMessage("You will get an email confirmation at your email");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      // Handle the error here
      console.error("Error during password reset:", error);
      const errorMessage =
          error.response?.data?.message ||
          "An error occurred during password reset. Please try again.";

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
      <div className="signup-container-signups">
        <div className="grid-container-signups">
          <div style={styles}></div>
          <div className="grid-item-passwordResets">
            <div className="form-table-signups">
              <div className="top-form-signupss">
                <img className="SQ-text-signups" src={logo}/>
                <h4 className="createAcct-texts">Reset your Password</h4>
                <div className="form-proper-signupss">
                  <form onSubmit={(e) => onSubmit(e)}>

                    <div className="single-input-fields">
                      <label className="label-resetPs" htmlFor="password">
                        <p>Password</p>
                      </label>
                      <input
                          className="input-fieldss"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => onInputChange(e)}
                          placeholder="**********"
                          required
                      />
                    </div>
                    <div className="single-input-fields">
                      <label className="label-resetPs" htmlFor="confirmPassword">
                        <p>Confirm Password</p>
                      </label>
                      <input
                          className="input-fieldss"
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => onInputChange(e)}
                          placeholder="**********"
                          required
                      />
                    </div>
                    <button type="submit" className="button-ctas">
                      Send Reset Instructions
                    </button>
                  </form>
                  <p className="alreadyHaveAnAccts">
                    Go back to {" "}
                    <Link to="/login">
                      <a href="#">Sign In</a>
                    </Link>
                  </p>

                  <div className={`modal-forgots ${showModal ? 'shows' : ''}`}>
                    <div className="modal-container-forgots">
                      <div className="modal-title-forgots">
                        <Modal.Title>
                          {status ? successMessage : errorMessage}
                        </Modal.Title>
                      </div>
                      <div>
                        <div className="icon-forgots">
                          <img src={icon}/>
                        </div>
                        <div className="text-body-forgots">
                          <Modal.Body>
                            {modalMessage}
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button
                              className="modal-button-forgots"
                              onClick={handleClose}>
                            Return to Login
                          </Button>
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