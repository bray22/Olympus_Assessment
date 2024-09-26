import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import CheckoutMovie from './components/CheckoutMovie';
import ReturnMovie from './components/ReturnMovie';
import { Movie } from './types';
import Header from './components/Header'; // Assuming you have a Header component
import axios from 'axios';
import './styles/style.scss';

const App: React.FC = () => {
    const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
    const [checkedOutMovies, setCheckedOutMovies] = useState<Movie[]>([]);

    const handleAddToCart = (movie: Movie) => {
        const existingMovie = selectedMovies.find(selected => selected.title === movie.title);
        if (existingMovie) {
            setSelectedMovies(selectedMovies.filter(selected => selected.title !== movie.title)); // Remove movie from cart
        } else {
            setSelectedMovies([...selectedMovies, movie]); // Add movie to cart
        }
    };

    const handleCheckout = async () => {
        const titlesToCheckout = selectedMovies.map(movie => movie.title);
        try {
            await axios.post('https://localhost:7021/api/movies/checkout', titlesToCheckout);
            setCheckedOutMovies(selectedMovies); // Update the checked-out movies state
            setSelectedMovies([]); // Clear the cart after checkout
        } catch (error) {
            console.error('Error checking out movies:', error);
        }
    };

    const handleReturnMovies = () => {
        setCheckedOutMovies([]); // Reset the checked-out movies list after returning
    };

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Movies onSelectMovie={handleAddToCart} selectedMovies={selectedMovies} checkedOutMovies={checkedOutMovies} />} />
                <Route path="/checkout" element={<CheckoutMovie selectedMovies={selectedMovies} onCheckout={handleCheckout} />} />
                <Route path="/return" element={<ReturnMovie selectedMovies={checkedOutMovies} onReturnMovies={handleReturnMovies} />} />
            </Routes>
        </div>
    );
};

export default App;
