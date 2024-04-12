import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProfile = ({ userId }) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        country: '',
        phoneNumber: '',
        email: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/user/get-user/${userId}`);
                const userDataFromApi = response.data; // Assuming the response is in the expected format
                setUserData(userDataFromApi);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleEdit = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="infoLowerAdult-container">
            <div className="infoLowerAdult">
                <div className="blueTabAdult">
                    <p>Hi! {userData.firstName},  Welcome to your Dashboard</p>
                </div>
                <div className="passenger-form-adult">
                    <div className="grid-container-adult">
                        <div className="grid-item-adult">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" className="input-fieldA" value={userData.firstName} readOnly />
                        </div>
                        <div className="grid-item-adult">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="input-fieldA" value={userData.lastName} readOnly />
                        </div>
                        <div className="grid-item-adult">
                            <label htmlFor="gender">Gender</label>
                            <input type="text" id="gender" name="gender" placeholder="Gender" className="input-fieldA" value={userData.gender} readOnly />
                        </div>
                        <div className="grid-item-adult">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input type="text" id="dateOfBirth" name="dateOfBirth" placeholder="Date of Birth" className="input-fieldA" value={userData.dateOfBirth} readOnly />
                        </div>
                        <div className="grid-item-adult">
                            <label htmlFor="country">Nationality</label>
                            <input type="text" id="country" name="country" placeholder="Nationality" className="input-fieldA" value={userData.country} readOnly />
                        </div>
                        <div className="grid-item-adult">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="input-fieldA" value={userData.phoneNumber} readOnly />
                        </div>
                        <div className="grid-item-adult">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id="email" name="email" placeholder="Email Address" className="input-fieldA" value={userData.email} readOnly />
                        </div>
                    </div>
                </div>
                <div className="progress-button-container-adult">
                    <button className="back-button-adult" onClick={() => navigate('/')}>Back</button>
                    <button className="continue-button-adult" onClick={handleEdit}>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
