import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const { title } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const response = await fetch('https://localhost:7021/api/Movies');
            const data = await response.json();
            const foundMovie = data.find(m => m.title === decodeURIComponent(title));
            setMovie(foundMovie);
        };

        fetchMovieDetail();
    }, [title]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Year of Release:</strong> {movie.year_of_release}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Price:</strong> ${movie.price.toFixed(2)}</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Available Copies:</strong> {movie.availableCopies}</p> {/* Display available copies */}
            {/* Add any additional details you want to show */}
            <button className="button">Rent Movie</button>
        </div>
    );
};

export default Movie;