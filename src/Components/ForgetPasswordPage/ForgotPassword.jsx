import React, { useState } from "react";
import "./ForgotPassword.css";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif";
import successfulIcon from "/src/assets/SignupSuccessfulIcon.png"
import airwayLogo from "/src/assets/airway_logo.svg"
import rectangleImg from "/src/assets/Rectangle 58.svg"


const ForgotPassword = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
        email: "",
    });
    const { email } = user;
    const [loading, setLoading] = useState(false);


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);


        try {
            await axios.post(
                "http://localhost:8080/api/v1/auth/forgot-password",
                user,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setShowModal(true);
            setStatus(true);
            setSuccessMessage("Password Reset Link Sent!");
            setLoading(false);

            setModalMessage(`Check your email ${email} for the reset link`);

        } catch (error) {
            console.error("Error during password reset:", error);

            setStatus(false);
            setErrorMessage("Password Reset Failed!");

            setShowModal(true);
            setModalMessage(
                error.response?.data?.message ||
                "Kindly check that you have inputted the correct email. If the issue persists, please try again later."
            );
            setLoading(false)
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setSuccessMessage("");
        setErrorMessage("");
        setModalMessage("");
    };

    return (
        <div>
            {loading && (
                <img className="loading-textP" src={airwayAnimationPass} alt="Loading animation"/>
            )}
            {loading || (
        <div className="forget-password-container">
            <img src={rectangleImg} alt="Your Image" className="forget-password-image" />
            <div className="forget-password-content-container">
                <div className="password-reset-items">
                    
                    <div className="forgot-password-logo-title">
                    <Link to={"/"}><img className="forgot-password-logo-image" src={airwayLogo}/></Link>
                        <div className="create-acct-text">Reset your password</div>
                    </div>
                   
                    <div className="reset-instruction-form">
                        <div className="reset-password-text">
                            Enter your email below and we’ll send you instructions on how to reset your password.
                        </div>
                        <div className="forgot-password-form">
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="single-input-field">
                                    <label className="forgot-password-label" htmlFor="email">Email Address</label>
                                    <input
                                        className="forgot-password-input-field"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="ChiomaA@gmail.com"
                                        required
                                    />
                                </div>
                                <button type="primary" className="forgot-password-button-ctaa">Send reset instructions</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`forgot-modal ${showModal ? 'show' : ''}`}>
              <div className="forgot-modal-container">
                    <div className="forgot-modal-content">
                      <div className="forgot-modal-title">
                        <Modal.Title>
                          {status ? successMessage : errorMessage}
                        </Modal.Title>
                      </div>
                      <div className="forgot-modal-icon">
                          <img src={successfulIcon} alt="modal icon"/>
                      </div>
                        <div className="forgot-modal-body">
                          <Modal.Body>
                            <div className="forgot-modal-body-text">
                            {modalMessage}
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                            <button className="forgot-modal-button" onClick={handleClose}>
                                Continue
                            </button>
                        </Modal.Footer>
                    </div>
              </div>
          </div>
            </div>
        </div>
                )}
        </div>
    );
};
export default ForgotPassword; 