// src/components/MovieDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie as MovieType } from '../types';

interface MovieDetailProps {
    onAddToCart: (movie: MovieType) => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ onAddToCart }) => {
    const { title } = useParams<{ title: string | undefined }>(); // Allow title to be undefined
    const [movie, setMovie] = useState<MovieType | null>(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            if (!title) return; // If title is undefined, exit early

            const response = await fetch('https://localhost:7021/api/Movies');
            const data: MovieType[] = await response.json();
            const foundMovie = data.find(m => m.title === decodeURIComponent(title));

            setMovie(foundMovie || null); // Set movie to null if not found
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
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Price:</strong> ${movie.price.toFixed(2)}</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Available Copies:</strong> {movie.availableCopies}</p>
            <button className="button" onClick={() => onAddToCart(movie)}>Add to Cart</button>
        </div>
    );
};

export default MovieDetail;
