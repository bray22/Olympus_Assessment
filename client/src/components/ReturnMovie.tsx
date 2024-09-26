import React, { useState } from 'react';
import axios from 'axios';
import { Movie } from '../types'; // Ensure you import the Movie type

interface ReturnMoviesProps {
    selectedMovies: Movie[]; // Array of selected (checked-out) movies
    onReturnMovies: () => void; // Callback to refresh or update the state in the parent component
}

const ReturnMovies: React.FC<ReturnMoviesProps> = ({ selectedMovies, onReturnMovies }) => {
    const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); // State for confirmation message

    const handleReturn = async () => {
        const titles = selectedMovies.map(movie => movie.title);
        try {
            await axios.post('https://localhost:7021/api/movies/return', titles);
            setConfirmationMessage('Movies returned successfully!'); // Set confirmation message
            onReturnMovies(); // Refresh the selected movies state in the parent

            // Clear confirmation message after 3 seconds
            setTimeout(() => setConfirmationMessage(null), 3000);
        } catch (error) {
            console.error('Error returning movies:', error);
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
