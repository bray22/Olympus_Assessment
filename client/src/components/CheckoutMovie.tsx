import React, { useState } from 'react';
import { Movie } from '../types';

import { CHECKOUT_CONFIRM_MESSAGE, 
    CHECKOUT_CONFIRM_TIMEOUT_DURATION, 
    CHECKOUT_EMPTY_MESSAGE } from '../constants/MovieConstants';

interface CheckoutMovieProps {
    selectedMovies: Movie[];
    onCheckout: (selectedMovies: Movie[]) => void; // Function to handle the checkout action with Movie objects
}

const CheckoutMovie: React.FC<CheckoutMovieProps> = ({ selectedMovies, onCheckout }) => {
    const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); // State for confirmation message

    // Checkout process
    const handleCheckout = () => {
        onCheckout(selectedMovies); // Pass the selected movies directly
        setConfirmationMessage(CHECKOUT_CONFIRM_MESSAGE); // Set confirmation message

        // Clear confirmation message after the specified timeout duration
        setTimeout(() => setConfirmationMessage(null), CHECKOUT_CONFIRM_TIMEOUT_DURATION);
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {confirmationMessage && ( // Display confirmation
                <p className="confirmation-message" style={{ color: 'green' }}>
                    {confirmationMessage}
                </p>
            )}
            {selectedMovies.length === 0 ? (
                <p>{CHECKOUT_EMPTY_MESSAGE}</p> // Use constant for empty message
            ) : (
                <div>
                    <ul>
                        {selectedMovies.map((movie) => (
                            <li key={movie.title}>
                                {movie.title} - ${movie.price.toFixed(2)} (Director: {movie.director})
                            </li>
                        ))}
                    </ul>
                    <button className="button" onClick={handleCheckout}>Confirm Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CheckoutMovie;
