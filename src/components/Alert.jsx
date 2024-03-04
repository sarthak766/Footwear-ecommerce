// Alert.js
import React, { useEffect } from 'react';

const Alert = ({ message, showAlert, onClose }) => {
    useEffect(() => {
        let timer;
        if (showAlert) {
            timer = setTimeout(() => {
                onClose();
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [showAlert, onClose]);

    const alertStyle = {
        display: showAlert ? 'block' : 'none',
        position: 'fixed',
        top: '0',
        right: '0',
        zIndex: '50',
        padding: '1rem',
    };

    const boxStyle = {
        backgroundColor: '#48BB78',
        color: '#FFF',
        borderRadius: '0.375rem',
        padding: '1rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={alertStyle}>
            <div style={boxStyle}>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Alert;
