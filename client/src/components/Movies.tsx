import React, { useEffect, useState } from 'react';
import { Movie } from '../types';
import Modal from './Modal'; // Import the modal component
import { MOVIE_ENDPOINT } from '../constants/MovieConstants'; 

interface MoviesProps {
    onSelectMovie: (movie: Movie) => void; // Accept a single movie for adding/removing
    selectedMovies: Movie[]; // Prop to check which movies are selected
    checkedOutMovies: Movie[]; // Prop to check which movies are checked out
}

const Movies: React.FC<MoviesProps> = ({ onSelectMovie, selectedMovies, checkedOutMovies }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // State for the selected movie
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    // Fetch movies from the API
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(MOVIE_ENDPOINT); // Use the constant for the API endpoint
            const data: Movie[] = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    // handle movie selection
    const handleSelectMovie = (movie: Movie) => {
        onSelectMovie(movie); // add/remove the movie from cart
    };

    const openModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="movies-container">
            <div className="movies-grid">
                {movies.map((movie) => {
                    const isSelected = selectedMovies.some(selected => selected.title === movie.title);
                    const isCheckedOut = checkedOutMovies.some(checkedOut => checkedOut.title === movie.title); // is checked out?

                    return (
                        <div
                            key={movie.title}
                            className={`movie-card ${isSelected ? 'selected' : ''}`} 
                            onClick={() => openModal(movie)} // Open modal on card click
                        >
                            <h4>{movie.title}</h4>
                            <p><strong>Genre:</strong> {movie.genre}</p>
                            <p><strong>Available Copies:</strong> {movie.availableCopies}</p>

                            {isCheckedOut ? (
                                <p className="checked-out-message">Checked-out</p>
                            ) : (
                                !isSelected && ( // Only render button if movie is not selected
                                    <button 
                                        className="button" 
                                        onClick={(e) => { // Handle add/remove separately
                                            e.stopPropagation(); 
                                            handleSelectMovie(movie); // add/remove the movie from cart
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                )
                            )}
                            {isSelected && (
                                <p className="in-cart-message">In Cart</p> 
                            )}
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
