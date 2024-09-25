import React, { useState } from 'react';
import axios from 'axios';

const Checkout = ({ selectedMovies }) => {
    const [totalCost, setTotalCost] = useState(null);

    const handleCheckout = async () => {
        const titles = selectedMovies.map(movie => movie.title);
        try {
            const response = await axios.post('https://localhost:7021/api/movies/checkout', titles);
            setTotalCost(response.data);
        } catch (error) {
            console.error('Error checking out movies:', error);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <button onClick={handleCheckout}>Checkout Selected Movies</button>
            {totalCost && <p>{totalCost}</p>}
        </div>
    );
};

export default Checkout;