import React, { useEffect } from 'react';
import './DeleteModal.css';
import modalIcon from "/src/assets/Icon.svg"

const DeleteModal = ({handleDelete, handleCancel}) => {


    return (
        <div className="modalS">
            <div className="delete-modal-content">
                {/*<span className="close">&times;</span>*/}
                <h2 className="message">Delete Booking</h2>
                <div className="delete-modal-icon">
                    <img src={modalIcon}/>
                </div>
                <br/>
                <br/>
                <p className="delete-descriptions">Are you sure you want to perform this action?</p>
                <div className="delete-button-container">
                    <button className="confirmBtn" onClick={handleDelete}>Confirm</button>
                    <button className="cancelBtn" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;