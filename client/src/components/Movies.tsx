import React, { useEffect, useState } from 'react';
import { Movie } from '../types';
import Modal from './Modal'; // Import the modal component

interface MoviesProps {
    onSelectMovie: (movie: Movie) => void; // Accept a single movie for adding/removing
    selectedMovies: Movie[]; // Prop to check which movies are selected
}

const Movies: React.FC<MoviesProps> = ({ onSelectMovie, selectedMovies }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // State for the selected movie
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    // Fetch movies from the API
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://localhost:7021/api/Movies');
            const data: Movie[] = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    // Function to handle movie selection
    const handleSelectMovie = (movie: Movie) => {
        onSelectMovie(movie); // Call the function to add/remove the movie from cart
    };

    // Function to open modal
    const openModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="movies-container">
            <div className="movies-grid">
                {movies.map((movie) => {
                    const isSelected = selectedMovies.some(selected => selected.title === movie.title);
                    return (
                        <div
                            key={movie.title}
                            className={`movie-card ${isSelected ? 'selected' : ''}`} // Add a class for styling
                            onClick={() => openModal(movie)} // Open modal on card click
                        >
                            <h4>{movie.title}</h4>
                            <p><strong>Genre:</strong> {movie.genre}</p>
                            <p><strong>Available Copies:</strong> {movie.availableCopies}</p>
                            <button 
                                className="button" 
                                onClick={(e) => { // Handle add/remove separately
                                    e.stopPropagation(); // Prevent opening modal
                                    handleSelectMovie(movie);
                                }}
                                disabled={movie.availableCopies === 0} // Disable button if no copies available
                            >
                                {isSelected ? 'Remove from Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    );
                })}
            </div>
            {isModalOpen && selectedMovie && ( // Render modal if open
                <Modal 
                    movie={selectedMovie} 
                    onClose={closeModal} 
                    onSelectMovie={handleSelectMovie} // Pass the add/remove function to the modal
                    selectedMovies={selectedMovies} // Pass selected movies to check if movie is in cart
                />
            )}
        </div>
    );
};

export default Movies;
