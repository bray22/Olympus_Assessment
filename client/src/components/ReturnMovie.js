import React, { useState } from 'react';
import axios from 'axios';

const ReturnMovies = ({ selectedMovies }) => {
    const handleReturn = async () => {
        const titles = selectedMovies.map(movie => movie.title);
        try {
            await axios.post('https://localhost:7021/api/movies/return', titles);
            alert('Movies returned successfully!');
        } catch (error) {
            console.error('Error returning movies:', error);
        }
    };

    return (
        <div>
            <h2>Return Movies</h2>
            <button onClick={handleReturn}>Return Selected Movies</button>
        </div>
    );
};

export default ReturnMovies;