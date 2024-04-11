import React, { useState, useEffect } from 'react';
import AdultForm from '../Components/PassengerIformationAdult/PassengerInformationAdultLowerTab/PassengerInformationAdultLowerTab.jsx';
import ChildForm from '../Components/PassengerInformationChild/PassengerInformationChildLowerTab/PassengerInformationChildLowerTab.jsx';
import InfantForm from '../Components/PassengerInformationInfant/PassengerInformationInfantLowerTab/PassengerInformationInfantLowerTab.jsx';
import PassengerInformationAdultHeader
    from "../Components/PassengerIformationAdult/PassengerInformationAdultHeader/PassengerInformationAdultHeader.jsx";
import PassengersInformationAdultMiddleTab
    from "../Components/PassengerIformationAdult/PassengerInformationAdultMiddleTab/PassengerInformationAdultMiddleTab.jsx";
import axios from 'axios';
import PropTypes from "prop-types";
import data from "bootstrap/js/src/dom/data.js";
import {Modal} from "react-bootstrap";
import ModalPageTrip from "../Components/ModalPageTrip/ModalPageTrip.jsx"
import { useNavigate } from 'react-router-dom';
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif";
import {toast} from "react-toastify";



const PassengerFormPage = ({ onComplete }) => {
    const [formData, setFormData] = useState([]);
    const [currentPassengerIndex, setCurrentPassengerIndex] = useState(0);
    const searchDetails = JSON.parse(localStorage.getItem("searchDetails"));
    const [loading, setLoading] = useState(false);
    console.log(localStorage.getItem("selectedDepartingFlightId"));
    console.log(localStorage.getItem("selectedReturningFlightId"));


    const totalPassengers = searchDetails ? (parseInt(searchDetails.noOfAdult, 10) + parseInt(searchDetails.noOfChildren, 10) + parseInt(searchDetails.noOfInfant, 10)) : 0;
    const departingFlightData = JSON.parse(localStorage.getItem("selectedDepartingFlightId"));
    const returningFlightData = JSON.parse(localStorage.getItem("selectedReturningFlightId"));

    const flightClassIds = [];

    if (departingFlightData) {
        flightClassIds.push({ classId: departingFlightData });
    }

    if (returningFlightData) {
        flightClassIds.push({ classId: returningFlightData });
    }
console.log("flightClassIds",flightClassIds)
    const sampleBookingFlights = flightClassIds;
    console.log("sampleBookingFlights",sampleBookingFlights)


    const [showModal, setShowModal] = useState(false)
    const [bookingToken, setBookingToken] = useState('');
    const navigate = useNavigate();

    console.log(totalPassengers);



    useEffect(() => {
        console.log(formData, data);
    }, [formData]);



    useEffect(() => {
        if (formData.length === totalPassengers) {
            handleSubmitBooking({
                passengers: formData,
                bookingFlights: sampleBookingFlights

            });
        }
    }, [formData]);
    const [bearertoken, setBearerToken ] = useState("");
    useEffect(()=> {
        const jwtToken = localStorage?.getItem("jwtToken")
        if (jwtToken) {
            setBearerToken("Bearer " + jwtToken)
            console.log(bearertoken)
        }
    },[]);
    const handleSubmitBooking = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/booking/booking-flight', formData,{
               method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': bearertoken,
                },
                withCredentials:true,
            });

            console.log(response.data);
              const parts =response.data.split(':');
              const token = parts[1].trim()
            setBookingToken(token);
            console.log (bookingToken)
            setShowModal(true);
            setLoading(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            setLoading(false)
            const errorMessage =
                error.response?.data?.message ||
                "An error occurred in the process. Please try again.";

            toast.error(errorMessage);

        }
    };

    const handleFormSubmit = (category,data) => {
        console.log("Current formData:", formData);
        console.log("Current Passenger Index:", currentPassengerIndex);

        setFormData(prevData => {
            const newData = [...prevData];
            newData[currentPassengerIndex] = { ...data };
            console.log("Updated formData:", newData);
            if (currentPassengerIndex < totalPassengers - 1) {
                setCurrentPassengerIndex(currentPassengerIndex + 1);
            }
            return newData;
        });
    };


    const renderForm = () => {
        if (searchDetails) {
            if (currentPassengerIndex < searchDetails.noOfAdult) {
                return (
                    <AdultForm
                        key={currentPassengerIndex}
                        passenger={formData[currentPassengerIndex]}
                        onSubmit={(data) => handleFormSubmit('ADULT',data)}
                        navigateToPrevious={()=>setCurrentPassengerIndex(currentPassengerIndex-1)}
                    />
                );
            } else if (currentPassengerIndex < parseInt(searchDetails.noOfAdult, 10) + parseInt(searchDetails.noOfChildren)) {
                return (
                    <ChildForm
                        key={currentPassengerIndex}
                        passenger={formData[currentPassengerIndex]}
                        onSubmit={(data) => handleFormSubmit('CHILD',data)}
                        navigateToPrevious={()=>setCurrentPassengerIndex(currentPassengerIndex-1)}
                    />
                );
            } else if (currentPassengerIndex < totalPassengers) {
                return (
                    <InfantForm
                        key={currentPassengerIndex}
                        passenger={formData[currentPassengerIndex]}
                        onSubmit={(data) => handleFormSubmit('INFANT',data)}
                        navigateToPrevious={()=>setCurrentPassengerIndex(currentPassengerIndex-1)}
                    />
                );
            }
        }
    };
    const handleCloseModal =()=>{
        const confirmClose = window.confirm('Would you pay later? Payment link has been sent to your Email(24 hours Expiration)')
        if(confirmClose){
            setShowModal(false)
            navigate("/")
        }
    }

    return (
        <div>
            {loading && (
                <img className="loading-textP" src={airwayAnimationPass} alt="Loading animation"/>
            )}
            {loading || (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <PassengerInformationAdultHeader />
            <PassengersInformationAdultMiddleTab searchDetails={searchDetails} />
            {renderForm()}

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <ModalPageTrip isOpen={showModal} onClose={handleCloseModal} token = {bookingToken} />
            </Modal>

                    </div>
                )}
        </div>
    );
};
PassengerFormPage.propTypes = {
    onSubmit: PropTypes.func.isRequired, // Ensure onComplete is a function
};

export default PassengerFormPage;
