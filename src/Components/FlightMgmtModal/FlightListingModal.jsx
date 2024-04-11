import React, { useState } from 'react';
import './FlightListingModal.css';
import DeleteModal from "../DeleteModalPage/DeleteModal.jsx";

const FlightListingModal = ({ onClose, onConfirm, onEdit, onCancel, onDelete, flightIndex }) => {
    const [showModal, setShowModal] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    const handleConfirmClick = () => {
        onConfirm(flightIndex);
    };

    const handleEdit = () => {
        onEdit(flightIndex);
    };


    const handleCancel = () => {
        onCancel(flightIndex);
    };


    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(flightIndex);
        setShowDeleteModal(false); // Close the delete modal after confirming
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false); // Close the delete modal when canceled
    };

    return (
        <div className={showModal ? 'modal-overlays' : 'hides'}>
            <div className="modals">
                <div className="modal-buttonss">
                    <button onClick={handleEdit}>Edit/Modify</button>
                    <button onClick={handleConfirmClick}>Confirm</button>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleDelete}>Delete</button>
                    {showDeleteModal && (
                        <DeleteModal handleDelete={handleConfirmDelete} handleCancel={handleCancelDelete} />
                    )}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default FlightListingModal;
