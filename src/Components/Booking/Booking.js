import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const{categoriesId}=useParams()
    return (
        <div>
            <h1>This is Booking page</h1>
        </div>
    );
};

export default Booking;