import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOVIE_ENDPOINT, LOADING_MESSAGE } from './MovieConstants'; 

const Movie = () => {
    const { title } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const response = await fetch(MOVIE_ENDPOINT);
            const data = await response.json();
            const foundMovie = data.find(m => m.title === decodeURIComponent(title));
            setMovie(foundMovie);
        };

        fetchMovieDetail();
    }, [title]);

    // Show loading if fetching
    if (!movie) {
        return <div>{LOADING_MESSAGE}</div>;
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
            <button className="button">Rent Movie</button>
        </div>
    );
};

export default Movie;