import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = ({ onSelectMovie }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://localhost:7021/api/Movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Available Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.title}>
                        <span>{movie.title} - Copies Available: {movie.availableCopies}</span>
                        <button onClick={() => onSelectMovie(movie)}>View Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;