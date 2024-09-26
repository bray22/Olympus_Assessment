import React, { useState } from 'react';
import { Movie } from '../types';

interface CheckoutMovieProps {
    selectedMovies: Movie[];
    onCheckout: (selectedMovies: Movie[]) => void; // Function to handle the checkout action with Movie objects
}

const CheckoutMovie: React.FC<CheckoutMovieProps> = ({ selectedMovies, onCheckout }) => {
    const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); // State for confirmation message

    // Function to handle the checkout process
    const handleCheckout = () => {
        onCheckout(selectedMovies); // Pass the selected movies directly
        setConfirmationMessage('Checkout confirmed!'); // Set confirmation message
        
        // Clear confirmation message after 3 seconds
        setTimeout(() => setConfirmationMessage(null), 3000);
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {/* Display confirmation message above the movies list */}
            {confirmationMessage && ( // Conditionally render the confirmation message
                <p className="confirmation-message" style={{ color: 'green' }}>
                    {confirmationMessage}
                </p>
            )}
            {selectedMovies.length === 0 ? (
                <p>No movies selected for checkout.</p>
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
