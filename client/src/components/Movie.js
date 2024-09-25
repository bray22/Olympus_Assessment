import React from 'react';

const Movie = ({ movie }) => {
    if (!movie) return null;

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Language: {movie.language}</p>
            <p>Director: {movie.director}</p>
            <p>Year of Release: {movie.yearOfRelease}</p>
            <p>Price: ${movie.price}</p>
        </div>
    );
};

export default Movie;