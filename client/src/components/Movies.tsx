import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from '../types'; // Import MovieType

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://localhost:7021/api/Movies');
            const data: MovieType[] = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.title}>
                    <h2>{movie.title}</h2>
                    <p>Director: {movie.director}</p>
                    <p>Price: ${movie.price.toFixed(2)}</p>
                    <p>Available Copies: {movie.availableCopies}</p>
                    <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
                        <button className="button">View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Movies;