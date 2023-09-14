import React from 'react';
import { Toast } from 'react-bootstrap';

function ToastComponent({ show, message, variant, onClose }) {
    return (
        <Toast show={show} onClose={onClose} autohide className={`bg-${variant}`}>
            <Toast.Header className="d-flex justify-content-between">Error</Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default ToastComponent;
