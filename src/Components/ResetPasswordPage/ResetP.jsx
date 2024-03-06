import React, { useState } from "react";
import "./ResetP.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ResetP = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
        newPassword: "",
        newConfirmPassword: "",
    });

    const { newPassword, newConfirmPassword } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                `http://localhost:8080/api/v1/auth/resetPassword/${token}`,
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
                navigate("/signin/signin");
            }, 1000);
        } catch (error) {
            // Handle the error here
            console.error("Error during password reset:", error);
            const errorMessage =
                error.response?.data?.message ||
                "An error occurred during password updating. Please try again.";

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

    return (
        <div className="signup-container-signup">
            <div className="grid-container-signup">
                <div className="img5-signup"></div>
                <div className="grid-item-passwordReset">
                    <div className="form-table-signup">
                        <div className="top-form-signups">
                            <img className="SQ-text-signup" src="../src/assets/airway_logo.svg"/>
                            <h3 className="createAcct-text">Reset your Password</h3>
                            <div className="form-proper-signups">
                                <form onSubmit={(e) => onSubmit(e)}>

                                    <div className="single-input-field">
                                        <label className="label" htmlFor="newPassword">
                                            Password:
                                        </label>
                                        <input
                                            className="input-fields"
                                            type="password"
                                            name="newPassword"
                                            value={newPassword}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Enter your new Password..."
                                            required
                                        />
                                    </div>
                                    <div className="single-input-field">
                                        <label className="label" htmlFor="newConfirmPassword">
                                            Confirm Password:
                                        </label>
                                        <input
                                            className="input-fields"
                                            type="password"
                                            name="newConfirmPassword"
                                            value={newConfirmPassword}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Re-enter your new Password..."
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="button-cta">
                                        Reset Password
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
                                            src="src/assets/airway_sent_pic.svg"
                                        />
                                        {modalMessage}
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            className="modal-close"
                                            variant="secondary"
                                            onClick={handleClose}
                                        >
                                            Return to Login
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <p className="alreadyHaveAnAcct">
                                    Go back to {" "}
                                    <Link to="/signin/signin">
                                        <a href="#">Sign In</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetP;