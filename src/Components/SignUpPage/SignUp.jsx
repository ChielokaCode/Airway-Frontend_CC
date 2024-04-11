import React, { useState } from "react";
import "./SignUp.css";
import {Link, useNavigate} from "react-router-dom";
import { Modal } from "react-bootstrap";
import umbrellerIcon from "/src/assets/umbrella.png";
import vector from "/src/assets/airways-logo.png";
import google from "/src/assets/Google.png";
import icon from "/src/assets/SignupSuccessfulIcon.png"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif";
import {toast} from "react-toastify";



const SignUp = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const { firstName, lastName, email, password, confirmPassword } =
        user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (phoneNumber, country) => {
      setUser({ ...user, phoneNumber, country: country.name });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
      setLoading(true);

      try {
        await axios.post("http://localhost:8080/api/v1/auth/passenger-sign-up", user, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

        setShowModal(true);
        setStatus(true);
        setSuccessMessage("Success");
          setLoading(false);
          setModalMessage("Email Sent Successfully!");

        setTimeout(() => {
            navigate("/login");
        }, 2000);
    } catch (error) {
        // Handle the error here
        console.error("Error during SignUp:", error);
        const errorMessage =
            error.response?.data?.message ||
            "An error occurred during SignUp. Please try again.";
          toast.error(errorMessage);
        setStatus(false);
        setErrorMessage("Error");

        setShowModal(true);
        setModalMessage(errorMessage);
    }
};



    const handleModalButton = () => {
      status === true?
      (
      navigate("/login"),
      setShowModal(false),
      setSuccessMessage(""),
      setErrorMessage(""),
      setModalMessage("")
      )
      :
      (
      setShowModal(false),
      setSuccessMessage(""),
      setErrorMessage(""),
      setModalMessage("")
      )
    };
  return (
      <div>
          {loading && (
              <img className="loading-textP" src={airwayAnimationPass} alt="Loading animation"/>
          )}
          {loading || (

      <div className="signup-container">
          <div>
            <img src={umbrellerIcon} id="signup-main-img" />
          </div>
          <div className="form-signup">
            <div className="signup-create">
              <Link to={"/"}>
              <p className="signup-logo">
                {' '}
                <img src={vector} id="signup-logs" />{' '}
                <span id="signup-wor">Airway</span>
              </p>
              </Link>
              <div className="signup-acc-hero">Create an Account</div>
            </div>
            <form className="signup-formtag-signup"  onSubmit={(e) => onSubmit(e)}>

              <div className="signup-row">
                <label htmlFor="firstName" id="signup-fn">
                  First Name{' '}
                </label>
                <br />
                <input 
                  type="text" 
                  id="signup-name" 
                  name="firstName" 
                  value={firstName}  
                  onChange={(e) => onInputChange(e)}
                  placeholder="Enter your first name..."
                  required/>
              <br />
              </div>

              <div className="signup-row">
                <label htmlFor="lastNamw" id="signup-nam">
                  Last Name
                </label>
                <br />
                <input 
                  type="text" 
                  id="signup-names" 
                  name="lastName" 
                  value={lastName} 
                  onChange={(e) => onInputChange(e)}
                  placeholder="Enter your last name..."
                  required/>
                <br />
              </div>
              <div className="signup-row">
              <label htmlFor="phonenumber" id="signup-phnum">
                  Phone Number
                </label>
                <br />
              <div className="signup-phone-input">
                        <PhoneInput
                            inputStyle={ {

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                width: "446px",
                                height: "47px",
                                gap: "2px",
                                padding: "10px 16px 10px 17px",
                                marginTop: "-40px",
                                marginRight: "-120px",
                                border: "1px solid #828282",
                                borderRadius: "4px",
                                paddingLeft:"50px"

                        }
                            }

                            country={'us'}
                            value={user.phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Enter your Phone Number..."


                            inputProps={{
                                required: true,
                                autoFocus: true,
                            }}
                        />

                           </div>
              
              </div>

              <div className="signup-row">
              <label htmlFor="email" id="signup-mail">
                Email Address
              </label>
              <br />
              <input 
                type="email" 
                id="signup-emailadd" 
                name="email"  
                value={email} 
                onChange={(e) => onInputChange(e)}
                placeholder="Enter your email..."
                required/>
              <br />
              </div>

              <div className="signup-row">
              <label htmlFor="password" id="signup-paswrd">
                Password
              </label>
              <br />
              <input 
                type="password" 
                id="signup-pswrd" 
                name="password" 
                value={password} 
                onChange={(e) => onInputChange(e)}
                placeholder="Enter your Password..."
                required/>
              <br />
              </div>

              <div className="signup-row">
              <label htmlFor="confirmPassword" id="signup-cfpwd">
                Confirm Password
              </label>
              <br />
              <input 
                type="password" 
                id="signup-confirm" 
                name="confirmPassword"  
                value={confirmPassword} 
                onChange={(e) => onInputChange(e)}
                placeholder="Confirm your Password..."
                required/>
              <br />
              </div>

            <div className="signup-content">
              <p id="signup-para">
                <hr id="signup-horizontal" /> 
                <span id="signup-or">OR</span>
                <span><hr id="signup-hori" /></span>
              </p>


              <button id="signup-bud">
                <img src={google} id="signup-goog" />
                <span id="signup-sign" />
                Sign in with Google
              </button>
              <button type="submit" id="signup-button">
                <span id="signup-signup">SIGNUP</span>
              </button>
              <footer>
                Already have an account ?
                <Link to="/login" id="signup-log"> Log In here</Link>
              </footer>
            </div>
            </form>

          
          </div>


          <div className={`signup-modal ${showModal ? 'show' : ''}`}>
              <div className="signup-modal-container">
                    <div className="signup-modal-content">
                      <div className="signup-modal-title">
                        <Modal.Title>
                          {status ? successMessage : errorMessage}
                        </Modal.Title>
                      </div>
                      <div className="signup-modal-icon">
                          <img src={icon} alt="modal icon"/>
                      </div>
                        <div className="signup-modal-body">
                          <Modal.Body>
                            <div className="signup-modal-body-text">
                            {modalMessage}
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                            <button className="signup-modal-button" onClick={handleModalButton}>
                              {status===true ? "Return to Login" : "Return to Sign Up"}
                            </button>
                        </Modal.Footer>
                    </div>
              </div>
          </div>
          
      </div>
              )}
              </div>
    
  );
};

export default SignUp;