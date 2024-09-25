// src/App.tsx

import React, { useState } from 'react';
import Movies from './components/Movies';
import Movie from './components/Movie';
import CheckoutMovie from './components/CheckoutMovie';
import ReturnMovie from './components/ReturnMovie';
import './styles/style.scss'; // Import SASS styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieType } from './types'; // Import your types

const App: React.FC = () => {
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
    const [selectedMovies, setSelectedMovies] = useState<MovieType[]>([]);

    const handleSelectMovie = (movie: MovieType) => {
        setSelectedMovie(movie);
        setSelectedMovies((prev) => [...prev, movie]);
    };

    return (
        <Router>
            <div>
                <nav className="navbar">
                    <h1>Movie Rental Application</h1>
                </nav>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/:title" element={<Movie />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
