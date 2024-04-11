import React, { useState } from "react";
import "./Tripsumary.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

function TripsumaryPage() {
    return (
      
        <div>
    
      
        <section>
          <div className="sumri">
             <h5> Your trip summary </h5>
          </div>


           
         

          <div className="create">
              <p className="logo1">
                {' '}
                <img src="/public/images/Vector.svg" id="logs" />{' '}
                <span id="wor">Departure</span>
              </p>
              
            </div>



              {/* <span>
                <input type="tel" id="phonenumber" name="phone_number" value={phoneNumber}onChange={(e) => onInputChange(e)}
                placeholder="Enter your Phone Number..."
                required/>
              </span>
              <br /> */}

              
            

               
         
        </section>
      </div>

    );
  };
  
  export default TripsumaryPage