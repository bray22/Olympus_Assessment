import React, { useState } from 'react';
import Movies from './components/Movies';
import Movie from './components/Movie';
import CheckoutMovie from './components/CheckoutMovie';
import ReturnMovie from './components/ReturnMovie';

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedMovies, setSelectedMovies] = useState([]);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        setSelectedMovies((prev) => [...prev, movie]);
    };

    return (
        <div>
            <h1>Movie Rental Application</h1>
            <Movies onSelectMovie={handleSelectMovie} />
            <Movie movie={selectedMovie} />
            <CheckoutMovie selectedMovies={selectedMovies} />
            <ReturnMovie selectedMovies={selectedMovies} />
        </div>
    );
};

export default App;