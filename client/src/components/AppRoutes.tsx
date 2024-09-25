// src/components/AppRoutes.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import CheckoutMovie from './CheckoutMovie';
import MovieDetail from './MovieDetail';
import { Movie } from '../types';

const AppRoutes: React.FC<{ onSelectMovie: (movie: Movie) => void }> = ({ onSelectMovie }) => {
    return (
        <Routes>
            <Route path="/" element={<Movies onSelectMovie={onSelectMovie} />} />
            <Route path="/movies/:title" element={<MovieDetail onAddToCart={function (movie: Movie): void {
          throw new Error('Function not implemented.');
        } } />} />
            <Route path="/checkout" element={<CheckoutMovie selectedMovies={[]} onCheckout={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
        </Routes>
    );
};

export default AppRoutes;
