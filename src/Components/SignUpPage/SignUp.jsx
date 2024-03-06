import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";


const SignUp = () => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const { firstName, lastName, email, phoneNumber, password, confirmPassword } =
        user;


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    console.log(token)
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/v1/user/register", user, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setShowModal(true);
            setStatus(true);
            setSuccessMessage("Successful Account creation");

            setModalMessage(`You will get an email confirmation at your ${email}`);

            setTimeout(() => {
                navigate("/signin/signin");
            }, 1000);
        } catch (error) {
            // Handle the error here
            console.error("Error during Login:", error);
            const errorMessage =
                error.response?.data?.message ||
                "An error occurred during Login. Please try again.";

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
    };

    return (
        <div className="signup-container-signup">
            <div className="grid-container-signup">
                <div className="img5-signup"></div>
                <div className="grid-item-signup">
                    <div className="form-table-signup-signup">
                        <div className="top-form-signups">
                            <img className="SQ-text-signup" src="../src/assets/airway_logo.svg"/>
                            <h3 className="createAcct-text-signups">Create an Account</h3>
                        </div>

                        <div className="form-proper-signups">
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="single-input-field">
                                    <label className="label" htmlFor="firstName">
                                        First Name:
                                    </label>
                                    <input
                                        className="input-fields"
                                        type="text"
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter your first name..."
                                    />
                                </div>
                                <div className="single-input-field">
                                    <label className="label" htmlFor="lastName">
                                        Last Name:
                                    </label>
                                    <input
                                        className="input-fields"
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter your last name..."
                                        required
                                    />
                                </div>
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
                                        placeholder="Enter your email..."
                                        required
                                    />
                                </div>
                                <div className="single-input-field">
                                    <label className="label" htmlFor="phoneNumber">
                                        Phone Number:
                                    </label>
                                    <input
                                        className="input-fields"
                                        type="text"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter your Phone Number..."
                                        required
                                    />
                                </div>
                                <div className="single-input-field">
                                    <label className="label" htmlFor="password">
                                        Password:
                                    </label>
                                    <input
                                        className="input-fields"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter your Password..."
                                        required
                                    />
                                </div>
                                <div className="single-input-field">
                                    <label className="label" htmlFor="confirmPassword">
                                        Confirm Password:
                                    </label>
                                    <input
                                        className="input-fields"
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Re-enter your Password..."
                                        required
                                    />
                                </div>
                                <div className="google-button-signup">
                                <GoogleLogin
                                    onSuccess={(credentialResponse) => {
                                        console.log(credentialResponse);
                                        setToken(credentialResponse.credential);
                                        navigate(`/signin/${credentialResponse.credential}`);
                                    }}
                                    onError={() => {
                                        console.log("Login Failed");
                                    }}
                                />
                                </div>
                                <button type="submit" className="button-cta">
                                    Sign Up
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
                                        Continue
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <p className="alreadyHaveAnAcct">
                                Already have an account?
                                <Link to="/signin/signin">
                                    <a href="#"> Log in here</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;