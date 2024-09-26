import React from 'react';
import { Link } from 'react-router-dom';

 // Main header section
const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Movie Rentals Online</h1>
            <nav className="header-nav">
                <Link to="/">Movies List</Link>
                <Link to="/return">Return Movies</Link> 
                <Link to="/checkout">Checkout</Link>
                
            </nav>
        </header>
    );
};

export default Header;
