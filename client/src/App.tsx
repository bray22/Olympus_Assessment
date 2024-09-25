// src/App.tsx
import React, { useState } from 'react';
import Movies from './components/Movies';
import Movie from './components/Movie';
import CheckoutMovie from './components/CheckoutMovie';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Movie as MovieType } from './types';
import MovieDetail from './components/MovieDetail';
import './styles/style.scss'; // Import your styles here
const App: React.FC = () => {
    const [selectedMovies, setSelectedMovies] = useState<MovieType[]>([]);

    const handleAddToCart = (movie: MovieType) => {
        setSelectedMovies(prev => [...prev, movie]);
    };

    const handleCheckout = () => {
        // Here you can handle checkout logic (e.g., clear cart, make API call, etc.)
        alert('Checkout successful!');
        setSelectedMovies([]); // Clear the cart after checkout
    };

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Movies onSelectMovie={handleAddToCart} />} />
                    <Route path="/movies/:title" element={<MovieDetail onAddToCart={handleAddToCart} />} />
                    <Route path="/checkout" element={<CheckoutMovie selectedMovies={selectedMovies} onCheckout={handleCheckout} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
