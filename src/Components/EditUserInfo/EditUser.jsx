import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import moment from "moment";

const nationalities = [
    "",
    "Afghanistan",
    "Algeria",
    "Angola",
    "Australia",
    "Austria",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Canada",
    "China",
    "Colombia",
    "Czech Republic",
    "Denmark",
    "Dominican Republic",
    "Egypt",
    "Ethiopia",
    "France",
    "Germany",
    "Ghana",
    "Greece",
    "Hungary",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Italy",
    "Japan",
    "Kenya",
    "Madagascar",
    "Mexico",
    "Morocco",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Pakistan",
    "Papua New Guinea",
    "Philippines",
    "Poland",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sudan",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "United States",
    "Vietnam"
];

const genders = ['','MALE', 'FEMALE'];

const EditUser = ({ userId }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: null,
        dateOfBirth: null,
        country: '',
        phoneNumber: '',
        email: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/user/get-user/${userId}`);
                const userData = response.data; // assuming the response is in the expected format
                setFormData(prevData => ({
                    ...prevData,
                    firstName: userData.firstName || '',
                    lastName: userData.lastName || '',
                    gender: userData.gender || '',
                    dateOfBirth: userData.dateOfBirth ? moment(userData.dateOfBirth).toDate() : null,
                    country: userData.country || '',
                    phoneNumber: userData.phoneNumber || '',
                    email: userData.email || '',
                }));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleDateChange = useCallback((date) => {
        setFormData(prevData => ({ ...prevData, dateOfBirth: date }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("jwtToken");
            const formattedDateOfBirth = formData.dateOfBirth ? moment(formData.dateOfBirth).format('YYYY-MM-DD') : '';

            const response = await axios.put(
                `http://localhost:8080/api/v1/user/edit-user/${userId}`,
                {
                    ...formData,
                    dateOfBirth: formattedDateOfBirth
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                const userFirstName = `"${response.data.firstName}"`;
                localStorage.setItem("userFirstName", userFirstName);

                navigate('/user-profile');
            } else {
                console.error('Failed to submit data to the API');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="infoLowerAdult-container">
                <div className="infoLowerAdult">
                    <div className="blueTabAdult">
                        <p>Edit Your Information</p>
                    </div>
                    <div className="passenger-form-adult">
                        <div className="grid-container-adult">
                            <FormField label="First Name" name="firstName" type="text" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
                            <FormField label="Last Name" name="lastName" type="text" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
                            <FormField label="Gender" name="gender" type="select" value={formData.gender} options={genders} onChange={handleChange} required />
                            <div className="grid-item-adult">
                                <label htmlFor="dateOfBirth" className="dob-label">Date of Birth</label>
                                <div className="input-with-icon-adult">
                                    <MemoizedDatePicker
                                        selected={formData.dateOfBirth}
                                        onChange={handleDateChange}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="DD-MM-YYYY"
                                        className="input-fieldA dob-inputA"
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={500}
                                        minDate={new Date("1890-01-01")}
                                        required
                                    />
                                    <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                                </div>
                            </div>
                            <FormField label="Nationality" name="country" type="select" value={formData.country} options={nationalities} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="contact-info-headline-adult">
                        <h2>Contact Information</h2>
                    </div>
                    <div className="contact-info-form-adult">
                        <div className="grid-container-adult">
                            <FormField label="Phone Number" name="phoneNumber" type="tel" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} />
                            <FormField label="Email address" name="email" type="email" placeholder="Please enter your valid email address" value={formData.email} onChange={handleChange} readOnly />
                        </div>
                    </div>
                    <div className="progress-button-container-adult">
                        <button className="back-button-adult" onClick={() => navigate(-1)}>Back</button>
                        <button type="submit" className="continue-button-adult">Save Edit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

const MemoizedDatePicker = React.memo(DatePicker);

const FormField = ({ label, name, type, placeholder, value, options, onChange, required, readOnly }) => (
    <div className="grid-item-adult">
        <label htmlFor={name}>{label}</label>
        {type === "select" ? (
            <select id={name} name={name} className="input-fieldA" value={value} onChange={onChange} required={required} readOnly={readOnly}>
                <option disabled hidden>Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        ) : (
            <input type={type} id={name} name={name} placeholder={placeholder} className="input-fieldA" value={value} onChange={onChange} required={required} readOnly={readOnly} />
        )}
    </div>
);

export default EditUser;
