import React from 'react';
import { Movie } from '../types';

interface ModalProps {
    movie: Movie; // Adjust type as necessary
    onClose: () => void;
    onSelectMovie: (movie: Movie) => void; // Prop for adding/removing from cart
    selectedMovies: Movie[]; // Prop to check if the movie is selected
}

const Modal: React.FC<ModalProps> = ({ movie, onClose, onSelectMovie, selectedMovies }) => {
    if (!movie) return null; // Return null if no movie is selected

    // Check if the movie is already in the cart
    const isSelected = selectedMovies.some(selected => selected.title === movie.title);

    // Handle clicks on the overlay to close the modal
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    // Handle Add to Cart button click
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Prevent overlay click
        onSelectMovie(movie); // Call the function to add/remove from cart
        // Optionally close the modal after adding to cart
        onClose(); 
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <span className="modal-close" onClick={onClose}>&times;</span> {/* X icon */}
                <h2>{movie.title}</h2>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Price:</strong> ${movie.price.toFixed(2)}</p>
                <p><strong>Language:</strong> {movie.language}</p>
                <p><strong>Available Copies:</strong> {movie.availableCopies}</p>

                {/* Add to Cart Button */}
                <button 
                    className="button" 
                    onClick={handleAddToCart}
                    disabled={movie.availableCopies === 0} // Disable button if no copies available
                >
                    {isSelected ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default Modal;
