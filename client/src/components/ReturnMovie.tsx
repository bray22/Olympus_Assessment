import React, { useState } from 'react';
import axios from 'axios';
import { Movie } from '../types'; 
// Import constants
import { RETURN_ENDPOINT, SUCCESS_RETURN_MESSAGE, ERROR_RETURN_MESSAGE, RETURN_CONFIRM_TIMEOUT_DURATION } from '../constants/MovieConstants';

interface ReturnMoviesProps {
    selectedMovies: Movie[]; 
    onReturnMovies: () => void; 
}

const ReturnMovies: React.FC<ReturnMoviesProps> = ({ selectedMovies, onReturnMovies }) => {
    const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); // State for confirmation message

    const handleReturn = async () => {
        const titles = selectedMovies.map(movie => movie.title);
        try {
            await axios.post(RETURN_ENDPOINT, titles);
            setConfirmationMessage(SUCCESS_RETURN_MESSAGE); // Set confirmation message
            onReturnMovies(); // Refresh the selected movies state in the parent

            // Clear confirmation message after 3 seconds
            setTimeout(() => setConfirmationMessage(null), 3000);
        } catch (error) {
            console.error(ERROR_RETURN_MESSAGE, error);
            setConfirmationMessage('Failed to return movies. Please try again.'); // Set error message
        }
    };

    return (
        <div className='return-movies-container'>
            <h2>Return Movies</h2>
            {confirmationMessage && ( // Conditionally render the confirmation message at the top
                <p className="confirmation-message" style={{ color: 'green' }}>
                    {confirmationMessage}
                </p>
            )}
            {selectedMovies.length === 0 ? (
                <p>No movies selected for return.</p>
            ) : (
                <div>
                    <ul>
                        {selectedMovies.map(movie => (
                            <li key={movie.title}>
                                {movie.title} - ${movie.price.toFixed(2)} (Director: {movie.director})
                            </li>
                        ))}
                    </ul>
                    <button className="button" onClick={handleReturn}>Return Selected Movies</button>
                </div>
            )}
        </div>
    );
};

export default ReturnMovies;
