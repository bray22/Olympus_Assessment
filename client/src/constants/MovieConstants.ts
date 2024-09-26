// API base URL
export const API_BASE_URL = 'https://localhost:7021/api';

// Endpoints
export const MOVIE_ENDPOINT = `${API_BASE_URL}/Movies`;
export const RETURN_ENDPOINT = `${API_BASE_URL}/Movies/return`;

// Other reusable constants
export const DEFAULT_CURRENCY = 'USD'; // Default currency for displaying prices
export const LOADING_MESSAGE = 'Loading...'; // Loading message to display while data is being fetched

// Error messages
export const ERROR_MOVIE_NOT_FOUND = 'Movie not found';

// Return movies
export const SUCCESS_RETURN_MESSAGE = 'Movies returned successfully!';
export const ERROR_RETURN_MESSAGE = 'Failed to return movies. Please try again.';
export const RETURN_CONFIRM_TIMEOUT_DURATION = 3000;

// checkout
export const CHECKOUT_CONFIRM_MESSAGE = 'Checkout confirmed!';
export const CHECKOUT_CONFIRM_TIMEOUT_DURATION = 3000; 
export const CHECKOUT_EMPTY_MESSAGE = 'No movies selected for checkout.'; 