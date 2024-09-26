// src/components/AppRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import CheckoutMovie from './CheckoutMovie';
import MovieDetail from './MovieDetail';
import { Movie } from '../types';

interface AppRoutesProps {
    onSelectMovie: (movie: Movie) => void; // Single movie for adding/removing
    selectedMovies: Movie[]; // Selected movies for checkout
    onCheckout: () => void; // Checkout function
}

const AppRoutes: React.FC<AppRoutesProps> = ({ onSelectMovie, selectedMovies, onCheckout }) => {
    return (
        <Routes>
            <Route path="/" element={<Movies onSelectMovie={onSelectMovie} selectedMovies={selectedMovies} />} />
            <Route 
                path="/movies/:title" 
                element={<MovieDetail onAddToCart={onSelectMovie} />} // Handle add to cart from detail page
            />
            <Route 
                path="/checkout" 
                element={<CheckoutMovie selectedMovies={selectedMovies} onCheckout={onCheckout} />} 
            />
        </Routes>
    );
};

export default AppRoutes;
