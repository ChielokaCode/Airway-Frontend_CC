import React, { useEffect, useState } from 'react';
import './EditFlight.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import addImg from "/src/assets/add.png";
import addImg1 from "/src/assets/add1.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditFlight = () => {
    const navigate = useNavigate();
    const {flightId} = useParams()
    const [showForms, setShowForms] = useState(true);
    const [departureOptions, setDepartureOptions] = useState([]);
    const [arrivalOptions, setArrivalOptions] = useState([]);
    // const flightId = 1;
    const [formData, setFormData] = useState({
        airlineName: 'Dana Air',
        departureDate: '',
        duration: '',
        departureTime: '',
        arrivalPortName: '',
        departurePortName: '',
        totalSeat: '',
        classes: [
            {
                className: 'Business',
                baseFare: '',
                baggageAllowance: '',
                taxFee: '',
                surchargeFee: '',
                serviceCharge: '',
                numOfSeats: '',
                seat: {
                    seatAlphabet: 'B',
                    totalNumberOfSeat: '20'
                }
            },
            {
                className: 'Economy',
                baseFare: '',
                baggageAllowance: '',
                taxFee: '',
                surchargeFee: '',
                serviceCharge: '',
                numOfSeats: '',
                seat: {
                    seatAlphabet: 'E',
                    totalNumberOfSeat: '30'
                }
            },
            {
                className: 'Premium',
                baseFare: '',
                baggageAllowance: '',
                taxFee: '',
                surchargeFee: '',
                serviceCharge: '',
                numOfSeats: '',
                seat: {
                    seatAlphabet: 'P',
                    totalNumberOfSeat: '30'
                }
            }
        ]
    });

    useEffect(() => {
        const fetchPorts = async () => {
            try {
                const response = await fetch('http://localhost:8080/airports/all-airports');
                if (!response.ok) {
                    throw new Error('Failed to fetch airports');
                }
                const allPorts = await response.json();
                setDepartureOptions(allPorts);
                setArrivalOptions(allPorts);
            } catch (error) {
                console.error('Error fetching ports:', error);
            }
        };

        fetchPorts();
    }, []);

    const handleSubmit = async (e) => {
        console.log(flightId);
        e.preventDefault();
        try {
            const token = localStorage.getItem("jwtToken");
            const response = await fetch(`http://localhost:8080/api/v1/flights/update-flight/${flightId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                AllowCredentials:true,
                body: JSON.stringify(formData),
            });
            toast('Flight information updated successfully!');
            setTimeout(() => {
                navigate("/flight-listing");
            }, 3000);

            if (!response.ok) {
                alert('Failed to update flight')
                throw new Error('Failed to update flight');
            }
        } catch (error) {
            console.error('Error updating flight:', error);
            toast('Error updating flight. Please try again.');
        }
    };

    const handleChange = (e, index, classNameIndex) => {
        const { name, value } = e.target;

        if (classNameIndex !== undefined) {
            const updatedClasses = [...formData.classes];
            updatedClasses[classNameIndex] = {
                ...updatedClasses[classNameIndex],
                [name]: value
            };
            setFormData(prevState => ({
                ...prevState,
                classes: updatedClasses
            }));
        } else if (index !== undefined) {
            if (name.includes("seat.")) {
                const [objectKey, nestedKey] = name.split(".");
                setFormData(prevState => ({
                    ...prevState,
                    classes: prevState.classes.map((item, idx) => idx === index ? {
                        ...item,
                        seat: {
                            ...item.seat,
                            [nestedKey]: value
                        }
                    } : item)
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            }
        } else {
            // Handle changes for fields within the main form
            if (name === "departurePortName" || name === "arrivalPortName") {
                // For departure and arrival ports, find the corresponding option and set it as selected
                const selectedOption = Array.from(e.target.options).find(option => option.value === value);
                selectedOption.selected = true;
            }
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const toggleForms = () => {
        setShowForms(!showForms);
    };

    return (
        <div className={'allpage-form'}>
            <div className="add-container-edit">
                <img src={addImg} alt="+" className="icon11" onClick={toggleForms} />
                <h2>Edit Flights</h2>
            </div>

            <FlightForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
                departureOptions={departureOptions}
                arrivalOptions={arrivalOptions}
            />

            {showForms && (
                <>
                    <FlightForm2 title="Economy" handleChange={handleChange} index={1} formData={formData.classes} />
                    <FlightForm2 title="Business" handleChange={handleChange} index={0} formData={formData.classes} />
                    <FlightForm2 title="Premium" handleChange={handleChange} index={2} formData={formData.classes} />
                </>
            )}
            <div className="save-container">
                <button type="submit" className="save-button" onClick={handleSubmit}>
                    <img src={addImg1} alt="+" />
                    <h2 className={'iconn11'}>Save</h2>
                </button>
            </div>
        </div>
    );
};

const FlightForm = ({ handleSubmit, handleChange, formData, departureOptions, arrivalOptions }) => {
    return (
        <form onSubmit={handleSubmit} className="form-container-edit">
            {/*<h2>Main Form</h2>*/}
            <div className="flight-form">
                <div className="add-form-row">
                    <div className="add-input-group">
                        <label htmlFor="airlineName">Flight Number</label>
                        <input type="text" id="airlineNam" name="airlineNam"   placeholder='AW001' onChange={handleChange} readOnly="readOnly"/>
                    </div>

                    <div className="add-input-group">
                        <label htmlFor="totalSeat">Number of Seats</label>
                        <input type="text" id="totalSeat" name="totalSeat" value={formData.totalSeat} onChange={handleChange} />
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="duration">Flight Duration</label>
                        <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange}/>
                    </div>
                </div>
                <div className="add-form-row">
                    <div className="add-input-group">
                        <label htmlFor="departurePortName">Departure Airport</label>
                        <select id="departurePortName" name="departurePortName" value={formData.departurePortName} onChange={handleChange}>
                            <option>Select</option>
                            {departureOptions.map((option) => (
                                <option key={option.iataCode} value={option.iataCode}>{option.city} - {option.iataCode}</option>
                            ))}
                        </select>
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="departureDate">Departure Date</label>
                        <input type="date" id="departureDate" name="departureDate" value={formData.departureDate} onChange={handleChange} />
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="departureTime">Departure Time</label>
                        <input type="time" id="departureTime" name="departureTime" value={formData.departureTime} onChange={handleChange} />
                    </div>
                </div>
                <div className="add-form-row">
                    <div className="add-input-group">
                        <label htmlFor="arrivalPortName">Arrival Airport</label>
                        <select id="arrivalPortName" name="arrivalPortName" value={formData.arrivalPortName} onChange={handleChange}>
                            <option>Select</option>
                            {arrivalOptions.map((option) => (
                                <option key={option.iataCode} value={option.iataCode}>{option.city} - {option.iataCode}</option>
                            ))}
                        </select>
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="arrivalPortName">Arrival Date</label>
                        <input type="date" id="arrivalDate" name="arrivalPortName" value={formData.arrivalDate} onChange={handleChange}/>

                    </div>
                    <div className="add-input-group">
                        <label htmlFor="arrivalPortName">Arrival Time</label>
                        <input type="time" id="arrivalTime" name="arrivalPortName" value={formData.arrivalTime} onChange={handleChange}/>

                    </div>
                </div>
            </div>
        </form>
    );
};

const FlightForm2 = ({ handleChange, formData, title,index }) => {

    console.log("**************")
    console.log(formData)
    return (
        <form className="form-container-edit">
            <h2>{title}</h2>
            <div className="flight-form">
                <div className="add-form-row">

                    <div className="add-input-group">
                        <label htmlFor="totalNumberOfSeat">Number of Seats</label>
                        <input type="text" id="totalNumberOfSeat" name="seat.totalNumberOfSeat" value={formData[index].seat.totalNumberOfSeat} onChange={(e) => handleChange(e, index)} />
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="seatAlphabet">Seat Codes</label>
                        <input type="text" id="seatAlphabet" name="seat.seatAlphabet" value={formData[index].seat.seatAlphabet} onChange={(e) => handleChange(e, index)}  readOnly="readOnly"/>
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="baseFare">Base Fare</label>
                        <input type="text" id="baseFare" name="baseFare" value={formData[index].baseFare} onChange={(e) => handleChange(e, undefined, index)} />
                    </div>

                </div>
                <div className="add-form-row">
                    <div className="add-input-group">
                        <label htmlFor="taxFee">Tax</label>
                        <input type="text" id="taxFee" name="taxFee" value={formData[index].taxFee} onChange={(e) => handleChange(e, undefined, index)} />
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="surchargeFee">Surcharge</label>
                        <input type="text" id="surchargeFee" name="surchargeFee" value={formData[index].surchargeFee} onChange={(e) => handleChange(e, undefined, index)} />
                    </div>
                    <div className="add-input-group">
                        <label htmlFor="serviceCharge">Service Charge</label>
                        <input type="text" id="serviceCharge" name="serviceCharge" value={formData[index].serviceCharge} onChange={(e) => handleChange(e, undefined, index)}/>
                    </div>
                </div>
                <div className="add-form-row">
                    <div className="add-input-group">
                        <label htmlFor="baggageAllowance">Baggage Allowance</label>
                        <input type="text" id="baggageAllowance" name="baggageAllowance" value={formData[index].baggageAllowance} onChange={(e) => handleChange(e, undefined, index)} />
                    </div>


                </div>
            </div>
            <ToastContainer/>
        </form>
    );
};

export default EditFlight;