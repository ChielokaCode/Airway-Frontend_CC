import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import "./Verify.css";
import axios from "axios";

const Verify = () => {
    const { token } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
    
        axios.get(`http://localhost:8080/api/v1/auth/verifyRegistration?token=${token}`)
          .then(response => {
            if (response.data === 'User Verified Successfully') {
              // Handle success response
              console.log('User Verified Successfully');
              setInfo(response.data);
            } else {
              // Handle other response
              console.log('User signed up');
            }
          })
          .catch(error => {
            // Handle error
            console.error('Error fetching data:', error);
          });
      }, []);
    

    console.log(token);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `http://localhost:8080/api/v1/auth/verifyRegistration/${token}`,
    //                 {
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     withCredentials: true,
    //                 }
    //             );
    //             console.log(token);
    //             setInfo(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, [token]); 

    return (
        <div className="verify-container">
            {info ? <h1>{info}</h1> : <p>Loading...</p>}
           <Link to="/login"><button className="verify-button">Back to Login</button></Link>
        </div>
    );
};


export default Verify;