// src/components/CheckoutMovie.tsx
import React from 'react';
import { Movie } from '../types';

interface CheckoutMovieProps {
    selectedMovies: Movie[];
    onCheckout: () => void; // Function to handle the checkout action
}

const CheckoutMovie: React.FC<CheckoutMovieProps> = ({ selectedMovies, onCheckout }) => {
    return (
        <div className="checkout">
            <h2>Checkout</h2>
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
                    <button className="button" onClick={onCheckout}>Confirm Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CheckoutMovie;
