
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Movie {
    title: string;
    director: string;
    year_of_release: number;
    genre: string;
    price: number;
    language: string;
    availableCopies: number;
}

interface MoviesProps {
    onSelectMovie: (movie: Movie) => void; // Define the type for the prop
}

const Movies: React.FC<MoviesProps> = ({ onSelectMovie }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://localhost:7021/api/Movies');
            const data: Movie[] = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    const handleSelectMovie = (movie: Movie) => {
        setSelectedMovie(movie);
        onSelectMovie(movie); // Call the prop function
    };

    return (
        <div className="movies-container">
            <div className="movie-list">
                <h2>Available Movies</h2>
                <div className="scrollable-list">
                    {movies.map((movie) => (
                        <div key={movie.title} className="movie-item">
                            <Link to="#" onClick={() => handleSelectMovie(movie)}>
                                {movie.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="movie-details">
                {selectedMovie ? (
                    <div className="movie-card">
                        <h3>{selectedMovie.title}</h3>
                        <p><strong>Director:</strong> {selectedMovie.director}</p>
                        <p><strong>Year of Release:</strong> {selectedMovie.year_of_release}</p>
                        <p><strong>Genre:</strong> {selectedMovie.genre}</p>
                        <p><strong>Price:</strong> ${selectedMovie.price.toFixed(2)}</p>
                        <p><strong>Language:</strong> {selectedMovie.language}</p>
                        <p><strong>Available Copies:</strong> {selectedMovie.availableCopies}</p>
                        <button className="button">Rent Movie</button>
                    </div>
                ) : (
                    <p>Select a movie to see the details.</p>
                )}
            </div>
        </div>
    );
};

export default Movies;