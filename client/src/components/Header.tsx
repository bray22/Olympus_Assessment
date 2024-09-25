// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Movie Rental Application</h1>
            <nav className="header-nav">
                <Link to="/">Movies List</Link>
                <Link to="/checkout">Checkout</Link>
            </nav>
        </header>
    );
};

export default Header;
