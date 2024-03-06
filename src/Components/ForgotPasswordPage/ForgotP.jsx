import React, { useState } from "react";
import "./ForgotP.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const ForgotP = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
    });
    const { email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:8080/api/v1/user/forgotPassword",
                user,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setShowModal(true);
            setStatus(true);
            setSuccessMessage("Successful Account creation");

            setModalMessage(`You will get an email confirmation at your ${email}`);

            // Set a 5-second delay before navigating to "/signin"
            setTimeout(() => {
                navigate("/reset-password");
            }, 1000);
        } catch (error) {
            // Handle the error here
            console.error("Error during password reset:", error);

            setStatus(false);
            setErrorMessage("Error");

            setShowModal(true);
            setModalMessage(
                "An error occurred during sending password reset email. Please try again."
            );
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setSuccessMessage("");
        setErrorMessage("");
        setModalMessage("");
    };

    return (
        <div className="signup-container-signup">
            <div className="grid-container-signup">
                <div className="img5-signup"></div>
                <div className="grid-item-passwordReset">
                    <div className="form-table-signup">
                        <div className="top-form-signups">
                            <img className="SQ-text-signup" src="../src/assets/airway_logo.svg"/>
                        <h3 className="createAcct-text">Reset Password</h3>
                        <p className="resetPassword-text">
                            Enter your email below and we’ll send you instructions on how to
                            reset your password.
                        </p>
                    </div>
                    <div className="form-proper-signups">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="single-input-field">
                                <label className="label" htmlFor="email">
                                    Email Address:
                                </label>
                                <input
                                    className="input-fields"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Enter your Email..."
                                    required
                                />
                            </div>
                            <button type="submit" className="button-cta">
                                Send Reset Instructions
                            </button>
                        </form>

                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    {status ? successMessage : errorMessage}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal-body">
                                <img
                                    className="email-sent-img"
                                    src="../src/assets/icons/EmailSentSuccessfully.svg"
                                />
                                <br />
                                {modalMessage}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    className="modal-close"
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Continue
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <p className="alreadyHaveAnAcct">
                            Already have an account?{" "}
                            <Link to="/signin/signin">
                                <a href="#">Sign In here</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default ForgotP;